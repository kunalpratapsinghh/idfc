// Real Air India header structure, colors & links, transcribed from the
// live airindia.com production markup and CSS (logged-out state).
export const AI_RED = "#DA0E29"; // --ai-global-red
export const AI_UNDERLINE_RED = "#BE1E24"; // .main-menu .aic i hover indicator
export const AI_BLACK = "#1C1213"; // --global-ai-black
export const AI_CREAM = "#F9F6EE"; // .header background-color

const BASE = "https://www.airindia.com";

// Hosted locally (public/airindia) — hotlinking the real CDN is unreliable.
export const LOGO_RED = "/airindia/logo-red.svg";
export const LOGO_WHITE = "/airindia/logo-white.svg";

export interface SubLink {
  label: string;
  href: string;
  target?: "_blank" | "_self";
}

export interface MegaColumn {
  title?: string;
  titleHref?: string;
  links: SubLink[];
}

export interface ImageTile {
  label: string;
  href: string;
  img: string;
  target?: "_blank" | "_self";
}

export interface NavItem {
  label: string;
  columns: MegaColumn[];
  imageTiles?: ImageTile[];
}

const BOOK_MANAGE: NavItem = {
  label: "Book & Manage",
  columns: [
    {
      title: "Book",
      titleHref: `${BASE}/in/en/book.html`,
      links: [
        { label: "Search Flights", href: `${BASE}/in/en/book/search-flights.html` },
        { label: "SME & Corporate Travel", href: `${BASE}/in/en/book/ai-biz-corporate-flight-booking.html` },
        { label: "Group Booking", href: `${BASE}/in/en/book/group-ticket-booking.html` },
        { label: "Hotels", href: `${BASE}/in/en/book/hotels.html` },
        { label: "Add-Ons", href: `${BASE}/in/en/book/add-ons.html` },
        { label: "Cars", href: `${BASE}/in/en/book/cars.html` }
      ]
    },
    {
      links: [
        { label: "Exclusive Deals", href: `${BASE}/in/en/book/exclusive-deals.html` },
        { label: "Gift Cards", href: `${BASE}/in/en/book/add-ons/gift-cards.html` },
        { label: "E-Store", href: `${BASE}/in/en/book/e-store.html` },
        { label: "Cargo", href: "https://cargo.airindia.com/" },
        { label: "Flight Schedule", href: `${BASE}/in/en/book/flight-schedule.html` }
      ]
    },
    {
      title: "Manage",
      titleHref: `${BASE}/in/en/manage.html`,
      links: [
        { label: "Check In Online", href: `${BASE}/in/en/manage/web-checkin.html` },
        { label: "Manage Booking", href: `${BASE}/in/en/manage/booking.html` },
        { label: "Seat Selection & Upgrades", href: `${BASE}/in/en/manage/select-upgrade-seat.html` },
        { label: "Self-Service Re-accommodation", href: `${BASE}/in/en/manage/self-reaccomodation.html` },
        { label: "Request Refund", href: `${BASE}/in/en/manage/request-refund.html` }
      ]
    },
    {
      links: [
        { label: "Flight Status", href: `${BASE}/in/en/manage/flight-status.html` },
        { label: "Track Your Bags", href: `${BASE}/in/en/travel-information/baggage-guidelines/track-your-bags.html` },
        { label: "Fog Care", href: `${BASE}/in/en/manage/fog-care.html` },
        { label: "Travel Certificate", href: `${BASE}/in/en/manage/travel-certificate/request.html` }
      ]
    }
  ]
};

const WHERE_WE_FLY: NavItem = {
  label: "Where we fly",
  columns: [
    {
      title: "Where we fly",
      titleHref: `${BASE}/in/en/destinations.html`,
      links: [
        { label: "Route Map", href: `${BASE}/in/en/destinations/route-map.html` },
        { label: "Nonstop International Flights", href: `${BASE}/in/en/destinations/non-stop-international-flights.html` },
        { label: "Alliances and Partnerships", href: `${BASE}/in/en/destinations/alliances-and-partnerships.html` },
        { label: "Popular Flights", href: `${BASE}/in/en/destinations/newlaunch.html` }
      ]
    }
  ],
  imageTiles: [
    {
      label: "New York City",
      href: `${BASE}/in/en/destinations/newlaunch.html?de=jfk&des=new%20york`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:1af6e4dd-16cc-4e16-a155-fca313ba5c2d/as/new-york-city.webp"
    },
    {
      label: "Delhi to London",
      href: `${BASE}/in/en/destinations/newlaunch/new-delhi-to-london.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:75a4fad3-84d7-4cd7-a6ce-54db103ea102/as/delhi-to-london.webp"
    }
  ]
};

const PREPARE_TO_TRAVEL: NavItem = {
  label: "Prepare to Travel",
  columns: [
    {
      title: "Prepare to Travel",
      titleHref: `${BASE}/in/en/travel-information.html`,
      links: [
        { label: "Baggage Guidelines", href: `${BASE}/in/en/travel-information/baggage-guidelines.html` },
        { label: "Airport Information", href: `${BASE}/in/en/travel-information/airport-information.html` },
        { label: "Visas, Documents and Travel Tips", href: `${BASE}/in/en/travel-information/visa-documents.html` },
        { label: "First-time Travellers and Children", href: `${BASE}/in/en/travel-information/first-time-flyers.html` },
        { label: "Health and Medical Assistance", href: `${BASE}/in/en/travel-information/health-medical-assistance.html` },
        { label: "Travelling with Pets", href: `${BASE}/in/en/travel-information/travelling-with-pets.html` }
      ]
    }
  ],
  imageTiles: [
    {
      label: "Prepay for excess baggage",
      href: `${BASE}/in/en/travel-information/baggage-guidelines/prepay-excess-baggage.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:904c2af0-a224-4cd8-bb4a-53d8750287b7/as/luggage-en-header.jpg"
    },
    {
      label: "Car Rental With AVIS",
      href: `${BASE}/in/en/book/cars.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:a3a32bea-dba4-4dd6-b891-3fd465abed5a/as/seamless-car-rental-en-header.jpg"
    },
    {
      label: "Visa Services",
      href: `${BASE}/in/en/travel-information/visa-services.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:5486ae57-3545-407f-8f62-dd40644d997a/as/Onevasco-updated.jpg"
    }
  ]
};

