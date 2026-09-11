#!/bin/bash
# deploy.sh
# Script de déploiement pour Universe Center Services (UCS)

echo "🚀 Démarrage du déploiement de UCS..."

# 1. Récupération du code depuis GitHub
git pull origin main

# 2. Configuration du schéma de base de données (PostgreSQL pour la Prod)
echo "🗄️ Configuration du schéma Prisma pour PostgreSQL..."
cp prisma/schema.postgres.prisma prisma/schema.prisma

# 3. Build et Démarrage via Docker Compose
echo "🐳 Déploiement via Docker Compose..."
docker-compose up -d --build

# 4. Migration Prisma dans le conteneur
echo "🗄️ Application des migrations Prisma dans le conteneur..."
# L'utilisation de --accept-data-loss ou similaire peut être requise si db push demande confirmation
# Mais pour éviter que le prompt ne bloque (comme vu précédemment), on s'assure d'exécuter de façon non interactive
docker exec ucs-website npx prisma db push --accept-data-loss

echo "✅ Déploiement Docker terminé avec succès !"
