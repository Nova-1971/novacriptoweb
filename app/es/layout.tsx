import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://novacriptoweb.com/es",
    languages: {
      es: "https://novacriptoweb.com/es",
      en: "https://novacriptoweb.com/en",
    },
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
