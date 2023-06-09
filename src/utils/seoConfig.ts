import { type NextSeoProps } from "next-seo/lib/types";

const companyTitle = "xanny.dev";
const seoDescription = "A blog about web development and tech";
const siteURL = "https://xanny.dev/";
const themeColor = "#a8daf9";

export const SEOConfig: NextSeoProps = {
  canonical: siteURL,
  defaultTitle: companyTitle,
  description: seoDescription,

  openGraph: {
    url: siteURL,
    title: companyTitle,
    site_name: companyTitle,
    locale: "en_US",
    type: "website",
    description: seoDescription,
    images: [
      // { url: "https://bebop.xanny.dev/assets/hero.svg",  alt: "Logo", width: 512, height: 512, type: "image/svg" },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    site: "https://xanny.dev/",
  },
  additionalMetaTags: [
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    { name: "HandheldFriendly", content: "true" },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "application-name",
      content: companyTitle,
    },

    { name: "msapplication-TileColor", content: themeColor },
    { name: "theme-color", content: themeColor },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "apple-mobile-web-app-title",
      content: companyTitle,
    },
    {
      name: "apple-mobile-web-app-status-bar",
      content: themeColor,
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
  ],
  additionalLinkTags: [
    // { rel: "manifest",  href: "/manifest.json" },
    {
      rel: "icon",
      sizes: "48x48",
      href: "/favicon.ico",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: themeColor,
    },
  ],
};
