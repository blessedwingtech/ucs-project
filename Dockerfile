# Étape 1 : Dépendances
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# Copie des fichiers de configuration package
COPY package.json package-lock.json* ./
# Copie du schéma Prisma
COPY prisma ./prisma/

RUN npm install
# Générer le client Prisma ici pour qu'il soit mis en cache avec les node_modules
RUN npx prisma generate

# Étape 2 : Builder
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de l'application Next.js
RUN npm run build

# Étape 3 : Production Runner
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie des fichiers statiques
COPY --from=builder /app/public ./public

# Configuration correcte des permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copie de l'application standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# On a besoin de Prisma CLI dans l'image finale pour pouvoir faire "npx prisma db push" ou "migrate deploy" au démarrage si souhaité, 
# mais généralement c'est fait en CI. Copions le dossier prisma.
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

USER nextjs

EXPOSE 3000
ENV PORT=3000

# Démarrage avec le server standalone
CMD ["node", "server.js"]
