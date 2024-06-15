"use client";

import ListingImageGallery from "@/app/components/listing-image-gallery/ListingImageGallery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import { Route } from "next";
import headIcon from "@/app/components/images/logos/head-image.png";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

interface GenerationMetaData {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

// export async function generateMetadata({
//   params: { locale },
// }: Readonly<GenerationMetaData>) {
//   const t = await getTranslations(locale);
//   return {
//     title: t("Meta-family-room"),
//     icons: {
//       icon: [
//         {
//           rel: "icon",
//           media: "(prefers-color-scheme: light)",
//           type: "image/png",
//           url: headIcon.src,
//         },
//         {
//           rel: "icon",
//           media: "(prefers-color-scheme: dark)",
//           type: "image/png",
//           url: headIcon.src,
//         },
//       ],
//     },
//   };
// }

const HotelRoomLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");
  const rooms = useTranslations("Family-room");
  const roomImages: string[] = rooms.raw("asset_image");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const getImageGalleryListing = () => {
   return roomImages;
  };

  return (
    <div className="ListingDetailPage">
      <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      />
      <div className="container ListingDetailPage__content">{children}</div>
    </div>
  );
};

export default HotelRoomLayout;
