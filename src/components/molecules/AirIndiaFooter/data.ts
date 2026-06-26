// Real airindia.com footer structure & colors, transcribed from the live
// CSS (.ai-footer*) and archived markup.
export const AI_PURPLE = "#531251"; // .ai-dropdown-header h2 color
export const AI_LINK = "#383C42"; // .ai-footer-column a color
export const AI_COPYRIGHT = "#626773"; // .ai-footer-copyright color
export const AI_CREAM = "#F9F6EE"; // .ai-footer background-color
export const AI_BORDER = "rgba(31,43,52,0.4)"; // dashed section dividers

const BASE = "https://www.airindia.com";

export interface FooterLink {
  label: string;
  href: string;
  target?: "_blank" | "_self";
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// Row 1 (.ai-main1) + Row 2 (.ai-main2)
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "About Us",
    links: [
      { label: "About Air India", href: `${BASE}/in/en/about-us.html` },
      { label: "Newsroom", href: `${BASE}/in/en/newsroom.html` },
      { label: "Corporate Information", href: `${BASE}/in/en/corporate-information.html` },
      { label: "Safety", href: `${BASE}/in/en/safety.html` },
      { label: "Tenders", href: `${BASE}/in/en/airline-rfp.html` },
      { label: "Careers", href: "https://careers.airindia.com/" }
    ]
  },
  {
    title: "Book & Manage",
    links: [
      { label: "Search Flights", href: `${BASE}/in/en/book/search-flights.html` },
      { label: "Manage Booking", href: `${BASE}/in/en/manage/booking.html` },
      { label: "Flight Schedule", href: `${BASE}/in/en/book/flight-schedule.html` },
      { label: "Cargo", href: `${BASE}/in/en/book/cargo.html` }
    ]
  },
  {
    title: "Where We Fly",
    links: [
      { label: "Route Map", href: `${BASE}/in/en/destinations/route-map.html` },
      { label: "Non-stop Flights", href: `${BASE}/in/en/destinations/non-stop-international-flights.html` },
      { label: "Alliances and Partnerships", href: `${BASE}/in/en/destinations/alliances-and-partnerships.html` },
      { label: "Popular Flights", href: `${BASE}/in/en/destinations/newlaunch.html` }
    ]
  },
  {
    title: "Prepare to Travel",
    links: [
      { label: "Baggage Guidelines", href: `${BASE}/in/en/travel-information/baggage-guidelines.html` },
      { label: "Airport Information", href: `${BASE}/in/en/travel-information/airport-information.html` },
      { label: "First-time Travellers and Children", href: `${BASE}/in/en/travel-information/first-time-flyers.html` },
      { label: "Visas, Documents and Travel Tips", href: `${BASE}/in/en/travel-information/visa-documents.html` },
      { label: "Health and Medical Assistance", href: `${BASE}/in/en/travel-information/health-medical-assistance.html` },
      { label: "Travelling with Pets", href: `${BASE}/in/en/travel-information/travelling-with-pets.html` }
    ]
  },
  {
    title: "Air India Experience",
    links: [
      { label: "At The Airport", href: `${BASE}/in/en/experience/airport.html` },
      { label: "In The Air", href: `${BASE}/in/en/experience/in-air.html` },
      { label: "Transforming Experiences", href: `${BASE}/in/en/experience/transforming-customer-experience.html` },
      { label: "Our Fleet", href: `${BASE}/in/en/experience/airindia-fleet.html` }
    ]
  },
  {
    title: "Maharaja Club",
    links: [
      { label: "About Maharaja Club", href: `${BASE}/in/en/maharaja-club/about.html` },
      { label: "Points Calculator", href: `${BASE}/in/en/maharaja-club/points-calculator.html` },
      { label: "Earn Points", href: `${BASE}/in/en/maharaja-club/earn-points.html` },
      { label: "Redeem Points", href: `${BASE}/in/en/maharaja-club/redeem-points.html` },
      { label: "Maharaja Club FAQs", href: `${BASE}/in/en/maharaja-club/faqs.html` }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: `${BASE}/in/en/contact-us.html` },
      { label: "Frequently Asked Questions", href: `${BASE}/in/en/frequently-asked-questions.html` },
      { label: "Grievance Resolution", href: `${BASE}/in/en/contact-us/grievance-resolution.html` },
      { label: "EU/UK Flight Delay Claim", href: `${BASE}/in/en/eu-claim-form.html` },
      { label: "Supplier Corner", href: `${BASE}/in/en/supplier-corner.html` },
      { label: "Mishandled Baggage Statement", href: `${BASE}/in/en/travel-information/baggage-guidelines/mishandled-baggage-statement.html` }
    ]
  }
];

