export const HOME_ROUTE = "/";

export function formatPrice(price) {
  return `$${price.toLocaleString("en-US")}`;
}

export function normalizeHermesImageUrl(url) {
  if (!url) return "";
  return url
    .replace(/&?\$product_item_grid_g\$/g, "")
    .replace(/\?&/, "?")
    .replace(/&&+/g, "&")
    .replace(/\?$/, "");
}

export function normalizeImageUrl(url, width = 1920) {
  if (!url) return "";
  const absolute = url.startsWith("//") ? `https:${url}` : url;
  const cleaned = normalizeHermesImageUrl(absolute);
  if (cleaned.includes("hermesproduct")) {
    if (cleaned.includes("size=")) return cleaned;
    const separator = cleaned.includes("?") ? "&" : "?";
    return `${cleaned}${separator}size=3000,3000&extend=0,0,0,0&align=0,0`;
  }
  const separator = cleaned.includes("?") ? "&" : "?";
  return `${cleaned}${separator}fit=wrap,0&wid=${width}&resMode=sharp2&op_usm=1,1,6,0`;
}

export function isVideoAsset(url) {
  if (!url) return false;
  return /VI-AVS|\.mp4|\/video\//i.test(url);
}
