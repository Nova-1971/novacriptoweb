import type { Metadata } from "next";
import "./globals.css";
import LangHtmlUpdater from "./_components/LangHtmlUpdater";

export const metadata: Metadata = {
  metadataBase: new URL("https://novacripto.com"),
  title: {
    default: "NOVACRIPTOWEB",
    template: "%s | NOVACRIPTOWEB",
  },
  description:
    "Plataforma digital financiera para el intercambio seguro y sencillo de criptomonedas.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        {/* Esto ajusta el lang del <html> según la ruta (/es o /en) */}
        <LangHtmlUpdater />
        {children}
      </body>
    </html>
  );
}

