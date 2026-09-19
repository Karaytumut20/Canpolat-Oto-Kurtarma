import type { Metadata } from "next";
import { MobileBottomBar } from "@/components/mobile-bottom-bar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://canpolatotokurtarma.com"),
  title: { default: "Canpolat Oto Kurtarma | Ümraniye 7/24 Çekici", template: "%s | Canpolat Oto Kurtarma" },
  description: "Ümraniye, Çekmeköy, Sancaktepe ve İstanbul genelinde 7/24 oto çekici, ahtapot vinç ve yol yardım hizmeti. Hemen arayın: 0541 823 88 15.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://canpolatotokurtarma.com",
    siteName: "Canpolat Oto Kurtarma",
    title: "Canpolat Oto Kurtarma | Ümraniye 7/24 Çekici",
    description: "Ümraniye merkezli 7/24 oto çekici, oto kurtarma, ahtapot vinç ve yol yardım hizmeti.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:ital,wght@0,700;0,800;0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
