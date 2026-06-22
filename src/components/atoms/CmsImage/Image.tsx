"use client";

import { IMAGE_BASE_URL } from "@/config";
import Image, { ImageProps } from "next/image";

const BASE_URL = IMAGE_BASE_URL?.replace(/\/$/, "");

const DEFAULT_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=";

type ConfigImageProps = ImageProps & {
  showBlur?: boolean;
};

const ASSET_PREFIX =
  process.env.NEXT_PUBLIC_CDN_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "";

const normalizePrefix = (value: string): string => {
  if (!value) return "";
  const trimmed = value.endsWith("/") ? value.slice(0, -1) : value;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

const NORMALIZED_ASSET_PREFIX = normalizePrefix(ASSET_PREFIX);

const ConfigImage = ({
  src,
  alt,
  width,
  height,
  className,
  showBlur = false,
  ...rest
}: ConfigImageProps) => {
  let fullSrc: string = src as string;

  const HTTP = "http";
  const FILE = "//";
  const LOCAL = "/";
  const CMSUPLOADS = "/uploads/";

  if (
    (typeof src === "string" &&
      !src.startsWith(HTTP) &&
      !src.startsWith(FILE) &&
      !src.startsWith(LOCAL)) ||
    (src as string)?.startsWith(CMSUPLOADS)
  ) {
    fullSrc = `${BASE_URL}${(src as string).startsWith("/") ? "" : "/"}${src}`;
  } else if (
    typeof src === "string" &&
    src.startsWith(LOCAL) &&
    NORMALIZED_ASSET_PREFIX &&
    !src.startsWith(NORMALIZED_ASSET_PREFIX)
  ) {
    fullSrc = `${NORMALIZED_ASSET_PREFIX}${src}`;
  }
  return (
    <Image
      src={fullSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={rest.priority ? undefined : "lazy"}
      unoptimized={fullSrc?.startsWith("http") ? true : false}
      {...(showBlur && {
        placeholder: "blur",
        blurDataURL: DEFAULT_BLUR
      })}
      {...rest}
    />
  );
};

export default ConfigImage;
