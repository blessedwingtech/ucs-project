import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'universeschoolus@gmail.com'
  const password = process.env.ADMIN_PASSWORD || 'universeschoolusadmin'
  const hashedPassword = await bcrypt.hash(password, 10)

  // Upsert Admin User
  const admin = await prisma.adminUser.upsert({
    where: { email },
    update: {
      passwordHash: hashedPassword,
    },
    create: {
      email,
      passwordHash: hashedPassword,
    },
  })

  console.log(`Admin user created/updated with email: ${admin.email}`)

  // Create Example Announcements
  const publishedPost = await prisma.announcement.upsert({
    where: { slug: 'welcome-to-ucs' },
    update: {},
    create: {
      title: 'Welcome to Universe Center Services (UCS)',
      slug: 'welcome-to-ucs',
      excerpt: 'We are thrilled to announce the launch of our new website and digital platform.',
      content: 'Welcome to Universe Center Services (UCS)!\n\nWe are excited to share our new digital presence. Our mission is to connect organizations with professional language experts and remote business support specialists to help overcome communication challenges and improve operational efficiency.\n\nThank you for visiting.',
      published: true,
      publishedAt: new Date(),
    }
  })

  const draftPost = await prisma.announcement.upsert({
    where: { slug: 'upcoming-bpo-expansion' },
    update: {},
    create: {
      title: 'Upcoming BPO Services Expansion',
      slug: 'upcoming-bpo-expansion',
      excerpt: 'We are expanding our BPO services in Q3.',
      content: 'This is a draft announcement that is not yet visible to the public. We will be expanding our BPO services soon!',
      published: false,
    }
  })

  console.log('Seeded announcements')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
