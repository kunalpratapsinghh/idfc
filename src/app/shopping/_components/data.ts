export const APPLE_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    price: "₹1,33,900",
    image: "/cachedemo/store/iphone17pro.png",
    colors: ["#C8B89A", "#F0EEE8", "#3A3837", "#B4B0A9"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/iphone-17-pro-cosmic-orange-1tb/895022994776120956519839442894307038"
  },
  {
    id: 2,
    name: "iPhone 17",
    price: "₹81,900",
    image: "/cachedemo/store/iphone17.png",
    colors: ["#1D1D1F", "#F2F2F2", "#2640A0", "#40908C", "#F0A4B0"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/category/iphone1/iphone-17-lavender-256gb/372598813566369509508148987476481195"
  },
  {
    id: 3,
    name: "iPhone Air",
    price: "₹99,900",
    image: "/cachedemo/store/iphone17air.png",
    colors: ["#1D1D1F", "#F2F2F2", "#5988BF", "#5A9B97"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/category/iphone1/iphone-17-lavender-256gb/372598813566369509508148987476481195"
  },
  {
    id: 4,
    name: "iPad Air M4",
    price: "₹62,953",
    image: "/cachedemo/store/ipadairm4.png",
    colors: ["#5988BF", "#B5A4CE", "#E8E3D9", "#8C8C8E"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/iphone-air-sky-blue-1tb/843987638113334004232672924341114882"
  },
  {
    id: 5,
    name: "MacBook Pro 14-inch",
    price: "₹1,78,506",
    image: "/cachedemo/store/macbookpro14.png",
    colors: ["#2C2B2E", "#C4C4C4"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/category/mac1/15-inch-macbook-air-apple-m4-chip-with-10-core-cpu-and-10-core-gpu-24gb-512gb-ssd-midnight/693425514359429798466423312649400613"
  },
  {
    id: 7,
    name: "iPhone 17e",
    price: "₹62,900",
    image: "/cachedemo/store/iphone17e.png",
    colors: ["#1D1D1F", "#F2F2F2", "#5A9B97", "#F2A0B4", "#F4E266"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/iphone-air-light-gold-1tb/414992979194292037120383049720736972"
  },
  {
    id: 8,
    name: "AirPods 4",
    price: "₹12,900",
    image: "/cachedemo/store/airpods4.png",
    colors: ["#F2F2F2"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/airpods-41/806882741422005838425927691723663064"
  },
  {
    id: 9,
    name: "MacBook Air 13-inch M5",
    price: "₹1,16,303",
    image: "/cachedemo/store/macbookairm5.png",
    colors: ["#AEC8E8", "#E8E3D9", "#8C8C8E", "#1B2335"],
    url: "https://offers-smartbuyuat.reward360.in/apple-store/marketplace/product/13-inch-macbook-air-apple-m4-chip-with-10-core-cpu-and-10-core-gpu-24gb-512gb-ssd-silver/689109578851629853893273572819717014"
  }
];
export const CATEGORIES = [
  "Fashion",
  "Accessories",
  "Beauty",
  "Gifting",
  "Health & Fitness",
  "Electronics",
  "Cosmetics"
];
export type BrandTile = {
  id: number;
  brandLogo: string;
  desc: string;
  price: string;
  image: string;
};
export const CATEGORY_CONTENT: Record<string, BrandTile[]> = {
  Fashion: [
    {
      id: 1,
      brandLogo: "/cachedemo/brands/brand-logo-1.png",
      desc: "Discover styles curated just for you.",
      price: "Starts from ₹1,000",
      image: "/cachedemo/brands/reward-cat-2.jpeg"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/shopwithbrands/fashion/puma.png",
      desc: "Step into style with every stride.",
      price: "Starts from ₹1,000",
      image: "/cachedemo/brands/brand-logo-3.jpeg"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/shopwithbrands/fashion/lifestyle.jpeg",
      desc: "Fashion that fits your lifestyle.",
      price: "Starts from ₹1,500",
      image: "/cachedemo/shopwithbrands/fashion/lifestylebanner.png"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/shopwithbrands/fashion/ajio.png",
      desc: "Timeless designs for every occasion.",
      price: "Starts from ₹1,500",
      image: "/cachedemo/brands/brands-cat-5.jpeg"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/shopwithbrands/fashion/shopperstop.png",
      desc: "All-day comfort with breathable fabric.",
      price: "Starts from ₹2,000",
      image: "/cachedemo/shopwithbrands/fashion/shopperstopbanner.png"
    }
  ],

  Beauty: [
    {
      id: 1,
      brandLogo: "/cachedemo/shopwithbrands/beauty/tiralogo.png",
      desc: "Discover beauty styles curated just for you.",
      price: "Starts from ₹499",
      image: "/cachedemo/brands/reward-cat-2.jpeg"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/shopwithbrands/beauty/wowskin.jpeg",
      desc: "Glow naturally with dermatologist-tested skincare.",
      price: "Starts from ₹499",
      image: "/cachedemo/brands/pharmeasy/skincare.png"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/shopwithbrands/beauty/revaa.png",
      desc: "Luxury beauty essentials at duty-free prices.",
      price: "Starts from ₹1,000",
      image: "/cachedemo/brands/dutyfree/banner.jpg"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/shopwithbrands/beauty/foxtale.jpeg",
      desc: "Vitamins and supplements for daily wellness.",
      price: "Starts from ₹199",
      image: "/cachedemo/brands/pharmeasy/vitamins.png"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/shopwithbrands/beauty/habbits.png",
      desc: "Skincare routines for every skin type.",
      price: "Starts from ₹399",
      image: "/cachedemo/brands/brands-cat-6.jpeg"
    }
  ],

  Accessories: [
    {
      id: 1,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "Complete your Apple setup with the best accessories.",
      price: "Starts from ₹1,900",
      image: "/cachedemo/brands/imagine/accessories.avif"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/brands/brand-logo-1.png",
      desc: "Step into style with every stride.",
      price: "Starts from ₹999",
      image: "/cachedemo/brands/brand-logo-3.jpeg"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/brands/brand-logo-1.png",
      desc: "Timeless designs for every occasion.",
      price: "Starts from ₹1,499",
      image: "/cachedemo/brands/reward-cat-7.jpeg"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "Apple Watch — health and fitness on your wrist.",
      price: "Starts from ₹34,900",
      image: "/cachedemo/brands/imagine/banner.webp"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/brands/brand-logo-1.png",
      desc: "Stay cool and stylish with shades.",
      price: "Starts from ₹500",
      image: "/cachedemo/brands/reward-cat-2.jpeg"
    }
  ],

  Gifting: [
    {
      id: 1,
      brandLogo: "/cachedemo/brands/reward-cat-4.png",
      desc: "Make their day extra special with curated gifts.",
      price: "Starts from ₹499",
      image: "/cachedemo/brands/igp/birthday.jpg"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/brands/reward-cat-4.png",
      desc: "Show your love with meaningful presents.",
      price: "Starts from ₹999",
      image: "/cachedemo/brands/igp/anniversary.jpg"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/brands/reward-cat-4.png",
      desc: "Sweet surprises delivered to their door.",
      price: "Starts from ₹399",
      image: "/cachedemo/brands/igp/cakes.jpg"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/brands/reward-cat-4.png",
      desc: "Professional touches for every occasion.",
      price: "Starts from ₹1,499",
      image: "/cachedemo/brands/igp/corporate.jpg"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/brands/brands-cat-2.png",
      desc: "Travel gift vouchers — the perfect present.",
      price: "Starts from ₹5,000",
      image: "/cachedemo/brands/mmt/deal.jpg"
    }
  ],
  "Health & Fitness": [
    {
      id: 1,
      brandLogo: "/cachedemo/brands/brand-logo-2.png",
      desc: "Stay healthy with essential daily nutrition.",
      price: "Starts from ₹199",
      image: "/cachedemo/brands/pharmeasy/vitamins.png"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/brands/brands-cat-3.png",
      desc: "Move freely with performance-driven activewear.",
      price: "Starts from ₹599",
      image: "/cachedemo/brands/brands-cat-5.jpeg"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/brands/brand-logo-2.png",
      desc: "Monitor and manage diabetes with top devices.",
      price: "Starts from ₹999",
      image: "/cachedemo/brands/pharmeasy/diabetes.png"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/brands/brand-logo-2.png",
      desc: "Wellness essentials for a healthy heart.",
      price: "Starts from ₹599",
      image: "/cachedemo/brands/pharmeasy/heart.png"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/brands/brand-logo-2.png",
      desc: "Gentle, safe baby care products.",
      price: "Starts from ₹299",
      image: "/cachedemo/brands/pharmeasy/babycare.jpg"
    }
  ],
  Electronics: [
    {
      id: 1,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "The most powerful iPhone yet. Now even faster.",
      price: "Starts from ₹62,900",
      image: "/cachedemo/brands/imagine/iphone.avif"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "Built for what's next. M-series power.",
      price: "Starts from ₹1,16,303",
      image: "/cachedemo/brands/imagine/mac.avif"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "Work. Play. Create. All in one device.",
      price: "Starts from ₹33,900",
      image: "/cachedemo/brands/imagine/ipad.jpg"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "Apple Watch — health and fitness on your wrist.",
      price: "Starts from ₹34,900",
      image: "/cachedemo/brands/imagine/banner.webp"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/brands/brands-cat-1.png",
      desc: "Complete your Apple setup with accessories.",
      price: "Starts from ₹1,900",
      image: "/cachedemo/brands/imagine/accessories.avif"
    }
  ],
  Cosmetics: [
    {
      id: 1,
      brandLogo: "/cachedemo/brands/reward-cat-1.png",
      desc: "Luxury cosmetics from around the world.",
      price: "Starts from ₹1,000",
      image: "/cachedemo/brands/dutyfree/banner.jpg"
    },
    {
      id: 2,
      brandLogo: "/cachedemo/brands/brand-logo-2.png",
      desc: "Skincare essentials for a healthy glow.",
      price: "Starts from ₹499",
      image: "/cachedemo/brands/pharmeasy/skincare.png"
    },
    {
      id: 3,
      brandLogo: "/cachedemo/brands/brand-logo-1.png",
      desc: "Top cosmetic brands at great prices.",
      price: "Starts from ₹299",
      image: "/cachedemo/brands/reward-cat-2.jpeg"
    },
    {
      id: 4,
      brandLogo: "/cachedemo/brands/reward-cat-1.png",
      desc: "Duty-free luxury beauty essentials.",
      price: "Starts from ₹2,000",
      image: "/cachedemo/brands/dutyfree/megastore.png"
    },
    {
      id: 5,
      brandLogo: "/cachedemo/brands/brand-logo-2.png",
      desc: "Daily wellness meets premium beauty.",
      price: "Starts from ₹399",
      image: "/cachedemo/brands/brands-cat-6.jpeg"
    }
  ]
};
export const EMI_PRODUCTS = [
  {
    id: 1,
    name: "Amazon Echo Dot 5th Gen",
    image: "/cachedemo/emi/echoDot.png",
    emi: "₹235/Month",
    saving: "save 12%",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 2,
    name: "OPPO Reno15 5G",
    image: "/cachedemo/emi/opporeno15.png",
    emi: "₹1,099/Month",
    saving: "save ₹6,559",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 3,
    name: "Vivo Y400 5G",
    image: "/cachedemo/emi/vivoy400.png",
    emi: "₹899/Month",
    saving: "save ₹3,963",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 4,
    name: "IFB 2-Ton 3-Star AC",
    image: "/cachedemo/emi/ifbac.png",
    emi: "₹2,499/Month",
    saving: "save ₹6,626",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 5,
    name: "Voltas Desert Air Cooler 92L",
    image: "/cachedemo/emi/voltascooler.png",
    emi: "₹699/Month",
    saving: "save ₹1,826",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 6,
    name: "Yamaha DD75 Digital Drum Kit",
    image: "/cachedemo/emi/yamahadrum.png",
    emi: "₹1,299/Month",
    saving: "save ₹3,962",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 7,
    name: "Honeywell Air Purifier",
    image: "/cachedemo/emi/honeywellpurifier.png",
    emi: "₹999/Month",
    saving: "save ₹1,485",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 8,
    name: "Sennheiser Momentum 4 Headphones",
    image: "/cachedemo/emi/sennheiser.png",
    emi: "₹1,799/Month",
    saving: "save ₹3,551",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  },
  {
    id: 9,
    name: "Sony MDR-7506 Headphones",
    image: "/cachedemo/emi/sonymdr.png",
    emi: "₹599/Month",
    saving: "save ₹1,066",
    cashback: "5% instant Cashback on purchase",
    url: "https://myemishop.com/?utm_source=OneSmartBuy&utm_medium=Shop%20Menu%20Ingress&utm_campaign=MyEMIShop+Logo"
  }
];
export const REWARD_CATALOGUE = [
  {
    id: 1,
    title: "Curated\nCatalogue\nfor you",
    image: "/cachedemo/rewards/rc-woman.jpeg"
  },
  {
    id: 2,
    title: "Elevate your\nworld with\nMacbook",
    image: "/cachedemo/rewards/rc-macbook.png"
  },
  {
    id: 3,
    title: "Natural,\nPure. Gentle.\nEffective",
    image: "/cachedemo/rewards/rc_natures.png"
  },
  {
    id: 4,
    title: "Best Offer,\nGreat Opportunity",
    image: "/cachedemo/rewards/rc-man.jpeg"
  }
];
export const PREF_FILTERS = [
  "All",
  "For professionals",
  "For home",
  "For gamers",
  "For travellers",
  "Gifting"
];
export const TRENDING_FILTERS = [
  "All",
  "Smartphones",
  "Laptops",
  "Tablets",
  "Wearables",
  "Audio",
  "Appliances"
];
export const TRENDING_CONTENT: Record<
  string,
  { id: number; name: string; price: string; image: string }[]
> = {
  Smartphones: [
    {
      id: 1,
      name: "iPhone 17 Pro",
      price: "₹1,33,900",
      image: "/cachedemo/store/iphone17pro.png"
    },
    {
      id: 2,
      name: "iPhone 17",
      price: "₹81,900",
      image: "/cachedemo/store/iphone17.png"
    },
    {
      id: 3,
      name: "iPhone Air",
      price: "₹99,900",
      image: "/cachedemo/store/iphone17air.png"
    },
    {
      id: 4,
      name: "iPhone 17e",
      price: "₹62,900",
      image: "/cachedemo/store/iphone17e.png"
    },
    {
      id: 5,
      name: "OPPO Reno15 5G",
      price: "₹24,999",
      image: "/cachedemo/emi/opporeno15.png"
    },
    {
      id: 6,
      name: "Vivo Y400 5G",
      price: "₹17,999",
      image: "/cachedemo/emi/vivoy400.png"
    }
  ],
  Laptops: [
    {
      id: 1,
      name: "MacBook Pro 14-inch",
      price: "₹1,78,506",
      image: "/cachedemo/store/macbookpro14.png"
    },
    {
      id: 2,
      name: "MacBook Air 13-inch M5",
      price: "₹1,16,303",
      image: "/cachedemo/store/macbookairm5.png"
    }
  ],
  Tablets: [
    {
      id: 1,
      name: "iPad Air M4",
      price: "₹62,953",
      image: "/cachedemo/store/ipadairm4.png"
    },
    {
      id: 2,
      name: "iPad 11",
      price: "₹33,900",
      image: "/cachedemo/store/ipad11.png"
    }
  ],
  Wearables: [
    {
      id: 1,
      name: "AirPods 4",
      price: "₹12,900",
      image: "/cachedemo/store/airpods4.png"
    }
  ],
  Audio: [
    {
      id: 1,
      name: "Sennheiser Momentum 4 Headphones",
      price: "₹19,990",
      image: "/cachedemo/emi/sennheiser.png"
    },
    {
      id: 2,
      name: "Sony MDR-7506 Headphones",
      price: "₹6,990",
      image: "/cachedemo/emi/sonymdr.png"
    },
    {
      id: 3,
      name: "Marshall Woburn III Speaker",
      price: "₹51,999",
      image: "/cachedemo/store/marshall.png"
    },
    {
      id: 4,
      name: "Amazon Echo Dot 5th Gen",
      price: "₹4,499",
      image: "/cachedemo/emi/echoDot.png"
    }
  ],
  Appliances: [
    {
      id: 1,
      name: "IFB 2-Ton 3-Star AC",
      price: "₹34,990",
      image: "/cachedemo/emi/ifbac.png"
    },
    {
      id: 2,
      name: "Voltas Desert Air Cooler 92L",
      price: "₹12,490",
      image: "/cachedemo/emi/voltascooler.png"
    },
    {
      id: 3,
      name: "Honeywell Air Purifier",
      price: "₹8,990",
      image: "/cachedemo/emi/honeywellpurifier.png"
    },
    {
      id: 4,
      name: "Dyson Hushjet™ Purifier",
      price: "₹29,900",
      image: "/cachedemo/preferences/dysonpurifier.png"
    }
  ]
};
