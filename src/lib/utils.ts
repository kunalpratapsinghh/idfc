import {
  CARDMAP,
  COMMON_FOOTER_CONFIG,
  HIDE_FOOTER_PAGES,
  MENU_HIGHLIGHT_PAGES,
  MOBILE_HEADER_FIXED_PATH_RULES,
  PAGETYPE,
  SUB_PROGRAM_MAP
} from "@/config";
import { CheckCsrfResponse, CustomerCard } from "@/server/schemas/auth/auth";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
export function isTargetReward360Domain(url: string): boolean {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url, "https://offers.smartbuy.hdfcbank.com/");
    const hostname = parsedUrl.hostname;

    // Matches reward360.in or any subdomain of it
    return hostname === "reward360.in" || hostname.endsWith(".reward360.in");
  } catch (err) {
    console.warn("[isTargetReward360Domain] Invalid URL:", url, err);
    return false;
  }
}
export function capitalizeFirstLetter(val: string) {
  return (
    String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase()
  );
}
export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const formatNumberIN = (amount: number) => {
  return new Intl.NumberFormat("en-IN").format(amount);
};
export const formatPoints = (points: any) => {
  if (points === null || points === "" || points === undefined || isNaN(points))
    return "- - - -";
  return new Intl.NumberFormat("en-IN").format(points);
};

export const getBrand = (
  paramCardType: PAGETYPE,
  parsedCard?: CustomerCard,
  cookieCardType?: PAGETYPE,
  customerInfo?: CheckCsrfResponse
): { theme: string; layout: string; path?: string } => {
  const parsedCardType = parsedCard?.cardType ?? "";
  const subProgram = parsedCard?.subProgram ?? "";
  if (parsedCard?.redemption_card === 0) {
    if (parsedCard?.subProgram) {
      return {
        ...CARDMAP["TATA_NEU"],
        layout: parsedCard?.subProgram?.toLowerCase()
      };
    }
    return CARDMAP["NON_REWARD"];
  }
  const { concierge_user = 0 } = customerInfo || {};

  if (paramCardType !== "DEFAULT") {
    const subPrograms =
      SUB_PROGRAM_MAP[parsedCardType] ||
      SUB_PROGRAM_MAP[paramCardType] ||
      (cookieCardType && SUB_PROGRAM_MAP[cookieCardType]);

    if (subPrograms?.includes(subProgram)) {
      return {
        ...CARDMAP[subProgram],
        ...(concierge_user ? CARDMAP["CONCIERGE"] : {})
      };
    }
    if (parsedCardType) {
      if (parsedCardType !== "SMARTBUY" && CARDMAP[parsedCardType]) {
        return {
          ...CARDMAP[parsedCardType],
          ...(concierge_user ? CARDMAP["CONCIERGE"] : {})
        };
      }
      return {
        ...CARDMAP["NONSPC"],
        ...(concierge_user ? CARDMAP["CONCIERGE"] : {})
      };
    }

    return {
      ...(CARDMAP[paramCardType] ??
        (cookieCardType && CARDMAP[cookieCardType]) ??
        CARDMAP["DEFAULT"]),
      ...(concierge_user ? CARDMAP["CONCIERGE"] : {})
    };
  }
  return {
    ...(CARDMAP[parsedCardType] ||
      (cookieCardType && CARDMAP[cookieCardType]) ||
      CARDMAP["DEFAULT"]),
    ...(concierge_user ? CARDMAP["CONCIERGE"] : {})
  };
};
export const getMenuHighlight = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);

  const matchedSegment = segments.find(
    segment => segment in MENU_HIGHLIGHT_PAGES
  );

  return matchedSegment
    ? MENU_HIGHLIGHT_PAGES[matchedSegment as keyof typeof MENU_HIGHLIGHT_PAGES]
    : "";
};

export const hideNavFooter = (pathname: string): boolean => {
  const segments = pathname.split("/").filter(Boolean);
  return segments.some(segment => HIDE_FOOTER_PAGES.includes(segment));
};
export const hideCommonFooter = (pathname: string): boolean => {
  const segments = pathname.split("/").filter(Boolean);
  const fullPath = segments.join("/");

  for (const [module, config] of Object.entries(COMMON_FOOTER_CONFIG)) {
    if (segments[0] === module || fullPath.startsWith(`${module}/`)) {
      if (segments.length > 1 && segments[0] === module) {
        const subModule = segments[1];
        const subModuleConfig = config[subModule];

        if (subModuleConfig) {
          const relativePath = segments.slice(2).join("/"); // Remove module and sub-module from path
          if (
            subModuleConfig.showPaths?.some(
              path => relativePath === path || relativePath.startsWith(path)
            )
          ) {
            return false;
          }

          // Check hide paths for sub-module
          if (
            subModuleConfig.hidePaths?.some(
              path => relativePath === path || relativePath.startsWith(path)
            )
          ) {
            return true;
          }
        }
      }

      // Fallback to module-level configuration
      const relativePath = segments.slice(1).join("/"); // Remove main module from path

      // Check explicit show paths for main module
      if (
        config.showPaths?.some(
          path => relativePath === path || relativePath.startsWith(path)
        )
      ) {
        return false;
      }

      // Check hide paths for main module
      if (
        config.hidePaths?.some(
          path => relativePath === path || relativePath.startsWith(path)
        )
      ) {
        return true;
      }
    }
  }

  return false;
};


type TransparentPathRuleKey = keyof typeof MOBILE_HEADER_FIXED_PATH_RULES;

export const isFixedMobileFixedHeader = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean); // remove empty parts
  const [first, second] = parts;
  const subpath = "/" + (parts.slice(1).join("/") || "");

  const rule =
    MOBILE_HEADER_FIXED_PATH_RULES[first as TransparentPathRuleKey] ||
    MOBILE_HEADER_FIXED_PATH_RULES[second as TransparentPathRuleKey];
  if (!rule) return false;

  // check explicit exclusion first
  if (rule.exclude.some((ex: string) => subpath.startsWith(ex))) return false;
  if (
    rule.include.some((inc: string) =>
      inc === "/*" ? true : subpath.startsWith(inc)
    )
  )
    return true;

  return false;
};
