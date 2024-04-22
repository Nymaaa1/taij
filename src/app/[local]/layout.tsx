import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import "@/app/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/app/styles/index.scss";
import "rc-slider/assets/index.css";
import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import headIcon from "@/app/components/images/logos/head-image.png";
import SiteHeader from "../(widget)/(client-components)/(Header)/SiteHeader";
import FooterNav from "../components/footer/FooterNav";
import Footer from "../components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TAIJ BUSINESS HOTEL",
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        url: headIcon.src,
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        url: headIcon.src,
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const font = locale === "en" ? poppins : roboto;
  const messages = useMessages();
  return (
    <html lang={locale} className={font.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SiteHeader />
          <div className={`nc-ListingStayPage relative `}>
            {children}
          </div>
          <FooterNav />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
