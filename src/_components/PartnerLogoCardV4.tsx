"use client";

import { SafeImage } from "@/components/atoms";
import { cn } from "@/lib/utils";
import BrandLink from "./BrandLink";
import type { PartnerLogoCardProps } from "./PartnerLogoCard";

export default function PartnerLogoCardV4({
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

  return (
    <BrandLink href={url} tier={tier} className="block">
      <div
        className={cn(
          "group relative w-full bg-white rounded-2xl cursor-pointer select-none overflow-hidden",
          "border border-slate-100 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)]",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.1)]",
          className
        )}
      >
        {/* Inset image with padding — App Store style */}
        <div className="px-3 pt-3">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            {imagePath ? (
              <SafeImage
                src={imagePath}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-black text-slate-300 select-none">{initials}</span>
              </div>
            )}

            {/* Category chip — top left over image */}
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide bg-black/40 text-white backdrop-blur-sm uppercase">
                {cat}
              </span>
            </div>

            {/* Tier chip — top right */}
            <div className="absolute top-2.5 right-2.5 z-10">
              <span
                className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black text-white shadow-md"
                style={{ backgroundColor: "#9b1e26" }}
              >
                {tier}
              </span>
            </div>
          </div>
        </div>

        {/* Content below image */}
        <div className="px-3 pt-2.5 pb-3">

          {/* Mobile: logo + name row, then earn text below */}
          <div className="flex sm:hidden items-center gap-2 mb-1">
            <div className="shrink-0 p-0.5 bg-white rounded-lg shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] border border-slate-50">
              {logoPath ? (
                <SafeImage
                  src={logoPath}
                  alt={`${name} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain rounded-md"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-md">
                  <span className="text-[9px] font-bold text-slate-400">{initials}</span>
                </div>
              )}
            </div>
            <h3 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-black transition-colors duration-300">
              {name}
            </h3>
          </div>
          <p className="sm:hidden text-[11px] text-slate-500 leading-snug">
            Earn{" "}
            <span className="font-bold" style={{ color: "#9b1e26" }}>
              {tier}
            </span>{" "}
            Reward Points
          </p>

          {/* Desktop: single row with logo + text + arrow */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="shrink-0 p-0.5 bg-white rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] border border-slate-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
              {logoPath ? (
                <SafeImage
                  src={logoPath}
                  alt={`${name} logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain rounded-lg"
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg">
                  <span className="text-[10px] font-bold text-slate-400">{initials}</span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-bold text-slate-800 line-clamp-1 leading-snug group-hover:text-black transition-colors duration-300">
                {name}
              </h3>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                Earn{" "}
                <span className="font-bold" style={{ color: "#e44d57" }}>
                  {tier}
                </span>{" "}
                Reward Points
              </p>
            </div>
            <div
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm transition-transform duration-300 group-hover:translate-x-0.5"
              style={{ backgroundColor: "#9b1e26" }}
            >
              →
            </div>
          </div>

        </div>
      </div>
    </BrandLink>
  );
}
