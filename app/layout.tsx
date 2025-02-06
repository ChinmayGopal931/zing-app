import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "./components/Structure";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export const metadata: Metadata = {
  metadataBase: new URL('https://zing-app.vercel.app'), // Update with your domain
  title: 'ZING - Tobacco Free Nicotine Pouches for India',
  description: 'ZING offers premium tobacco-free nicotine pouches in India. A modern approach to nicotine replacement therapy, providing a cleaner alternative for nicotine consumption.',
  keywords: ['nicotine pouches', 'tobacco free', 'nicotine replacement therapy', 'zing', 'india', 'quit smoking'],
  
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zing-app.vercel.app',
    siteName: 'ZING Nicotine',
    title: 'ZING - Tobacco Free Nicotine Pouches',
    description: 'Premium tobacco-free nicotine pouches for the Indian market. A modern approach to nicotine replacement therapy.',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image in your public folder
        width: 1200,
        height: 630,
        alt: 'ZING Nicotine Pouches',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZING - Tobacco Free Nicotine Pouches',
    description: 'Premium tobacco-free nicotine pouches for the Indian market. Experience a cleaner nicotine alternative.',
    images: ['/twitter-image.jpg'], // Make sure to add this image in your public folder
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
  
  alternates: {
    canonical: 'https://zing-app.vercel.app',
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
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
