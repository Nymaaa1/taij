"use client";

import ListingImageGallery from "@/app/components/listing-image-gallery/ListingImageGallery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import { imageGallery as listingStayImageGallery } from "@/app/(widget)/(listing-stay-detail)/constant";
import { Route } from "next";

const HotelRoomLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}` as Route);
  };

  const getImageGalleryListing = () => {
    return listingStayImageGallery;
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
