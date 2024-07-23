// import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import headIcon from "@/app/components/images/logos/head-image.png";

interface GenerationMetaData {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: Readonly<GenerationMetaData>) {
  const t = await getTranslations(locale);
  return {
    title: t("Meta-about"),
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const message = useTranslations("About");
  return children;
}
