import __stayListing from "./jsons/__stayListing.json";
import { DEMO_STAY_CATEGORIES } from "./Taxonomies";
import { StayDataType, RoomsDataType } from "./Types";
import { DEMO_AUTHORS } from "./Authors";
import { Route } from "@/app/components/routers/type";
import { useTranslations } from "next-intl";

// const roomData1: RoomsDataType = useTranslations("StandartRoom1");
// const roomdata2: RoomsDataType = useTranslations("StandartRoom2");
// const roomData3: RoomsDataType = useTranslations("LuxRoom1");
// const roomData4: RoomsDataType = useTranslations("LuxRoom2");

// const allRoomData: RoomsDataType[] = [
//   roomData1,
//   roomdata2,
//   roomData3,
//   roomData4,
// ];

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    href: post.href as Route,
  };
});

// const STAY_LIST = allRoomData.map((post, index): RoomsDataType => {
//   return post;
// });

export { DEMO_STAY_LISTINGS };
