import { Metadata } from "next";

export const getCanonicalUrl = (path: string, locale: string = ""): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://wielmi.pl";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return locale ? `${baseUrl}/${locale}${normalizedPath}` : `${baseUrl}${normalizedPath}`;
};

export const getPageMetadata = (title: string, path: string): Metadata => {
  return {
    title: title + " | Wielmi Kraków",
    alternates: {
      canonical: getCanonicalUrl(path),
    },
    openGraph: {
      title,
    },
  };
};
