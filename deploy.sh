#!/bin/bash
# deploy.sh
# Script de déploiement automatique pour Universe Center Services (UCS)

set -e

# 1. Se positionner automatiquement dans le répertoire du projet (/var/www/ucs)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -d "/var/www/ucs" ]; then
  cd "/var/www/ucs"
else
  cd "$SCRIPT_DIR"
fi

# 2. Créer automatiquement les raccourcis système globaux (s'ils n'existent pas déjà)
# Cela permet de taper simplement 'ucs-deploy' ou 'deploy-ucs' depuis n'importe où
for SHORTCUT in "/usr/local/bin/ucs-deploy" "/usr/local/bin/deploy-ucs"; do
  if [ ! -L "$SHORTCUT" ] && [ -w "/usr/local/bin" ]; then
    ln -sf "$(pwd)/deploy.sh" "$SHORTCUT"
    chmod +x "$SHORTCUT"
  fi
done

# 3. Synchronisation automatique et forcée avec GitHub (auto-update)
if [ "$DEPLOY_SYNCED" != "true" ]; then
  echo "🚀 Démarrage du déploiement UCS dans $(pwd)..."
  echo "📥 Récupération des dernières modifications depuis GitHub (main)..."
  git fetch origin main
  git reset --hard origin/main
  chmod +x deploy.sh
  
  # Relance la version fraîchement téléchargée du script pour exécuter la suite
  export DEPLOY_SYNCED=true
  exec ./deploy.sh "$@"
fi

echo "⚙️ Application de la nouvelle version..."

# 4. Configuration du schéma de base de données (PostgreSQL pour la Production)
echo "🗄️ Configuration du schéma Prisma pour PostgreSQL..."
cp prisma/schema.postgres.prisma prisma/schema.prisma

# 5. Build et Démarrage via Docker Compose
echo "🐳 Déploiement et reconstruction du conteneur via Docker Compose..."
docker-compose up -d --build

# 6. Migration Prisma dans le conteneur (--yes pour ne jamais demander confirmation)
echo "🗄️ Application des migrations Prisma dans le conteneur..."
docker exec ucs-website npx --yes prisma@5.21.0 db push --accept-data-loss --skip-generate

# 7. Initialisation de l'administrateur et du contenu par défaut (Seed)
echo "🌱 Initialisation de l'administrateur et du contenu..."
npx --yes prisma@5.21.0 generate --schema=prisma/schema.postgres.prisma
npx --yes tsx prisma/seed.ts

echo ""
echo "==========================================================="
echo "✅ Déploiement et initialisation terminés avec succès !"
echo "🌐 Site accessible sur : https://ucs.bittonik.com"
echo "⚡ Astuce : vous pouvez maintenant lancer 'ucs-deploy' directement depuis n'importe quel dossier !"
echo "==========================================================="
