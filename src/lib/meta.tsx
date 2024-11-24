import { Metadata } from "next";
import { getCanonicalUrl } from "./seo";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://wielmi.pl"),
  title: "Inteligentny Dom, Instalacje Elektryczne | Wielmi Kraków",
  description:
    "Firma Wielmi oferuje instalacje elektryczne, inteligentne domy i sieci lokalne w Krakowie. Profesjonalne rozwiązania dla nowoczesnych domów.",
  keywords: [
    "Wielmi Smart Homes",
    "Inteligentny dom Kraków",
    "Smart home Kraków",
    "Innowacyjne rozwiązania inteligentny dom",
    "Systemy automatyki domowej Kraków",
    "Rozwiązania smart home",
    "Automatyzacja domu Kraków"
  ],
  applicationName: "Wielmi",
  openGraph: {
    title: "Inteligentny Dom - Wielmi Kraków",
    description:
      "Profesjonalne instalacje elektryczne i inteligentne systemy domowe dla nowoczesnych domów w Krakowie.",
    url: getCanonicalUrl("/"),
    siteName: "Wielmi",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligentny Dom - Wielmi Kraków",
    description: "Oferujemy inteligentne domy, instalacje elektryczne oraz sieci lokalne w Krakowie.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
};
