# Universe Center Services (UCS)

This is a Next.js 15 application for Universe Center Services (UCS) with an integrated Admin Dashboard for managing announcements.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Database ORM: Prisma
- Auth: NextAuth.js (Credentials provider)
- Icons: Lucide-react

## Local Development (SQLite)

The project is configured to use SQLite out of the box for local development.

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Initialize Database & Generate Prisma Client**
   First, make sure the local schema is in place. By default, `prisma/schema.sqlite.prisma` is provided. If `prisma/schema.prisma` is missing or pointing to Postgres, run:
   ```bash
   cp prisma/schema.sqlite.prisma prisma/schema.prisma
   ```
   
   Then generate and push the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Seed the Database**
   Populate the database with the initial Admin user and some sample announcements:
   ```bash
   npm run db:seed
   # Or directly: npx tsx prisma/seed.ts
   ```
   *Note: Ensure your `.env` file contains `ADMIN_EMAIL` and `ADMIN_PASSWORD` before seeding. You can copy them from `.env.example`.*

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Access the public site at `http://localhost:3000`.
   Access the admin dashboard at `http://localhost:3000/admin`.

## Switching to PostgreSQL (Production)

Prisma does not support dynamically switching between SQLite and PostgreSQL using an environment variable without running into data type mismatch issues. Therefore, this project uses a **dual-schema approach** for stability.

1. Copy the PostgreSQL schema to replace the default schema:
   ```bash
   cp prisma/schema.postgres.prisma prisma/schema.prisma
   ```

2. Update your `.env` file to point to your PostgreSQL database:
   ```env
   DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"
   ```

3. Generate the new client and push the schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
   *(For production, you should use `npx prisma migrate deploy` instead of `db push`, but `db push` is fine for the initial setup).*

## Environment Variables

Check `.env.example` for all required environment variables:
- `DATABASE_URL`: Connection string for SQLite or PostgreSQL.
- `ADMIN_EMAIL`: Admin login email (default: universeschoolus@gmail.com).
- `ADMIN_PASSWORD`: Admin login password.
- `NEXTAUTH_URL`: The canonical URL of your site (e.g., http://localhost:3000).
- `NEXTAUTH_SECRET`: Secret used by NextAuth to encrypt sessions.

## Contact Form (Formspree)

The contact form on the `/contact` page is configured to submit directly to Formspree at `https://formspree.io/f/mkovzvrb`. This abstracts the email logic securely and robustly without needing a custom email sender implementation.

## Deployment (Vercel)

1. Connect your repository to Vercel.
2. In the Vercel dashboard, add all the environment variables from `.env.example`, making sure to use a secure `NEXTAUTH_SECRET` and your hosted PostgreSQL `DATABASE_URL`.
3. Set the build command to:
   ```bash
   cp prisma/schema.postgres.prisma prisma/schema.prisma && npx prisma generate && npx prisma db push && next build
   ```
4. Deploy!
