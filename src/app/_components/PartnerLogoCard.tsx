"use client";

import { BadgeWithNumber, SafeImage } from "@/components/atoms";
import { cn } from "@/lib/utils";
import BrandLink from "./BrandLink";
import PartnerLogoCardV2 from "./PartnerLogoCardV2";
import PartnerLogoCardV3 from "./PartnerLogoCardV3";
import PartnerLogoCardV4 from "./PartnerLogoCardV4";

export interface PartnerLogoCardProps {
  name: string;
  cat: string;
  tier: string;
  imagePath: string | null;
  logoPath: string | null;
  url?: string;
  className?: string;
  variant?: number;
}

const Wave = () => (
  <div className="absolute w-full overflow-hidden z-[2] h-11 -top-4 pointer-events-none flex flex-col">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="266"
      height="21"
      viewBox="0 0 266 21"
      fill="none"
      className="w-full h-auto shrink-0"
    >
      <path
        d="M60.6515 6.69501C35.1818 1.01926 12.2747 4.84401 0 12.274V21H266V12.274C249.364 -4.18628 232.764 -1.612 216.612 5.64895C201.875 12.274 190.795 12.274 168.091 5.64895C146.042 -0.785206 138.517 0.0746522 115.238 6.69501C95.6203 12.274 83.9862 11.895 60.6515 6.69501Z"
        fill="white"
      />
    </svg>
    <div className="flex-1 bg-white -mt-px" />
  </div>
);

export default function PartnerLogoCard({
  name,
  cat,
  tier,
  imagePath,
  logoPath,
  url,
  className,
  variant = 1
}: PartnerLogoCardProps) {
  if (variant === 2) return <PartnerLogoCardV2 name={name} cat={cat} tier={tier} imagePath={imagePath} logoPath={logoPath} url={url} className={className} />;
  if (variant === 3) return <PartnerLogoCardV3 name={name} cat={cat} tier={tier} imagePath={imagePath} logoPath={logoPath} url={url} className={className} />;
  if (variant === 4) return <PartnerLogoCardV4 name={name} cat={cat} tier={tier} imagePath={imagePath} logoPath={logoPath} url={url} className={className} />;

  const initials = name
    .split(" ")
    .map(w => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const cardContent = (
    <div
      className={cn(
        "group relative w-full bg-white overflow-hidden rounded-2xl",
        "border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08)]",
        "cursor-pointer select-none",
        className
      )}
    >
      {/* Banner image — Dark premium base */}
      <div className="w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 relative">
        {imagePath ? (
          <SafeImage
            src={imagePath}
            alt={name}
            fill
            className="object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center tracking-wider opacity-20">
            <span className="text-xl font-medium text-white">{initials}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Wave + Logo row */}
      <div className="relative">
        <Wave />
        {/* Logo */}
        <div className="absolute -top-[34px] left-3 sm:left-4 z-10 p-1 bg-white rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.08)] border border-slate-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
          {logoPath ? (
            <SafeImage
              src={logoPath}
              alt={`${name} logo`}
              width={48}
              height={48}
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] object-contain rounded-lg"
            />
          ) : (
            <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] flex items-center justify-center bg-slate-50 rounded-lg">
              <span className="text-[10px] sm:text-xs font-semibold text-slate-400 tracking-wide">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="pt-4 pb-3 px-3 sm:px-4 flex flex-col gap-2 bg-white z-[2]">
        {/* Identity block */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-emerald-600 uppercase">
            {cat}
          </span>
          <h3 className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight line-clamp-1 group-hover:text-black transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* Offer text */}
        <p className="text-xs sm:text-sm font-bold text-slate-700 line-clamp-2 leading-snug">
          Earn {tier} Reward Points on every purchase
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 tracking-wide uppercase">
            Shop and Earn
          </span>
          <BadgeWithNumber value={tier} />
        </div>
      </div>
    </div>
  );

  return (
    <BrandLink href={url} tier={tier} className="block">
      {cardContent}
    </BrandLink>
  );
}
