// components/atoms/SafeImage.tsx
"use client";

import { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";
import { CmsImage } from "./CmsImage";

interface SafeImageProps extends Omit<ImageProps, "src" | "loader"> {
  src?: string | null;
  fallbackSrc?: string; // logical fallback path (relative or absolute)
  useCdnLoaderForAbsolute?: boolean;
  showBlur?: boolean;
  /**
   * Optional test id for UI automation.
   */
  testId?: string;
}

export default function SafeImage({
  src: incomingSrc,
  fallbackSrc = "/fallbackimage/hotelplaceholder.svg",
  showBlur = false,
  testId,
  ...props
}: SafeImageProps) {
  const assetPrefix =
    process.env.NEXT_PUBLIC_CDN_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Resolve fallback with ASSET_PREFIX if provided
  const resolveFallbackSrc = (value: string): string => {
    // If already absolute (http/https), just use as-is
    if (/^https?:\/\//i.test(value)) return value;

    if (!assetPrefix) return value;

    // Join assetPrefix + path safely with single slash
    const base = assetPrefix.endsWith("/")
      ? assetPrefix.slice(0, -1)
      : assetPrefix;
    const path = value.startsWith("/") ? value : `/${value}`;
    return `${base}${path}`;
  };

  const effectiveFallbackSrc = resolveFallbackSrc(fallbackSrc);

  // Normalize src into a usable string
  const normalizeSrc = (value: any): string => {
    if (typeof value === "string" && value.trim() !== "") return value;
    // null / undefined / empty / invalid → use resolved fallback
    return effectiveFallbackSrc;
  };

  const [currentSrc, setCurrentSrc] = useState<string>(() =>
    normalizeSrc(incomingSrc)
  );
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  // Sync when src changes
  useEffect(() => {
    setCurrentSrc(normalizeSrc(incomingSrc));
    setHasTriedFallback(false);
  }, [incomingSrc, effectiveFallbackSrc]);

  // const isAbsolute = /^https?:\/\//i.test(currentSrc);

  // const shouldUseCdnLoader = !isAbsolute || useCdnLoaderForAbsolute;

  const handleError: React.ReactEventHandler<HTMLImageElement> = () => {
    if (hasTriedFallback) return;
    setHasTriedFallback(true);
    setCurrentSrc(effectiveFallbackSrc);
  };

  return (
    <CmsImage
      {...props}
      src={currentSrc}
      showBlur={showBlur}
      onError={handleError}
      data-testid={testId}
    />
  );
}
