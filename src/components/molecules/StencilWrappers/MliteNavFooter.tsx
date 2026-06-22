"use client";

import { getMenuHighlight, hideNavFooter } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { memo, useEffect, useRef, useState } from "react";

export function MliteNavFooter({
  ssrHtml,
  isLoggedIn,
  navItems,
  disclaimers
}: {
  ssrHtml: string;
  isLoggedIn: boolean;
  navItems: any;
  disclaimers: any;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRefClient = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();
  const hidden = hideNavFooter(pathname);
  const matchedSegment = getMenuHighlight(pathname);

  useEffect(() => {
    const navHeader = wrapperRef.current?.querySelector("nav-footer");
    if (navHeader) {
      navHeader.addEventListener("hydrated", () => {
        setHydrated(true);
      });
      return () => {
        navHeader.removeEventListener("hydrated", () => {});
      };
    }
  }, []);
  if (hidden) return null;

  if (hidden) return null;

  if (hydrated)
    return (
      <div ref={wrapperRefClient} suppressHydrationWarning>
        <nav-footer
          isMain={process.env.NEXT_PUBLIC_ISMAIN}
          ssrEnabled={true}
          redirectDomainUrl={process.env.NEXT_PUBLIC_REDIRECT_DOMAIN_URL}
          assetPath={process.env.NEXT_PUBLIC_CDN_PATH + "stencil-assets/"}
          isLoggedIn={isLoggedIn}
          activeModule={matchedSegment}
          navItems={navItems}
          disclaimerData={disclaimers}
        />
      </div>
    );

  return (
    <div
      ref={wrapperRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: ssrHtml }}
    />
  );
}
export default memo(MliteNavFooter);
