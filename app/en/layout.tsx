import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://novacriptoweb.com/en",
    languages: {
      es: "https://novacriptoweb.com/es",
      en: "https://novacriptoweb.com/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>;
}
