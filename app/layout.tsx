import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/global";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0CCF0E",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Volteryde",
    default: "Volteryde | Smart Electric Transport for Africa",
  },
  description: "Join the move toward greener transportation. Volteryde empowers sustainable movement across Africa with electric transport and intelligent mobility solutions. Download the app today.",
  keywords: ["Volteryde", "Electric Bus", "Sustainable Transport", "Africa", "Ghana", "Green Energy", "Smart Mobility", "Public Transport"],
  authors: [{ name: "Volteryde Team" }],
  creator: "Volteryde",
  publisher: "Volteryde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://volteryde.com"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png?v=3",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png?v=3",
      },
    ],
  },
  openGraph: {
    title: "Volteryde | Smart Electric Transport for Africa",
    description: "Empowering sustainable movement across Africa with electric transport and intelligent mobility solutions.",
    url: "https://volteryde.com",
    type: "website",
    siteName: "Volteryde",
    images: [
      {
        url: "https://volteryde.com/og_image.png",
        secureUrl: "https://volteryde.com/og_image.png",
        width: 1200,
        height: 630,
        alt: "Volteryde - Smart Electric Transport for Africa",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volteryde | Smart Electric Transport for Africa",
    description: "Join the move toward greener transportation. Volteryde empowers sustainable movement across Africa with electric transport and intelligent mobility solutions.",
    images: ["https://volteryde.com/og_image.png"],
    creator: "@volteryde",
    site: "@volteryde",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Volteryde",
    description: "Smart Electric Transport for Africa - Empowering sustainable movement with electric buses and intelligent mobility solutions.",
    url: "https://volteryde.com",
    logo: "https://volteryde.com/mainlogo.png",
    sameAs: [
      "https://www.linkedin.com/company/volteryde/",
      "https://www.instagram.com/volterydeghana/",
      "https://www.tiktok.com/@volteryde"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233534544454",
      email: "info@volteryde.com",
      contactType: "customer service",
      areaServed: "GH",
      availableLanguage: "English"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH"
    }
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Volteryde",
    operatingSystem: "Android, iOS",
    applicationCategory: "TravelApplication",
    description: "Book electric bus rides in Africa. Track your bus, pay securely, and enjoy eco-friendly transportation.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
