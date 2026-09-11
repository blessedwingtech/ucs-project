#!/bin/bash
# deploy.sh
# Script de déploiement pour Universe Center Services (UCS)

echo "🚀 Démarrage du déploiement de UCS..."

# 1. Récupération du code (si vous utilisez git, décommentez la ligne ci-dessous)
# git pull origin main

# 2. Installation des dépendances
echo "📦 Installation des dépendances..."
npm install --legacy-peer-deps

# 3. Configuration de la base de données (PostgreSQL pour la Prod)
echo "🗄️ Configuration du schéma Prisma pour PostgreSQL..."
cp prisma/schema.postgres.prisma prisma/schema.prisma

# 4. Génération du client Prisma et Migration
echo "⚙️ Génération du client Prisma et application des migrations..."
npx prisma generate
npx prisma db push # Note: En production stricte, utilisez 'npx prisma migrate deploy' si vous avez des fichiers de migration

# Optionnel: Seed de la base de données si c'est le premier déploiement
# npm run db:seed

# 5. Build de l'application Next.js
echo "🏗️ Build de l'application Next.js..."
npm run build

# 6. Redémarrage du processus avec Systemd
echo "🔄 Redémarrage de l'application via Systemd..."
sudo systemctl restart ucs-website

echo "✅ Déploiement terminé avec succès !"
