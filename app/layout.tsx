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

  openGraph: {
    type: "website",
    url: "https://novacripto.com",
    siteName: "NOVACRIPTOWEB",
    title: "NOVACRIPTOWEB",
    description:
      "Plataforma digital financiera para el intercambio seguro y sencillo de criptomonedas. Token NOVA (NVC) con utilidad real.",
    locale: "es_ES",
    // Si no tienes imagen OG todavía, puedes borrar 'images' por completo.
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NOVACRIPTOWEB",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NOVACRIPTOWEB",
    description:
      "Plataforma digital financiera para el intercambio seguro y sencillo de criptomonedas. Token NOVA (NVC) con utilidad real.",
    // Si no tienes imagen OG todavía, puedes borrar 'images' por completo.
    images: ["/og.png"],
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
