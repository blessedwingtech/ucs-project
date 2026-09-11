#!/bin/bash
# deploy.sh
# Script de déploiement pour Universe Center Services (UCS)

echo "🚀 Démarrage du déploiement de UCS..."

# 1. Récupération du code depuis GitHub
git pull origin main

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

# 5. Build et Démarrage via Docker Compose
echo "🐳 Déploiement via Docker Compose..."
docker-compose up -d --build

# Note : Prisma DB push est exécutable via : docker exec ucs-website npx prisma db push
echo "🗄️ Application des migrations Prisma dans le conteneur..."
docker exec ucs-website npx prisma db push

echo "✅ Déploiement Docker terminé avec succès !"
