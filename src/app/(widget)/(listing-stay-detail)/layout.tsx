// "use client";

// import BackgroundSection from "@/app/components/header/BackgroundSection";
// import ListingImageGallery from "@/app/components/listing-image-gallery/ListingImageGallery";
// import SectionSliderNewCategories from "@/app/components/shared/SectionSliderNewCategories";
// // import SectionSubscribe2 from "@/components/SectionSubscribe2";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import React, { ReactNode } from "react";
// // import MobileFooterSticky from "./(components)/MobileFooterSticky";
// import { imageGallery as listingStayImageGallery } from "./constant";
// import { Route } from "next";

// const DetailtLayout = ({ children }: { children: ReactNode }) => {
//   const router = useRouter();
//   const thisPathname = usePathname();
//   const searchParams = useSearchParams();
//   const modal = searchParams?.get("modal");

//   const handleCloseModalImageGallery = () => {
//     let params = new URLSearchParams(document.location.search);
//     params.delete("modal");
//     router.push(`${thisPathname}/?${params.toString()}` as Route);
//   };

//   const getImageGalleryListing = () => {
//     return listingStayImageGallery;
//   };

//   return (
//     <div className="ListingDetailPage">
//       <ListingImageGallery
//         isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
//         onClose={handleCloseModalImageGallery}
//         images={getImageGalleryListing()}
//       />

//       <div className="container ListingDetailPage__content">{children}</div>

//       {/* OTHER SECTION */}
//       <div className="container py-24 lg:py-32">
//         <div className="relative py-16">
//           <BackgroundSection />
//           <SectionSliderNewCategories
//             heading="Explore by types of stays"
//             subHeading="Explore houses based on 10 types of stays"
//             categoryCardType="card5"
//             itemPerRow={5}
//             sliderStyle="style2"
//           />
//         </div>
//         {/* <SectionSubscribe2 className="pt-24 lg:pt-32" /> */}
//       </div>

//       {/* STICKY FOOTER MOBILE */}
//       {/* <MobileFooterSticky /> */}
//     </div>
//   );
// };

// export default DetailtLayout;