import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ErixAssistant } from "@/components/ErixAssistant";
import { PageTransition } from "@/components/PageTransition";
import { SplashScreen } from "@/components/SplashScreen";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eric's Saloon — Kabira Country Club Hair Studio",
  description:
    "Eric's Saloon is a premium hair studio at Kabira Country Club specialized in expert cuts, colour, and luxury treatments. Call or text to book.",
  metadataBase: new URL("https://www.ericssaloon.com"),
  openGraph: {
    title: "Eric's Saloon — Kabira Country Club Hair Studio",
    description:
      "Premium Kabira hair studio. Cuts, colour, treatments. Call or text to book.",
    type: "website",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/logo-transparent.png", type: "image/png" },
    ],
    apple: "/logo-transparent.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Eric's Salon",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "theme-color": "#0d0f14",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        <SplashScreen />
        <PageTransition>
          {children}
        </PageTransition>
        <ErixAssistant />
      </body>
    </html>
  );
}
