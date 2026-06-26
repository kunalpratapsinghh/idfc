import { Nunito_Sans } from "next/font/google";

// Fallback Google Fonts Nunito Sans (used if Air India CDN fonts are blocked)
export const airIndiaFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

// CSS font-family strings matching Air India's actual typography
export const AI_FONT_BODY = '"Nunito Sans", sans-serif';
export const AI_FONT_NAV = '"Air India Variable", "Air India", sans-serif';
export const AI_FONT_BRAND = '"Air India", sans-serif';
