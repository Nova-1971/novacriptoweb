import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novacripto.com"),
  title: {
    default: "NOVACRIPTOWEB",
    template: "%s | NOVACRIPTOWEB",
  },
  description:
    "Plataforma digital financiera para el intercambio seguro y sencillo de criptomonedas. Token NOVA (NVC) con utilidad real: descuentos en comisiones, acceso premium y gobernanza.",
  authors: [{ name: "Aquile Rafael Cones" }],
  creator: "NOVACRIPTOWEB",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
