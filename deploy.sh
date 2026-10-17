#!/bin/bash
# deploy.sh
# Script de déploiement pour Universe Center Services (UCS)

set -e

echo "🚀 Démarrage du déploiement de UCS..."

# 1. Récupération propre et forcée depuis GitHub (évite tout conflit de merge en production)
git fetch origin main
git reset --hard origin/main

# 2. Configuration du schéma de base de données (PostgreSQL pour la Prod)
echo "🗄️ Configuration du schéma Prisma pour PostgreSQL..."
cp prisma/schema.postgres.prisma prisma/schema.prisma

# 3. Build et Démarrage via Docker Compose
echo "🐳 Déploiement via Docker Compose..."
docker-compose up -d --build

# 4. Migration Prisma dans le conteneur (--yes pour ne jamais demander confirmation)
echo "🗄️ Application des migrations Prisma dans le conteneur..."
docker exec ucs-website npx --yes prisma@5.21.0 db push --accept-data-loss --skip-generate

# 5. Initialisation de l'administrateur et du contenu par défaut (Seed)
echo "🌱 Initialisation de l'administrateur et du contenu..."
npx --yes prisma@5.21.0 generate --schema=prisma/schema.postgres.prisma
npx --yes tsx prisma/seed.ts

echo "✅ Déploiement et initialisation terminés avec succès !"