const AIR_INDIA_EXPERIENCE: NavItem = {
  label: "Air India Experience",
  columns: [
    {
      title: "Air India Experience",
      titleHref: `${BASE}/in/en/experience.html`,
      links: [
        { label: "At the Airport", href: `${BASE}/in/en/experience/airport.html` },
        { label: "In the Air", href: `${BASE}/in/en/experience/in-air.html` },
        { label: "Transforming Experiences", href: `${BASE}/in/en/experience/transforming-customer-experience.html` },
        { label: "The Air India Fleet", href: `${BASE}/in/en/experience/airindia-fleet.html` }
      ]
    }
  ],
  imageTiles: [
    {
      label: "Premium Economy",
      href: `${BASE}/in/en/experience/in-air/premium-economy.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:cf8f2b2a-16bd-4a31-a026-c49de2344f52/as/pey-header.png"
    },
    {
      label: "GetYourGuide",
      href: "https://www.getyourguide.com/?partner_id=VVCO1YW&utm_medium=transport_partners&cmp=prepare_to_travel",
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:479361ed-1d54-4501-9553-dddc8a60f0f9/as/Get-your-guide-tile-V2.webp"
    },
    {
      label: "Travel Insurance",
      href: `${BASE}/in/en/book/add-ons/travel-insurance.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:1eb374b1-ac1d-4f8b-8fa8-c434f198969c/as/mega-menu-travelinsurance.webp"
    }
  ]
};

const MAHARAJA_CLUB: NavItem = {
  label: "Maharaja Club",
  columns: [
    {
      title: "Maharaja Club",
      titleHref: `${BASE}/in/en/maharaja-club.html`,
      links: [
        { label: "About Maharaja Club", href: `${BASE}/in/en/maharaja-club/about.html` },
        { label: "Earn Points", href: `${BASE}/in/en/maharaja-club/earn-points.html` },
        { label: "Redeem Points", href: `${BASE}/in/en/maharaja-club/redeem-points.html` },
        { label: "Our Partners", href: `${BASE}/in/en/maharaja-club/partner-offers.html` },
        { label: "Family Pool", href: `${BASE}/in/en/maharaja-club/family-pool.html` }
      ]
    },
    {
      links: [
        { label: "Maharaja Club Updates", href: `${BASE}/in/en/maharaja-club/updates.html` },
        { label: "Special Offers", href: `${BASE}/in/en/maharaja-club/special-offers.html` },
        { label: "Points Calculator", href: `${BASE}/in/en/maharaja-club/points-calculator.html` },
        { label: "FAQs", href: `${BASE}/in/en/maharaja-club/faqs.html` },
        { label: "Customer Support", href: `${BASE}/in/en/contact-us/customer-support-portal.html` }
      ]
    }
  ],
  imageTiles: [
    {
      label: "Our Partners",
      href: `${BASE}/in/en/maharaja-club/partner-offers.html`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:79f81142-9f1a-479c-a10c-214f2648fbae/as/earn-with-partners-megamenu.webp"
    },
    {
      label: "Sign Up for Maharaja Club",
      href: `${BASE}/in/en/maharaja-club/sign-up`,
      img: "https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:7d6d8e96-e7f3-4cd9-a4ad-3a2ddf8e4103/as/megamenu-signup.webp"
    }
  ]
};

export const NAV_ITEMS: NavItem[] = [
  BOOK_MANAGE,
  WHERE_WE_FLY,
  PREPARE_TO_TRAVEL,
  AIR_INDIA_EXPERIENCE,
  MAHARAJA_CLUB
];

export const SUPPORT_LINKS: SubLink[] = [
  { label: "Contact Us", href: `${BASE}/in/en/contact-us.html` },
  { label: "FAQ", href: `${BASE}/in/en/frequently-asked-questions.html` }
];

export const TARIFF_LINK = `${BASE}/content/dam/air-india/pdfs/tariff/TARIFF-SHEET-AS-ON-15JUN26.pdf`;
export const AIBIZ_LINK = "https://aibiz.airindia.com";
export const AIBIZ_LOGO = "/airindia/aibiz-logo.png";

export const SIGN_UP_URL = `${BASE}/in/en/register.html`;
