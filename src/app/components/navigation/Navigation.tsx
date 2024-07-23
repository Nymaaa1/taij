import React from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";
import { useTranslations } from "next-intl";

const Navigation = () => {
  const t = useTranslations();
  const translatedValues: NavItemType[] = t.raw("Navigation");
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {translatedValues.map((item: NavItemType) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  )
};

export default Navigation;
