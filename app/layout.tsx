import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://novacriptoweb.com"),
  title: {
    default: "NOVACRIPTOWEB",
    template: "%s | NOVACRIPTOWEB",
  },
  description:
    "Plataforma digital financiera para el intercambio de criptomonedas. Token NOVA (NVC) con utilidad real: descuentos, acceso premium y gobernanza.",
  authors: [{ name: "Aquile Rafael Cones" }],
  creator: "NOVACRIPTOWEB",
};
