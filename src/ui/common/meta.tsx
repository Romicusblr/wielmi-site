import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://wielmi.pl"),
  title: {
    template: "%s | Wielmi Kraków",
    default: "Inteligentny Dom, Instalacje Elektryczne | Wielmi Kraków",
  },
  description:
    "Firma Wielmi oferuje instalacje elektryczne, inteligentne domy i sieci lokalne w Krakowie. Profesjonalne rozwiązania dla nowoczesnych domów.",
  keywords: ["Inteligentny dom Kraków", "Instalacje elektryczne", "Sieci lokalne", "Smart home", "Wielmi Kraków"],
  applicationName: "Wielmi",
  openGraph: {
    title: "Inteligentny Dom - Wielmi Kraków",
    description:
      "Profesjonalne instalacje elektryczne i inteligentne systemy domowe dla nowoczesnych domów w Krakowie.",
    url: "https://wielmi.pl",
    siteName: "Wielmi",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligentny Dom - Wielmi Kraków",
    description: "Oferujemy inteligentne domy, instalacje elektryczne oraz sieci lokalne w Krakowie.",
  },
  alternates: {
    canonical: "https://wielmi.pl",
  },
};
