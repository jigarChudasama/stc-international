export const HOME_ROUTE = "/";

export function formatPrice(price) {
  return `$${price.toLocaleString("en-US")}`;
}

export function normalizeImageUrl(url, width = 1920) {
  if (!url) return "";
  const absolute = url.startsWith("//") ? `https:${url}` : url;
  if (absolute.includes("hermesproduct")) {
    if (absolute.includes("size=")) return absolute;
    const separator = absolute.includes("?") ? "&" : "?";
    return `${absolute}${separator}size=3000,3000&extend=0,0,0,0&align=0,0`;
  }
  const separator = absolute.includes("?") ? "&" : "?";
  return `${absolute}${separator}fit=wrap,0&wid=${width}&resMode=sharp2&op_usm=1,1,6,0`;
}

export function isVideoAsset(url) {
  if (!url) return false;
  return /VI-AVS|\.mp4|\/video\//i.test(url);
}
