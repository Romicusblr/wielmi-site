import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { FC } from "react";
import classNames from "classnames";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

const font = Montserrat({ subsets: ["latin"], weight: ["100", "400", "700"] });

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Wielmi",
  description: "Wielmi site",
};

const RootLayout: FC<RootLayoutProps> = function ({ children }) {
  return (
    <html lang="en">
      <body className={classNames(font.className, "text-justify text-base")}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
