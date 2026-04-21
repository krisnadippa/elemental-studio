import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import TransitionProvider from "@/components/TransitionProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elemental-studio.id"),
  title: {
    default: "Elemental Studio | Premium Interior Design Bali",
    template: "%s | Elemental Studio"
  },
  description:
    "Elemental Studio crafts extraordinary living environments — blending creativity and functionality in luxury interior design. Based in Bali, operating worldwide.",
  keywords: [
    "interior design Bali",
    "luxury interior designer Indonesia",
    "interior studio Bali",
    "modern home design",
    "premium furniture Bali",
    "elemental studio architecture",
    "desain interior mewah",
  ],
  authors: [{ name: "Elemental Studio" }],
  creator: "Elemental Studio",
  publisher: "Elemental Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elemental Studio | Premium Interior Design Bali",
    description:
      "Transforming spaces into extraordinary experiences through thoughtful luxury interior design.",
    url: "https://elemental-studio.id",
    siteName: "Elemental Studio",
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesign",
    "name": "Elemental Studio",
    "image": "https://elemental-studio.id/images/logo.png",
    "description": "Premium interior design studio based in Indonesia specializing in luxury residential and commercial projects.",
    "url": "https://elemental-studio.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Sanggingan",
      "addressLocality": "Ubud",
      "addressRegion": "Bali",
      "postalCode": "80571",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.273,
      "longitude": 106.815
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/elemental.studio",
      "https://www.linkedin.com/company/elemental-studio"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <SmoothScroll>
          <TransitionProvider>
            <Navbar />
            {children}
            <Footer />
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
