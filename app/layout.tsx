import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ucs.bittonik.com'),
  title: {
    template: '%s | Universe Center Services (UCS)',
    default: 'Universe Center Services (UCS) | Language & Business Solutions',
  },
  description: "Universe Center Services (UCS) provides professional multilingual interpretation, translation, and BPO business services worldwide. Breaking language barriers and powering business success.",
  keywords: [
    "Universe Center Services",
    "UCS",
    "Language services",
    "Interpretation",
    "Translation",
    "BPO solutions",
    "Remote business support",
    "Haitian Creole interpretation",
    "Medical interpreter",
    "Legal translation",
    "Multilingual BPO",
    "Document localization"
  ],
  authors: [{ name: 'Universe Center Services', url: 'https://ucs.bittonik.com' }],
  creator: 'Universe Center Services',
  publisher: 'Universe Center Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://ucs.bittonik.com',
  },
  openGraph: {
    title: 'Universe Center Services (UCS) | Language & Business Solutions',
    description: 'Professional multilingual interpretation, certified translation, and scalable BPO solutions worldwide.',
    url: 'https://ucs.bittonik.com',
    siteName: 'Universe Center Services',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Universe Center Services (UCS) - Breaking Language Barriers. Powering Business Success.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Universe Center Services (UCS)',
    description: 'Breaking Language Barriers. Powering Business Success.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Universe Center Services',
  alternateName: 'UCS',
  url: 'https://ucs.bittonik.com',
  logo: 'https://ucs.bittonik.com/icon.png',
  image: 'https://ucs.bittonik.com/og-image.png',
  description: 'Universe Center Services (UCS) provides professional language solutions (interpretation, translation) and business support services (BPO).',
  email: 'info@universecenterservices.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  knowsLanguage: [
    'en', 'ht', 'fr', 'es', 'pt', 'ar', 'zh', 'ja', 'ko', 'de', 'it', 'nl', 'ru', 'tr', 'hi', 'vi', 'tl', 'pl', 'ro', 'el'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Language and Business Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interpretation Services',
          description: 'On-demand and scheduled OPI, VRI, medical, legal, and educational interpretation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Translation & Localization Services',
          description: 'Certified document translation, technical manual translation, and digital localization.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'BPO Business Support Services',
          description: 'Remote customer engagement, virtual assistants, and multilingual operational workflows.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