// 3 legal columns inside .ai-footer-bottom .bottom1
export const LEGAL_COLUMNS: FooterLink[][] = [
  [
    { label: "Sitemap", href: `${BASE}/in/en/sitemap.html` },
    { label: "Terms & Conditions", href: `${BASE}/in/en/terms-and-condition.html` },
    { label: "Privacy Notice", href: `${BASE}/in/en/privacy-notice.html` },
    { label: "Accessibility Plan and Feedback Process", href: `${BASE}/in/en/accessibility-policy.html`, target: "_blank" }
  ],
  [
    { label: "Cookie Policy", href: `${BASE}/in/en/cookie-policy.html` },
    { label: "Cookie Settings", href: "#", target: "_self" },
    { label: "Conditions of Carriage", href: `${BASE}/content/dam/air-india/pdfs/air-india-coc.pdf`, target: "_blank" },
    { label: "Domestic Fares", href: `${BASE}/content/dam/air-india/pdfs/tariff/TARIFF-SHEET-AS-ON-15JUN26.pdf`, target: "_blank" }
  ],
  [
    { label: "Travel Agents", href: `${BASE}/in/en/travel-agents.html` },
    { label: "GST", href: "https://gst.airindia.com/portal/index.html" },
    { label: "Passenger Rights", href: `${BASE}/in/en/passenger-rights.html` },
    { label: "Disruption Statement", href: `${BASE}/in/en/flight-disruption.html` }
  ]
];

// Hosted locally (public/airindia) — hotlinking the real CDN is unreliable.
export const SOCIAL_LINKS = [
  { label: "linkedin", href: "https://www.linkedin.com/company/airindia/mycompany/", icon: "/airindia/social-linkedin.png" },
  { label: "youtube", href: "https://www.youtube.com/channel/UCnfpyluc2VymxpxWpiL9Oaw", icon: "/airindia/social-youtube.png" },
  { label: "twitter", href: "https://twitter.com/airindia", icon: "/airindia/social-twitter.png" },
  { label: "instagram", href: "https://www.instagram.com/airindia/", icon: "/airindia/social-instagram.png" },
  { label: "facebook", href: "https://www.facebook.com/AirIndia/", icon: "/airindia/social-facebook.png" }
];

export const APP_LINKS = {
  appStore: "https://apps.apple.com/us/app/air-india/id932302964",
  googlePlay: "https://play.google.com/store/apps/details?id=com.bets.airindia.ui",
  appStoreBadge: "/airindia/appstore-badge.svg",
  googlePlayBadge: "/airindia/googleplay-badge.svg"
};

export const TATA_LOGO = { href: "https://www.tata.com/", img: "/airindia/tata-logo.svg" };
export const AI_ROUNDEL = "/airindia/ai-roundel.svg";
export const STAR_ALLIANCE = { href: "https://www.staralliance.com/en/frequent-flyers", img: "/airindia/star-alliance.svg" };

export const TRANSLATION_DISCLAIMER =
  "The content on this site may have been translated into other languages using automatic translation. Any such translation is only for information and reference and is not authoritative. We have made reasonable efforts to provide translations, but they may not be perfect. The automated translations may miss context, full meaning may be lost, or words may be inaccurately translated. Some content (such as images, videos, files, links, and acronyms) may not be translated. For all content on the site, the English version is the authoritative version and will prevail in case of any inconsistencies, inaccuracies or repugnancy. If you have any questions related to the accuracy of the information contained in the translations, please refer to the English version. Air India will not be liable for any losses or claims relating to or arising from or in connection with dated or incorrect translations.";

export function getCopyrightLines(year: number) {
  return [
    `Copyright © ${year} Reward360 Global Services Pvt Ltd.`,
    "All rights reserved. Use of this website indicates your compliance with our Privacy Notice, Conditions of Carriage, Terms and Conditions."
  ];
}
