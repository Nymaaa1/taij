import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";
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
    title: t("Meta-karaoke"),
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
const HotelRoomLayout = ({ children }: { children: ReactNode }) => {
  return children;
};

export default HotelRoomLayout;
