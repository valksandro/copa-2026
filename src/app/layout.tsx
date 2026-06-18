import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Copa do Mundo 2026 | Mundial FIFA EUA • México • Canadá",
  description: "Site completo da Copa do Mundo de Futebol 2026: 48 seleções, 12 grupos, chaves, estádios, calendário, artilheiros históricos e muito mais.",
  keywords: ["Copa do Mundo 2026", "World Cup", "FIFA", "Mundial", "seleções", "futebol"],
  authors: [{ name: "World Cup 2026" }],
  icons: {
    icon: "⚽",
  },
  // Importante para GitHub Pages: GitHub não serve bem 404 custom sem isso
  metadataBase: new URL("https://example.github.io/copa-2026"),
};

// viewport precisa ser exportado separadamente no Next 16
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0815",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
