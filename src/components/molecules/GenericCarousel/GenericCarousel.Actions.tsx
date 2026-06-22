import {
  ConsentWrapper,
  If,
  Separator,
  TextLinkButton
} from "@/components/atoms";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { DisclaimerSchemaProps } from "@/server/schemas/shared";
import React from "react";
import { useGenericCarousel } from "./GenericCarouselContext";

interface ActionsProps {
  showCta?: boolean;
  ctaLabel: string | null;
  ctaHref: string | null;
  withNavigation?: boolean;
  navClass?: string;
}

interface ActionsProps {
  showCta?: boolean;
  ctaLabel: string | null;
  ctaHref: string | null;
  withNavigation?: boolean;
  navClass?: string;
  className?: string;
  theme?: "light" | "dark";
  openRedirectUrlInNewTab: boolean | null;
  disclaimer_popup: DisclaimerSchemaProps | null;
  children?: React.ReactNode;
}

export const Actions = ({
  showCta = false,
  ctaLabel = "View all",
  ctaHref,
  withNavigation = false,
  navClass = "",
  theme = "light",
  className,
  openRedirectUrlInNewTab,
  disclaimer_popup,
  children
}: ActionsProps) => {
  useGenericCarousel();

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const separatorColor = isDark ? "via-gray-200" : "via-gray-800";

  return (
    <div className={cn(className, "flex items-center gap-6 justify-end")}>
      {withNavigation && (
        <>
          <div className="z-20 hidden md:flex gap-6">
            <CarouselPrevious
              className={`relative ${textColor} ${borderColor} border-2 bg-transparent hover:${textColor} hover:bg-transparent left-0 translate-0 ${navClass}`}
            />
            <CarouselNext
              className={`relative ${textColor} ${borderColor} border-2 bg-transparent hover:${textColor} hover:bg-transparent right-0 translate-0 ${navClass}`}
            />
          </div>
          <If condition={!!children}>
            <Separator
              className={`bg-gradient-to-b h-6 from-transparent ${separatorColor} to-transparent  md:flex`}
            />
            {children}
          </If>
        </>
      )}

      {withNavigation && showCta && ctaHref && (
        <Separator
          className={`bg-gradient-to-b h-6 from-transparent ${separatorColor} to-transparent hidden md:flex`}
        />
      )}

      {showCta && (ctaHref || typeof ctaHref === "string") && (
        <ConsentWrapper
          href={ctaHref}
          consentType={disclaimer_popup?.slug}
          openRedirectUrlInNewTab={openRedirectUrlInNewTab}
        >
          <TextLinkButton label={ctaLabel} href={ctaHref} theme={theme} />
        </ConsentWrapper>
      )}
    </div>
  );
};
