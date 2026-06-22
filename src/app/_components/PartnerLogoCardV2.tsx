"use client";

import { SafeImage } from "@/components/atoms";
import { cn } from "@/lib/utils";
import BrandLink from "./BrandLink";
import type { PartnerLogoCardProps } from "./PartnerLogoCard";

export default function PartnerLogoCardV2({
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
          "group relative w-full rounded-2xl overflow-hidden bg-slate-950 cursor-pointer select-none",
          "border border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "hover:-translate-y-1.5 hover:shadow-[0_24px_56px_-12px_rgba(0,0,0,0.65)]",
          className
        )}
      >
        {/* Full-bleed image fills entire card */}
        <div className="relative w-full aspect-[3/4]">
          {imagePath ? (
            <SafeImage
              src={imagePath}
              alt={name}
              fill
              className="object-cover opacity-60 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
              <span className="text-7xl font-black text-white/10 tracking-tight select-none">
                {initials}
              </span>
            </div>
          )}

          {/* Gradient scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent h-1/3" />

          {/* Tier badge — top left */}
          <div className="absolute top-3 left-3 z-10">
            <div className="flex items-center gap-1 bg-amber-400 text-amber-950 rounded-full px-2.5 py-1 shadow-lg">
              <span className="text-xs sm:text-sm font-black tracking-tight leading-none">{tier}</span>
              <span className="text-[10px] sm:text-xs font-medium leading-none">Reward Points</span>
            </div>
          </div>

          {/* Logo — top right */}
          <div className="absolute top-3 right-3 z-10 p-0.5 bg-white/95 rounded-xl shadow-md border border-white/60 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
            {logoPath ? (
              <SafeImage
                src={logoPath}
                alt={`${name} logo`}
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-lg"
              />
            ) : (
              <div className="w-9 h-9 flex items-center justify-center bg-slate-100 rounded-lg">
                <span className="text-[9px] font-bold text-slate-500">{initials}</span>
              </div>
            )}
          </div>

          {/* Bottom content overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-10">
            <span className="block text-[9px] font-semibold tracking-[0.18em] text-cyan-400 uppercase mb-1">
              {cat}
            </span>
            <h3 className="text-sm font-bold text-white leading-tight line-clamp-1 mb-2">
              {name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-[11px] sm:text-xs text-white/55 leading-none">
                Earn up to{" "}
                <span className="text-white font-semibold">{tier}</span> Reward Points
              </p>
              <span className="text-white/35 text-sm transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-1 inline-block">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </BrandLink>
  );
}
