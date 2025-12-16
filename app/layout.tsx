import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/global";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Voltryde",
    default: "Voltryde | Smart Electric Transport for Africa",
  },
  description: "Join the move toward greener transportation. Voltryde empowers sustainable movement across Africa with electric transport and intelligent mobility solutions. Download the app today.",
  keywords: ["Voltryde", "Electric Bus", "Sustainable Transport", "Africa", "Ghana", "Green Energy", "Smart Mobility", "Public Transport"],
  authors: [{ name: "Voltryde Team" }],
  // metadataBase: new URL("https://volteryde.com"),

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
    title: "Voltryde | Smart Electric Transport for Africa",
    description: "Empowering sustainable movement across Africa with electric transport and intelligent mobility solutions.",
    type: "website",
    siteName: "Voltryde",
    images: [
      {
        url: "/assets/Logo.png", // Using the logo as a fallback OG image since opengraph-image.jpg might not exist or be generic
        width: 800,
        height: 600,
        alt: "Voltryde Logo",
      },
    ],
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
