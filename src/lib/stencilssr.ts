import { formatPoints } from "./utils";

const renderToString = async (
  _html: string,
  _opts: any
): Promise<{ html: string }> => ({ html: "" });

const normalizeHtml = (html: any = "") => {
  return html
    .replace(/<!doctype[^>]*>/gi, "")
    .replace(/<\/?html[^>]*>/gi, "")
    .replace(/<head>.*?<\/head>/gi, "")
    .replace(/<\/?body[^>]*>/gi, "")
    .trim();
};

export type Disclaimer = {
  id: number;
  title: string;
  content: string;
  buttonText: string;
  type: string | null;
  displayName: string;
};
export type PartnerEntry = {
  id: number;
  documentId: string;
  partnerName: string;
  slug: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string | null;
  locale: string | null;
  disclaimer: Disclaimer;
  card_program: string;
};
// Define the shape of the overall object keyed by partner name
export type ParnterDisclaimerData = {
  [partnerName: string]: PartnerEntry[];
};
export async function renderHeaderHTML(
  isLoggedIn: boolean,
  customerInfo: any = {},
  selectedCard: any,
  headerElements: any,
  tickerMessage: any = {},
  disclaimers: ParnterDisclaimerData = {},
  mobileHeaderVisible: boolean = false,
  isHomePage: boolean = true,
  nonce: string = "",
  searchEnabled: boolean = false
): Promise<string> {
  const encodedMenuItems =
    headerElements &&
    Buffer.from(JSON.stringify(headerElements)).toString("base64");
  const encodedMessage = Buffer.from(
    JSON.stringify(tickerMessage || {})
  ).toString("base64");

  const encodedDisclaimers = Buffer.from(JSON.stringify(disclaimers)).toString(
    "base64"
  );
  const domainUrls = {
    mainDomain: {
      url: process.env.NEXT_PUBLIC_MAIN_DOMAIN_URL || "",
      basePath: process.env.NEXT_PUBLIC_MAIN_DOMAIN_BASE_PATH || ""
    },
    subDomain: {
      url: process.env.NEXT_PUBLIC_SUB_DOMAIN_URL || "",
      basePath: process.env.NEXT_PUBLIC_SUB_DOMAIN_BASE_PATH || ""
    }
  };
  const encodeDomainUrl = Buffer.from(JSON.stringify(domainUrls)).toString(
    "base64"
  );
  const htmlToHydrate = `<nav-header is-non-reward-card=${selectedCard?.redemption_card === 0} show-search-icon=${searchEnabled} show-back-button=${true} custom-nonce=${nonce} load-analytics-via='proxy' domain-url=${encodeDomainUrl} is-home-page=${isHomePage} bank-domain-url=${process.env.NEXT_PUBLIC_BANK_DOMAIN_URL} ssr-enabled=${true} visible-on-mobile=${mobileHeaderVisible} is-main=${process.env.NEXT_PUBLIC_ISMAIN} ticker-response=${encodedMessage} menu-items=${encodedMenuItems} active-program=${selectedCard?.cardType} first-name=${customerInfo.firstname} selected-card-last-four-digits=${selectedCard?.last4digit} selected-card-points=${formatPoints(selectedCard?.points_available)} selected-card-name=${selectedCard?.subProgram?.replaceAll("_", " ") || selectedCard?.alter_name?.replaceAll("_", " ")} header-transparent=${isHomePage} is-loggedin=${isLoggedIn} customer-info=${customerInfo} asset-path=${process.env.NEXT_PUBLIC_CDN_PATH + "stencil-assets/"} disclaimer-data=${encodedDisclaimers}></nav-header>`;
  const { html } = await renderToString(htmlToHydrate, {
    clientHydrateAnnotations: true,
    prettyHtml: false,
    removeHtmlComments: true
  });
  return normalizeHtml(html);
}
export async function mLiteFooter(
  isLoggedIn: boolean,
  bottomBarLinks: any,
  disclaimers: ParnterDisclaimerData = {}
) {
  let encodedNavItems;
  let encodedDisclaimers;

  if (bottomBarLinks) {
    encodedNavItems = Buffer.from(JSON.stringify(bottomBarLinks)).toString(
      "base64"
    );
  }
  if (disclaimers) {
    encodedDisclaimers = Buffer.from(JSON.stringify(disclaimers)).toString(
      "base64"
    );
  }

  const htmlToHydrate = `<nav-footer is-main=${process.env.NEXT_PUBLIC_ISMAIN} ssr-enabled=${true} redirect-domain-url=${process.env.NEXT_PUBLIC_REDIRECT_DOMAIN_URL}  asset-path=${process.env.NEXT_PUBLIC_CDN_PATH + "stencil-assets/"} is-logged-in=${isLoggedIn} nav-items=${encodedNavItems} disclaimer-data=${encodedDisclaimers}></nav-footer>`;
  const { html } = await renderToString(htmlToHydrate, {
    clientHydrateAnnotations: true,
    prettyHtml: false,
    removeHtmlComments: true
  });
  return normalizeHtml(html);
}
export async function renderCommonFooter(
  footerElements: any,
  disclaimers: ParnterDisclaimerData = {}
) {
  let encodedFooterContents;
  if (footerElements) {
    encodedFooterContents = Buffer.from(
      JSON.stringify(footerElements)
    ).toString("base64");
  }

  const encodedDisclaimers = Buffer.from(JSON.stringify(disclaimers)).toString(
    "base64"
  );

  const htmlToHydrate = `<common-footer asset-path=${process.env.NEXT_PUBLIC_CDN_PATH + "stencil-assets/"} footer-contents=${encodedFooterContents} disclaimer-data=${encodedDisclaimers}></common-footer>`;
  const { html } = await renderToString(htmlToHydrate, {
    clientHydrateAnnotations: true,
    prettyHtml: false,
    removeHtmlComments: true
  });
  return normalizeHtml(html);
}
