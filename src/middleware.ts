import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "mn", "ru"],

  // Used when no locale matches
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(mn|en|ru)/:path*"],
};
