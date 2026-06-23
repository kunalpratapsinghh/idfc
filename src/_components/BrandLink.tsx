"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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

function DisclaimerBody({ tier }: { tier: string }) {
  return (
    <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
      {/* How to use */}
      <div>
        <p className="font-bold text-gray-900 mb-3">How to use</p>
        <ol className="space-y-2 list-none">
          {[
            { text: "Click \"Start Shopping.\"", star: false },
            { text: "Pay using your IDFC credit card and the same mobile number used on IDFC.", star: false },
            { text: `Enjoy upto ${tier} Reward Points on your purchase.`, star: true }
          ].map(({ text, star }, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: "#9b1e26" }}
              >
                {i + 1}
              </span>
              <span>
                {text}
                {star && <sup className="text-red-500 font-bold ml-0.5">*</sup>}
              </span>
            </li>
          ))}
        </ol>

      </div>

      {/* Disclaimer */}
      <div>
        <p className="font-bold text-gray-900 mb-3 text-base">Disclaimer</p>

        <div className="space-y-3">
          <p>Dear Customer,</p>

          <p>
            By clicking on the hyperlink, you will be exiting the IDFC FIRST Bank
            website and entering the Merchant&apos;s website. This link is provided
            solely for the convenience of IDFC FIRST Bank customers. IDFC FIRST Bank
            will not earn any commission or other fee when its customers view offers
            made available by merchants or purchase or avail products or services
            offered by merchants, except for the customary charges associated with the
            use of credit cards, debit cards, or net banking facilities. Customers
            are free to purchase or avail such products or services from any other
            store or online platform using any payment mechanism of their choice.
          </p>

          <p>
            IDFC FIRST Bank is not selling or rendering any of these products or
            services. Nor does IDFC FIRST Bank guarantee or make any representation
            regarding the offers made by merchants. IDFC FIRST Bank shall not be
            liable or responsible for the sale, quality, features, delivery, or
            performance of any products or services selected for purchase by
            customers. IDFC FIRST Bank merely facilitates payments by providing
            payment gateway services.
          </p>

          <p>
            <span className="font-semibold">Important Note: </span>
            IDFC offer benefits are not applicable when non-IDFC FIRST Bank payment
            instruments are used. This redirection is valid only for this brand
            through IDFC FIRST Bank, and up to {tier} RP benefits will be applicable
            only for transactions made with this brand using IDFC FIRST Bank payment
            methods. Payment options on this page are restricted exclusively to IDFC
            FIRST Bank payment instruments; no other payment methods can be used.
            IDFC FIRST Bank rewards is designed to bring valuable offers and deals
            to its customers. Customers may, at their discretion, compare merchant
            offers available online or in stores and choose to purchase or avail
            products or services from other stores or online platforms based on their
            payment preferences and requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

interface InnerProps {
  tier: string;
  onProceed: () => void;
  TitleComponent: typeof DialogTitle | typeof SheetTitle;
  isMobile?: boolean;
}

function DisclaimerInner({ tier, onProceed, TitleComponent, isMobile }: InnerProps) {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={isMobile ? { height: "100%" } : { maxHeight: "85vh" }}
    >
      {/* Fixed header */}
      <div className="px-6 pt-6 pb-4 border-b shrink-0 bg-white">
        <TitleComponent className="text-base font-bold leading-snug pr-6">
          Earn upto {tier} Reward Points when you Shop via IDFC.
        </TitleComponent>
        {isMobile
          ? <SheetDescription className="sr-only">IDFC brand disclaimer</SheetDescription>
          : <DialogDescription className="sr-only">IDFC brand disclaimer</DialogDescription>
        }
      </div>

      {/* Scrollable body */}
      <ScrollArea
        type="always"
        className="flex-1 min-h-0 [&_[data-slot='scroll-area-scrollbar']]:w-2 [&_[data-slot='scroll-area-scrollbar']]:border-l-0 [&_[data-slot='scroll-area-thumb']]:bg-slate-300"
      >
        <div className="px-6 py-5">
          <DisclaimerBody tier={tier} />
        </div>
      </ScrollArea>

      {/* Fixed footer */}
      <div className="border-t shrink-0 bg-white">
        {/* T&C text */}
        <div className="px-6 pt-4 pb-3 flex sm:flex-row flex-col sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-gray-500 leading-relaxed">
            <sup className="text-red-500 font-bold">*</sup> Please{" "}
            <a
              href="https://firstrewards.in/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              click here
            </a>{" "}
            for detailed terms &amp; conditions.
          </p>
          {/* Desktop button — inline */}
          <button
            onClick={onProceed}
            className="hidden sm:block shrink-0 px-7 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
            style={{ backgroundColor: "#9b1e26" }}
          >
            Start Shopping
          </button>
        </div>
        {/* Mobile button — full-width sticky at bottom */}
        <div className="sm:hidden px-4 pb-5 pt-1">
          <button
            onClick={onProceed}
            className="w-full py-3 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
            style={{ backgroundColor: "#9b1e26" }}
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

interface BrandLinkProps {
  href?: string;
  tier: string;
  children: React.ReactNode;
  className?: string;
}

export default function BrandLink({
  href,
  tier,
  children,
  className
}: BrandLinkProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleProceed = () => {
    setOpen(false);
    if (href) window.open(href, "_blank", "noopener,noreferrer");
  };

  if (!href) return <div className={className}>{children}</div>;

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={e => e.key === "Enter" && setOpen(true)}
        className={cn("cursor-pointer", className)}
      >
        {children}
      </div>

      {isMobile ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side="bottom"
            className="p-0 rounded-t-2xl overflow-hidden h-[82svh]"
            hideClose={false}
          >
            <DisclaimerInner
              tier={tier}
              onProceed={handleProceed}
              TitleComponent={SheetTitle}
              isMobile
            />
          </SheetContent>
        </Sheet>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            className="p-0 w-[70vw] max-w-[70vw] sm:max-w-[70vw] sm:w-[70vw] gap-0 overflow-hidden"
          >
            <DisclaimerInner
              tier={tier}
              onProceed={handleProceed}
              TitleComponent={DialogTitle}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
