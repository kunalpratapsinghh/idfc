"use client";

import { MOBILE_HEADER_VISIBLE_PAGES, PathMap } from "@/config";
import { useAuth } from "@/context";
import { getPageTransparency } from "@/lib/pageTransparency";
import {
  cn,
  getMenuHighlight,
  isFixedMobileFixedHeader
} from "@/lib/utils";
import { CustomerCard } from "@/server/schemas/auth/auth";
import {
  useSearchStore,
  useStencilHydratedStore
} from "@/stores/useSearchStore";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function HeaderWrapper({
  ssrHtml,
  isLoggedIn = false,
  customerInfo,
  selectedCard,
  cardsAvailable = [],
  headerElements,
  tickerresponse,
  fallBackCardType,
  disclaimers,
  nonce
}: {
  ssrHtml: string;
  isLoggedIn?: boolean;
  customerInfo?: any;
  selectedCard?: CustomerCard;
  cardsAvailable?: any;
  headerElements?: any;
  tickerresponse?: any;
  fallBackCardType?: string;
  disclaimers?: any;
  nonce?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wrapperRefClient = useRef<HTMLDivElement>(null);
  const initialHtmlRef = useRef(ssrHtml);
  const { hydrated, setHydrated } = useStencilHydratedStore();
  const pathname = usePathname();
  const { setNavHeaderReady, programName = "" } = useAuth();
  const { setOpen } = useSearchStore();
  const matchedSegment = getMenuHighlight(pathname);
  const allowedCardTypes = Object.keys(PathMap).map(key => key.toLowerCase());
  const headerTransparent = getPageTransparency(pathname);
  const isFixedMobileHeader = isFixedMobileFixedHeader(pathname);

  const cardTypeToUse = selectedCard?.cardType || fallBackCardType;
  const isValidCardType =
    typeof cardTypeToUse === "string" &&
    allowedCardTypes.includes(cardTypeToUse);

  const visibleOnMobile = MOBILE_HEADER_VISIBLE_PAGES.some(path =>
    pathname.includes(path)
  );

  useEffect(() => {
    const navHeader: any =
      wrapperRefClient.current?.querySelector("nav-header");
    if (navHeader) {
      navHeader.customerInfo = customerInfo;
      navHeader.selectedCard = selectedCard;
      navHeader.activeProgram = selectedCard?.cardType || fallBackCardType;
    }
    if (navHeader && hydrated) {
      const handleLoginEvent = async () => {
        window.location.reload();
      };

      const handleSelectCard = () => {
        window.location.reload();
      };

      const handleSearchClick = async () => {
        setOpen(true);
      };

      const handleBackClick = () => {
        window.history.back();
      };

      navHeader.addEventListener("loginSuccess", handleLoginEvent);
      navHeader.addEventListener("selectCard", handleSelectCard);
      navHeader.addEventListener("proceedToSearch", handleSearchClick);
      navHeader.addEventListener("backClick", handleBackClick);
      return () => {
        navHeader.removeEventListener("loginSuccess", handleLoginEvent);
        navHeader.removeEventListener("selectCard", handleSelectCard);
        navHeader.removeEventListener("proceedToSearch", handleSearchClick);
        navHeader.removeEventListener("backClick", handleBackClick);
      };
    }
  }, [hydrated]);

  useEffect(() => {
    const navHeader = wrapperRef.current?.querySelector("nav-header");
    if (navHeader) {
      const handleHydrated = () => {
        setHydrated(true);
        setNavHeaderReady(true);
      };
      navHeader.addEventListener("hydrated", handleHydrated);
      return () => {
        navHeader.removeEventListener("hydrated", handleHydrated);
      };
    }
  }, [setHydrated, setNavHeaderReady]);

  if (hydrated) {
    return (
      <div
        className={cn(
          "top-0 w-full",
          headerTransparent
            ? `${isFixedMobileHeader ? "fixed" : "sticky md:fixed"}`
            : "sticky",
          "z-70"
        )}
        ref={wrapperRefClient}
        suppressHydrationWarning
        id="nav-header-client"
      >
        <nav-header
          cardsAvailable={cardsAvailable}
          redirectDomainUrl={process.env.NEXT_PUBLIC_REDIRECT_DOMAIN_URL}
          headerTransparent={headerTransparent}
          isLoggedin={isLoggedIn}
          position="relative"
          isHomePage={true}
          ssrEnabled={true}
          showBackButton={true}
          assetPath={process.env.NEXT_PUBLIC_CDN_PATH + "stencil-assets/"}
          class="nav-header"
          isMain={process.env.NEXT_PUBLIC_ISMAIN}
          {...(isValidCardType ? { activeProgram: cardTypeToUse } : {})}
          selectedCard={selectedCard}
          loadAnalyticsVia={"proxy"}
          tickerResponse={tickerresponse}
          menuItems={headerElements}
          disclaimerData={disclaimers}
          visibleOnMobile={visibleOnMobile}
          bankDomainUrl={process.env.NEXT_PUBLIC_BANK_DOMAIN_URL}
          activeMenuItem={matchedSegment}
          customNonce={nonce}
          domainUrl={{
            mainDomain: {
              url: process.env.NEXT_PUBLIC_MAIN_DOMAIN_URL || "",
              basePath: process.env.NEXT_PUBLIC_MAIN_DOMAIN_BASE_PATH || ""
            },
            subDomain: {
              url: process.env.NEXT_PUBLIC_SUB_DOMAIN_URL || "",
              basePath: process.env.NEXT_PUBLIC_SUB_DOMAIN_BASE_PATH || ""
            }
          }}
        />
      </div>
    );
  } else
    return (
      <div
        className={cn(
          "top-0 z-70 w-full",
          headerTransparent
            ? `${isFixedMobileHeader ? "fixed" : "sticky md:fixed"}`
            : "sticky"
        )}
        ref={wrapperRef}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: initialHtmlRef.current }}
      />
    );
}
export default HeaderWrapper;
