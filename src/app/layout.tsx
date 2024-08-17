import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { FC } from "react";
import classNames from "classnames";
import Footer from "@/ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "@/ui/landing/navbar-landing";

const font = Montserrat({ subsets: ["latin", "latin-ext"] });

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Wielmi",
  description: "Wielmi site",
};

const RootLayout: FC<RootLayoutProps> = function ({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";

  return (
    <html lang="pl-PL" className="scroll-smooth scroll-pt-20">
      <body className={classNames(font.className, "text-justify text-grey bg-[#F6FAFF]")}>
        <NavBar />
        {children}
        <Footer />
      </body>
      {/* <GoogleAnalytics gaId={gaId} /> */}
    </html>
  );
};

export default RootLayout;
