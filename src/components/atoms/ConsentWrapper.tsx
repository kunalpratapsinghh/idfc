"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle
} from "@/components/ui/sheet";
import React, { forwardRef, ReactElement, useEffect, useState } from "react";
import { ConsentLink } from "./ConsentAwareAnchor";

export interface moEngageEventProps {
  eventName: string;
  eventSection: string;
  eventInput?: string;
  eventPartnerName?: string;
  eventWidgetTitle?: string;
  redirectionUrl?: string;
  eventSource?: string;
  eventCategory?: string;
  eventClick?: string;
  eventPrice?: number | string | null;
  eventStrikePrice?: number | null;
  booking_type?: string;
  eventButtonName?: string;
}

interface ConsentWrapperProps extends Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  children: ReactElement;
  href: string;
  title?: string;
  consentType?: string | null;
  openRedirectUrlInNewTab?: boolean | null;
  moEngageEvent?: moEngageEventProps;
  onParentClose?: () => void;
  forceNavigateToR360?: boolean;
}

interface DisclaimerEntry {
  title: string;
  content: string;
  buttonText: string;
}

// Hardcoded demo copy — no CMS/API call. EMI Store links use EMISTORE_DISCLAIMER,
// everything else falls back to DEFAULT_DISCLAIMER.
const EMISTORE_DISCLAIMER: DisclaimerEntry = {
  title: "You cannot redeem points here.",
  content: `
    <p>Dear Customer,</p>
    <p>By clicking on the hyperlink, you will be exiting the HDFC Bank SmartBuy website and entering into the Merchant&lsquo;s website. This link is provided only for the convenience of HDFC Bank&rsquo;s customers, HDFC Bank will not earn any commission or any other fee upon its Customers viewing the offers made available by Merchants or purchasing/ availing of a Product/Service offered by Merchants, except the customary considerations for use of credit card/debit cards/net banking facility. The Customer is free to purchase/avail them from any other stores/online platforms and by using any other payment mechanism.</p>
    <p>HDFC Bank is not selling/rendering any of these Products/Services. Neither is HDFC Bank guaranteeing nor making any representation with respect to the offers made by the merchants and HDFC Bank is not liable /responsible for the sale/quality/features of the Products/Services selected for purchase by the customers. HDFC Bank is merely facilitating the payment by its Customers by providing Payment Gateway Services.</p>
    <p>Important Note:</p>
    <p>SmartBuy offer benefits are not applicable on usage of non HDFC Bank payment instruments.</p>
    <p>1. This redirection holds good only for Customer Capital&rsquo;s MyEMIShop via SmartBuy. Hence, the benefit of 5% Instant Cashback from MyEMIShop would only be applicable for Customer Capital&rsquo;s MyEMIShop via SmartBuy.</p>
    <p>2. The payment modes for EMI Store have been restricted to only HDFC Bank payment methods. No other payment instruments can be utilised here. This again would only be applicable for Customer Capital&rsquo;s MyEMIShop via SmartBuy.</p>
    <p>3. <strong>No Interest EMI, The interest is borne by the merchant</strong></p>
  `,
  buttonText: "Proceed"
};

const DEFAULT_DISCLAIMER: DisclaimerEntry = {
  title: "Disclaimer",
  content: `
    <p>By clicking "I ACCEPT," you are acknowledging and agreeing to this disclaimer and the subsequent automatic redirection to a third-party website, i.e., the website of Reward360, which you may proceed to use for your transactions.</p>
    <p>This Website is not owned, controlled or endorsed by HDFC Bank Limited, its affiliates, subsidiaries, employees, officers, directors, personnel or agents (hereinafter "HDFC Bank")</p>
    <p>HDFC Bank does not warrant the accuracy or completeness of the services, information, materials, tools or reliability of any service, advice, opinion, statement or information displayed or distributed through the Website. Furthermore, it is advised that you make your own enquiries and arrangements to verify, scan and check the Website for any viruses, malicious code or malware. HDFC Bank provides no warranties whatsoever in this regard. Upon agreeing, you understand and acknowledge that accessing/availing any service offered on the Website or relying on any opinion, statement, or information presented on the Website shall be at your sole risk.</p>
    <p>The information/services available on the Website is subject to change, revision, verification and/or amendment without notice. Such services/information may change materially at any time, and you agree and accept the same.</p>
    <p><strong>HDFC Bank SmartBuy is designed to bring valuable offers and deals. The customer can use his / her discretion to check merchant offers available online or at stores and purchase / avail them from any other stores / online platforms basis their payment needs.</strong></p>
  `,
  buttonText: "Proceed"
};

