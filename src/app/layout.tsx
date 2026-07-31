import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { BasketProvider, FavoritesProvider } from "@/shared/store";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "TikTak",
  description: "TikTak — onlayn market",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <BasketProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </BasketProvider>
      </body>
    </html>
  );
}
