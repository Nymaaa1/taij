import __stayListing from "./jsons/__stayListing.json";
import { DEMO_STAY_CATEGORIES } from "./Taxonomies";
import { StayDataType } from "./Types";
import { DEMO_AUTHORS } from "./Authors";
import { Route } from "@/app/components/routers/type";

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  //  ##########  GET CATEGORY BY CAT ID ######## //
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    listingCategory: category,
    href: post.href as Route,
  };
});

export { DEMO_STAY_LISTINGS };
