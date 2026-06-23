const generateNonce = () => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  const binary = String.fromCharCode(...array);
  return btoa(binary);
};
const nonce = generateNonce();

export const csp = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "*.moengage.com",
    `'nonce-${nonce}'`,
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://d157777v0iph40.cloudfront.net",
    "https://dxzbkowhmlqkh.cloudfront.net",
    "*.hotjar.com"
  ],
  "connect-src": [
    "'self'",
    "*.moengage.com",
    "cdn.jsdelivr.net",
    "unpkg.com",
    "https://d2hx8jjky1f7ly.cloudfront.net",
    "https://d157777v0iph40.cloudfront.net",
    "https://dxzbkowhmlqkh.cloudfront.net",
    "*.google-analytics.com",
    process.env.NEXT_PUBLIC_SUB_DOMAIN_URL,
    "wss://ws.hotjar.com",
    "https://content.hotjar.io"
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-hashes'",
    "*.moengage.com",
    "https://d157777v0iph40.cloudfront.net",
    "https://dxzbkowhmlqkh.cloudfront.net",
    "fonts.bunny.net"
  ],
  "img-src": [
    "'self'",
    "data:",
    "https:",
    "https://d2hx8jjky1f7ly.cloudfront.net",
    "https://d157777v0iph40.cloudfront.net",
    "https://dpimages.crayondata.com",
    "https://d2t4zwtead1tg4.cloudfront.net",
    "https://d2ugcnh6haovne.cloudfront.net",
    "https://server.arcgisonline.com",
    "https://r1imghtlak.mmtcdn.com",
    "https://rukmini-ct.flixcart.com",
    "https://r2imghtlak.mmtcdn.com",
    "https://mljbz4pszxqr.i.optimole.com",
    "https://dxzbkowhmlqkh.cloudfront.net",
    "*.mmtcdn.com",
    "*.arcgisonline.com",
    "*.ibcdn.com",
    "*.moengage.com",
    "*.google-analytics.com",
    "moe-email-campaigns.s3.amazonaws.com",
    "https://script.hotjar.com",
    "https://q-xx.bstatic.com",
    "https://i.travelapi.com",
    "*.yatra.com"
  ],
  "font-src": [
    "'self'",
    "*.googleapis.com",
    "*.moengage.com",
    "fonts.gstatic.com",
    "https://d157777v0iph40.cloudfront.net",
    "https://dxzbkowhmlqkh.cloudfront.net"
  ],
  "frame-ancestors": ["'self'", "*.moengage.com"],
  "manifest-src": ["'self'", "https://d157777v0iph40.cloudfront.net"],
  "media-src": [
    "*.moengage.com",
    "https://d157777v0iph40.cloudfront.net",
    "https://d2hx8jjky1f7ly.cloudfront.net",
    "https://dxzbkowhmlqkh.cloudfront.net"
  ],
  "object-src": ["'none'"],
  "base-uri": ["'self'"]
};
// lib/cspConfig.ts
export const generateCSP = () => {
  return {
    csp: Object.entries(csp)
      .map(([key, values]) => `${key} ${values.join(" ")}`)
      .join("; "),
    nonce: nonce
  };
};
