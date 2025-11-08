import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handbal Transparent - Platformă pentru Transparență în Handbalul Juvenil",
  description: "Prima platformă din România dedicată transparenței în handbalul juvenil: raportare nereguli, știri verificate, consultanță juridică.",
  keywords: "handbal, handbal juvenil, transparență sport, raportare nereguli, sport România",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
