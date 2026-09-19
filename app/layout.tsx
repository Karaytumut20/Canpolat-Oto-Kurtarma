import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://canpolatotokurtarma.com"),
  title: { default: "Canpolat Oto Kurtarma | Ümraniye 7/24 Çekici", template: "%s | Canpolat Oto Kurtarma" },
  description: "Ümraniye, Çekmeköy, Sancaktepe ve İstanbul genelinde 7/24 oto çekici, ahtapot vinç ve yol yardım hizmeti. Hemen arayın: 0541 823 88 15.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
