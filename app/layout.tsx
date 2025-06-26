import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'AndoraAI - CRM Inteligente que Fala a Verdade',
    template: '%s | AndoraAI'
  },
  description: 'O único CRM com IA que te diz a verdade sobre sua empresa. Automatize vendas via WhatsApp, organize leads e receba relatórios diretos sobre sua performance.',
  keywords: ['CRM', 'IA', 'WhatsApp', 'automação', 'vendas', 'leads', 'relatórios', 'inteligência artificial'],
  authors: [{ name: 'AndoraAI' }],
  creator: 'AndoraAI',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://andoraai.com',
    siteName: 'AndoraAI',
    title: 'AndoraAI - CRM Inteligente que Fala a Verdade',
    description: 'O único CRM com IA que te diz a verdade sobre sua empresa. Automatize vendas via WhatsApp, organize leads e receba relatórios diretos sobre sua performance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AndoraAI - CRM Inteligente',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AndoraAI - CRM Inteligente que Fala a Verdade',
    description: 'O único CRM com IA que te diz a verdade sobre sua empresa.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#231648" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}