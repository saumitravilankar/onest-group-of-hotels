export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://127.0.0.1:1337";
}

export function getStrapiMedia(url) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

export function getFeatureLogo(icon) {
  switch (icon) {
    case "PRICE_GUARANTEE":
      return "/img/featureIcons/1/1.svg";
    case "EASY_BOOKING":
      return "/img/featureIcons/1/2.svg";
    case "CUSTOMER_CARE":
      return "/img/featureIcons/1/3.svg";
    default:
      return "/img/featureIcons/1/1.svg";
  }
}

export function getTagClass(tag) {
  if (tag.includes("OFF")) {
    return "bg-brown-1 text-white";
  }

  switch (tag) {
    case "BREAKFAST_INCL":
      return "bg-dark-1 text-white";
    case "BEST_SELLER":
      return "bg-blue-1 text-white";
    case "TOP_RATED":
      return "bg-yellow-1 text-dark-1";
    default:
      return "bg-dark-1 text-white";
  }
}
