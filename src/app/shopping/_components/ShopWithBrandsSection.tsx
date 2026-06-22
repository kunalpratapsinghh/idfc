"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { SafeImage, SavingsInfo } from "../../../components/atoms";
import BrandLink from "./BrandLink";
import { SHOPWITHBRANDS } from "./cacheData";

type Partner = (typeof SHOPWITHBRANDS)[number];

// Derive unique categories preserving order of first appearance
const CATEGORIES = Array.from(new Set(SHOPWITHBRANDS.map(p => p.cat)));

// Build category → partners lookup
const CATEGORY_PARTNERS = SHOPWITHBRANDS.reduce<Record<string, Partner[]>>(
  (acc, p) => {
    (acc[p.cat] ??= []).push(p);
    return acc;
  },
  {}
);

export default function ShopWithBrandsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = CATEGORIES[activeIndex];
  const partners = CATEGORY_PARTNERS[activeCategory] ?? [];
  const row1 = partners.slice(0, 2);
  const row2 = partners.slice(2, 5);

  return (
    <section className="bg-white py-6 md:py-10 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 md:px-5">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6 md:flex-nowrap md:gap-3">
          <h2 className="text-[18px] md:text-[22px] font-bold text-gray-900 shrink-0">
            Shop with Brands
          </h2>
          <div className="flex items-center gap-1 shrink-0">
            <SavingsInfo
              preText="Get Up to"
              valueLabel="10X"
              benefitType="Reward Points"
              savingsValue="33%"
              savingsSuffix="Savings"
              fromColors="#B1ECFF"
              toColors="#B1ECFF00"
            />
          </div>
          <div className="hidden md:block flex-1" />
          <button className="ml-auto md:ml-0 flex items-center gap-0.5 text-[#1c3fca] text-sm font-medium hover:underline shrink-0">
            View All <ChevronRight className="size-3.5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-stretch">
          {/* Category selector — horizontal pills on mobile, sidebar on desktop */}
          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1 [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:w-[165px] md:shrink-0 md:flex-col md:gap-[25px] md:overflow-visible">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-[13px] font-semibold transition-all cursor-pointer md:w-full md:shrink md:whitespace-normal md:rounded-none md:border-0 md:border-l-2 md:px-4 md:py-1.5 md:text-left md:text-[14px] ${
                  i === activeIndex
                    ? "bg-[#1c3fca] text-white border-[#1c3fca] md:bg-[linear-gradient(90deg,#f3f6fd_34.762%,#ffffff_111.11%)] md:text-[#111827] md:border-l-[#1c3fca] md:py-[10px]"
                    : "bg-white text-gray-600 border-gray-300 md:border-l-transparent md:text-[#111827] md:py-1.5"
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="hidden md:block w-full text-left pl-4 text-[14px] font-semibold text-[#1c3fca] border-l-2 border-transparent py-1.5 hover:underline">
              View all categories
            </button>
          </div>

          {/* Mobile: horizontal scroll of brand cards */}
          <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden md:hidden">
            {partners.map(p => (
              <BrandTileCard
                key={p.name}
                partner={p}
                className="w-[78%] min-w-[230px] h-[230px] shrink-0 snap-start"
              />
            ))}
          </div>

          {/* Desktop: bento product grid */}
          <div className="hidden md:flex flex-1 flex-col gap-[17px]">
            {row1.length > 0 && (
              <div className="flex gap-6 flex-1">
                {row1[0] && (
                  <BrandTileCard partner={row1[0]} className="flex-1" />
                )}
                {row1[1] && (
                  <BrandTileCard
                    partner={row1[1]}
                    className="w-[338px] shrink-0"
                  />
                )}
              </div>
            )}
            {row2.length > 0 && (
              <div className="flex gap-4 flex-1">
                {row2.map(p => (
                  <BrandTileCard key={p.name} partner={p} className="flex-1" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandTileCard({
  partner,
  className
}: {
  partner: Partner;
  className?: string;
}) {
  return (
    <BrandLink href={partner.url} tier={partner.tier} className={className}>
      <div className="relative overflow-hidden rounded-2xl md:rounded-[24px] group h-full w-full">
        <SafeImage
          src={partner.imagePath}
          alt={partner.description}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(27deg, rgba(0,0,0,0.6) 25%, rgba(102,102,102,0) 76%)"
          }}
        />
        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
          {/* Top: brand logo + desc */}
          <div className="flex flex-col gap-1.5">
            <div className="relative h-7 md:h-9 shrink-0">
              <SafeImage
                src={partner.logoPath}
                alt={partner.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/90 text-[12px] leading-5 line-clamp-2">
              {partner.description}
            </p>
          </div>
          {/* Bottom: price */}
          <p className="text-white font-semibold text-[14px] leading-5">
            Starts from {partner.productStartsFrom}
          </p>
        </div>
      </div>
    </BrandLink>
  );
}
