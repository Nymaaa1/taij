import __stayTaxonomies from "./jsons/__stayTaxonomies.json";
import { TaxonomyType } from "./Types";
import { Route } from "@/app/components/routers/type";

const DEMO_STAY_CATEGORIES: TaxonomyType[] = __stayTaxonomies.map((item) => ({
  ...item,
  taxonomy: "category",
  listingType: "stay",
  href: item.href as Route,
}));

export { DEMO_STAY_CATEGORIES };
