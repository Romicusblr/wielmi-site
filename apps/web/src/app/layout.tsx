import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { FC } from "react";

const font = Montserrat({ subsets: ["latin"] });

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Wielmi",
  description: "Wielmi site",
};

const RootLayout: FC<RootLayoutProps> = function({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
