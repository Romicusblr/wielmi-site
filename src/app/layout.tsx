import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { FC } from "react";
import classNames from "classnames";
import Footer from "@/ui/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "@/ui/navbar";
import GridLines from "@/ui/grid-lines";

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
        <GridLines />
        <NavBar />
        <main className="flex flex-col justify-between min-h-screen">{children}</main>
        <Footer />
      </body>
      {/* <GoogleAnalytics gaId={gaId} /> */}
    </html>
  );
};

export default RootLayout;
