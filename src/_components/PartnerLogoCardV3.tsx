"use client";

import { SafeImage } from "@/components/atoms";
import { cn } from "@/lib/utils";
import BrandLink from "./BrandLink";
import type { PartnerLogoCardProps } from "./PartnerLogoCard";

const CAT_PALETTE: Record<string, { a: string; b: string }> = {
  Fashion:              { a: "#F43F5E", b: "#EC4899" },
  Electronics:          { a: "#3B82F6", b: "#6366F1" },
  Beauty:               { a: "#A855F7", b: "#EC4899" },
  Cosmetics:            { a: "#F472B6", b: "#A855F7" },
  Health:               { a: "#10B981", b: "#06B6D4" },
  Gifting:              { a: "#F59E0B", b: "#EF4444" },
  Accessories:          { a: "#8B5CF6", b: "#3B82F6" },
  "Sports Fashion":     { a: "#22C55E", b: "#14B8A6" },
  "Kitchen Appliance":  { a: "#F97316", b: "#EF4444" },
  "Oral care":          { a: "#06B6D4", b: "#0EA5E9" },
};

export default function PartnerLogoCardV3({
  name,
  cat,
  tier,
  imagePath,
  logoPath,
  url,
  className
}: PartnerLogoCardProps) {
  const initials = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const palette = CAT_PALETTE[cat] ?? { a: "#64748B", b: "#475569" };
  const gradient = `linear-gradient(135deg, ${palette.a} 0%, ${palette.b} 100%)`;

  return (
    <BrandLink href={url} tier={tier} className="block">
      <div
        className={cn(
          "group relative w-full bg-white rounded-2xl overflow-visible cursor-pointer select-none",
          "border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)]",
          className
        )}
      >
        {/* Banner image top — with color tint overlay */}
        <div className="relative w-full rounded-t-2xl overflow-hidden" style={{ paddingBottom: "50%" }}>
          {imagePath ? (
            <SafeImage
              src={imagePath}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: gradient }} />
          )}
          {/* Category-colored tint overlay so variant 3 still feels distinct */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${palette.a}55 0%, ${palette.b}44 100%)` }}
          />
        </div>

        {/* Floating logo — centered at boundary */}
        <div className="relative flex justify-center -mt-6 z-10 mb-3">
          <div
            className="p-1.5 bg-white rounded-2xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] border border-slate-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1"
          >
            {logoPath ? (
              <SafeImage
                src={logoPath}
                alt={`${name} logo`}
                width={52}
                height={52}
                className="w-[52px] h-[52px] object-contain rounded-xl"
              />
            ) : (
              <div
                className="w-[52px] h-[52px] flex items-center justify-center rounded-xl"
                style={{ background: gradient }}
              >
                <span className="text-sm font-bold text-white">{initials}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 text-center">
          <span
            className="inline-block text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: palette.a }}
          >
            {cat}
          </span>
          <h3 className="text-sm font-bold text-slate-800 leading-tight line-clamp-1 mb-1">
            {name}
          </h3>
          <p className="text-[11px] text-slate-500 mb-3">
            Earn up to{" "}
            <span className="font-semibold" style={{ color: palette.b }}>
              {tier}
            </span>{" "}
            Reward Points
          </p>

          {/* Tier pill */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-white text-[10px] sm:text-xs font-bold shadow-sm"
              style={{ background: gradient }}
            >
              <span>{tier}</span>
              <span className="opacity-80 font-normal">Reward Points</span>
            </div>
          </div>
        </div>
      </div>
    </BrandLink>
  );
}
