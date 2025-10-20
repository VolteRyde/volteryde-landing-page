import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Voltryde",
    default: "Voltryde - ",
  },
  description:
    "",
  // metadataBase: new URL(""),

  icons: {
    icon: "/app/favicon.ico",
    shortcut: "/app/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Voltryde - ",
    description:
      "",
    type: "website",
    siteName: "Voltryde",
    images: ["opengraph-image.jpg"],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
