export const IMAGE_BASE_URL = process.env.CMS_BASE_URL || "";
export const PATHS_ENABLED = [
  "infinia",
];
export type CARDTYPE =
  | "INFINIA"
  | "DEFAULT"
export type PAGETYPE =
  | "INFINIA"
  | "DEFAULT"
export const CARDBYPATH: Record<string, PAGETYPE> = {
  infinia: "INFINIA",
};
export const PATHBYCARD: Record<string, string> = {
  INFINIA: "infinia",
};
export const PAGEBYPATH = {
  ...CARDBYPATH,
  default: "DEFAULT",
  home: "HOME",
  foryou: "FORYOU"
};
export const MOBILE_HEADER_VISIBLE_PAGES = [
];
export const PUBLIC_ROUTES = [
  "cache"
];
export const TRANSPARENT_PATH_RULES = {
};
export const MOBILE_HEADER_FIXED_PATH_RULES = {
  golf: { include: ["/*"], exclude: ["/booking"] }
};

export const CARDMAP: Record<
  string,
  { theme: string; layout: string; path?: string }
> = {
  INFINIA: {
    theme: "infinia",
    layout: "infinia",
    path: "infinia"
  },
  DEFAULT: {
    theme: "default",
    layout: "default"
  },

};
export const BANNER_CARD_FACIAS = [
  "infinia",
];
// Specific subprograms enabled
export const SUB_PROGRAM_MAP: Record<string, string[]> = {
  INFINIA: ["INFINIA_BHARAT", "INFINIA_RESERVE"],
  DINERS: ["DINERS_PRIVILEGE", "DINERS_BLACK_METAL", "DINERS_BLACK"],
  BUSINESS: ["BIZ_BLACK", "BIZ_POWER"]
};
// Cards excluded from rewards (elasticsearch) search
export const REWARDS_SEARCH_EXCLUDED_DOMAINS = ["irctc-co-brand"];
export const REWARDS_GLOBAL_SEARCH_ENABLED: Record<string, string> = {
  INFINIA: "infinia",
};
export type CARDTYPES =
  | "INFINIA"
  | "DEFAULT";
export const THEMES_ENABLED = [
  "infinia",
  "default"
] as const;
export const REWARDS_NEW_ALLOWED = ["infinia", "diners"];
export const REWARDS_PPLUSC_ENABLED = ["infinia"];
export const REWARDSREVAMP_ALLOWED_SUBPROGRAMS = [
  "INFINIA"
];
export enum PathMap {
  INFINIA = "infinia",
}
export type ThemeTypes = (typeof THEMES_ENABLED)[number];
export const THEMES_STATUS_BAR = {
  infinia: "#00386C",
  default: "#0f326a",
};
export const MENU_HIGHLIGHT_PAGES = {

};
export const SHOW_GLOBAL_SEARCH_PAGES = ["home", "foryou"];
export const HIDE_FOOTER_PAGES = ["travel"];
export const COMMON_FOOTER_CONFIG = {
  travel: {
    hotel: {
      hidePaths: ["detail"],
      showPaths: []
    },
    flight: {
      hidePaths: [],
      showPaths: []
    },
    hidePaths: [],
    showPaths: []
  }
};


export const TextualConfig = {
  PRIMA_FAILURE: {
    title: "We are currently unable to show the reward points.",
    cta: "Know More",
    link: `${process.env.NEXT_PUBLIC_SUB_DOMAIN_URL}/faqs#tab_g#redeem-21`
  }
};