function getDisclaimer(consentType?: string | null): DisclaimerEntry {
  if (consentType === "emistore") return EMISTORE_DISCLAIMER;
  return DEFAULT_DISCLAIMER;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function navigateTo(href: string, openInNewTab?: boolean | null) {
  if (!href) return;
  if (/^https?:\/\//.test(href)) {
    window.open(href, openInNewTab ? "_blank" : "_self", "noopener,noreferrer");
    return;
  }
  window.location.href = href;
}

/**
 * Demo-only stand-in for the production ConsentWrapper. Instead of going
 * through the consent/SSO resolver backend, it shows a hardcoded disclaimer
 * (EMI Store vs. default) and navigates straight to `href` on confirm.
 */
export const ConsentWrapper = forwardRef<
  HTMLAnchorElement,
  ConsentWrapperProps
>(function ConsentWrapper(
  {
    children,
    href,
    consentType,
    openRedirectUrlInNewTab,
    title,
    onParentClose,
    // accepted for API compatibility, unused in this demo build
    moEngageEvent: _moEngageEvent,
    forceNavigateToR360: _forceNavigateToR360,
    ...rest
  },
  ref
) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const disclaimer = getDisclaimer(consentType);

  const handleRequest = () => setOpen(true);

  const handleProceed = () => {
    setOpen(false);
    onParentClose?.();
    navigateTo(href, openRedirectUrlInNewTab);
  };

  const TitleComponent = isMobile ? SheetTitle : DialogTitle;
  const DescriptionComponent = isMobile ? SheetDescription : DialogDescription;

  const modalBody = (
    <div className="flex flex-col overflow-hidden max-h-[85vh]">
      <div className="px-6 pt-6 pb-4 border-b shrink-0 bg-white">
        <TitleComponent className="text-base font-bold leading-snug pr-6">
          {disclaimer.title}
        </TitleComponent>
        <DescriptionComponent className="sr-only">
          SmartBuy disclaimer
        </DescriptionComponent>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 py-5">
        <div
          className="space-y-3 text-sm text-gray-700 leading-relaxed [&_p]:mb-2"
          dangerouslySetInnerHTML={{ __html: disclaimer.content }}
        />
      </div>
      <div className="border-t shrink-0 bg-white px-6 py-4 flex justify-end">
        <button
          onClick={handleProceed}
          className="shrink-0 px-7 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
          style={{ backgroundColor: "var(--primary-btn-color, #00386C)" }}
        >
          {disclaimer.buttonText}
        </button>
      </div>
    </div>
  );

  return (
    <>
      <ConsentLink
        ref={ref}
        href={href}
        onRequest={handleRequest}
        openRedirectUrlInNewTab={openRedirectUrlInNewTab}
        title={title}
        {...rest}
      >
        {children}
      </ConsentLink>

      {isMobile ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side="bottom"
            className="p-0 rounded-t-2xl overflow-hidden h-[82svh]"
          >
            {modalBody}
          </SheetContent>
        </Sheet>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="p-0 w-[90vw] max-w-[90vw] sm:w-[90vw] sm:max-w-[700px] gap-0 overflow-hidden">
            {modalBody}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
});
