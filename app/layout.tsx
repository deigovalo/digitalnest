import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalNest - Transformamos Ideas en Experiencias Digitales",
  description: "Agencia de desarrollo web y diseño digital. Expertos en Next.js, React y soluciones a medida.",
  icons: {
    icon: "/DIGITALNEST_LOGO.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
