import type { Metadata } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aïssa Events | Organisation d'Événements Haut de Gamme",
  description: "Création de moments inoubliables. Organisation d'événements premium pour mariages, événements d'entreprise et soirées privées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${pinyon.variable} font-sans antialiased bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-amber-900`}
      >
        {children}
      </body>
    </html>
  );
}
