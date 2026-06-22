"use client";

import Link from "next/link";
import React, { forwardRef, useMemo } from "react";

interface ConsentLinkProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  href: string;
  onRequest: (url: string) => void;
  children: React.ReactNode;
  openRedirectUrlInNewTab?: boolean | null;
}

export const ConsentLink = forwardRef<HTMLAnchorElement, ConsentLinkProps>(
  function ConsentLink(
    {
      href,
      onRequest,
      children,
      openRedirectUrlInNewTab,
      onClick,
      rel,
      title,
      ...rest
    },
    ref
  ) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.(e);
      onRequest(href);
    };

    const normalizedHref = useMemo(
      () => href?.replace(/^[^:]+:\/\//, "https://") || "",
      [href]
    );

    return (
      <Link
        ref={ref}
        prefetch={false}
        href={normalizedHref}
        onClick={handleClick}
        title={title || undefined}
        rel={openRedirectUrlInNewTab ? "nofollow" : rel}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);
