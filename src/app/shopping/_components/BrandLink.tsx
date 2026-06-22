"use client";
import React from "react";
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
            { text: 'Click "Start Shopping."', star: false },
            {
              text: "Pay using your HDFC Infinia credit card and the same mobile number used on SmartBuy.",
              star: false
            },
            {
              text: `Enjoy upto ${tier} Reward Points on your purchase.`,
              star: true
            }
          ].map(({ text, star }, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: "var(--primary-btn-color, #00386C)" }}
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
            By clicking on the hyperlink you will be exiting HDFC Bank SmartBuy
            website and entering into the Merchant&apos;s website. This link is
            provided only for the convenience of HDFC Bank&apos;s customers,
            HDFC Bank will not earn any commission or any other fee upon its
            Customers viewing the offers made available by Merchants or
            purchasing/ availing of a Product/Service offered by Merchants,
            except the customary considerations for use of credit card/debit
            cards/net banking facility. The Customer is free to purchase/avail
            them from any other stores/online platforms and by using any other
            payment mechanism.
          </p>
          <p>
            HDFC Bank is not selling/rendering any of these Products/Services.
            Neither is HDFC Bank guaranteeing nor making any representation with
            respect to the offers made by the merchants and HDFC Bank is not
            liable /responsible for sale/quality/features of the
            Products/Services selected for purchase by the customers. HDFC Bank
            is merely facilitating the payment by its Customers by providing the
            Payment Gateway Services.
          </p>
          <p>
            <span className="font-semibold">Important Note: </span>
            SmartBuy offer benefits are not applicable on usage of non HDFC Bank
            payment instruments. This redirection holds good only for this brand
            via SmartBuy — upto {tier} RP benefit would only be applicable for
            this brand via SmartBuy. The payment modes have been restricted to
            only HDFC Bank payment methods; no other payment instruments can be
            utilised here. HDFC Bank SmartBuy is designed to bring valuable
            offers and deals. The customer can use his / her discretion to check
            merchant offers available online or at stores and purchase / avail
            them from any other stores / online platforms basis their payment
            needs.
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

function DisclaimerInner({
  tier,
  onProceed,
  TitleComponent,
  isMobile
}: InnerProps) {
  return (
    <div
      className="flex flex-col min-h-0 overflow-hidden"
      style={isMobile ? { height: "100%" } : { maxHeight: "85vh" }}
    >
      {/* Fixed header */}
      <div className="px-6 pt-6 pb-4 border-b shrink-0 bg-white">
        <TitleComponent className="text-base font-bold leading-snug pr-6">
          Earn upto {tier} Reward Points when you Shop via SmartBuy.
        </TitleComponent>
        {isMobile ? (
          <SheetDescription className="sr-only">
            SmartBuy brand disclaimer
          </SheetDescription>
        ) : (
          <DialogDescription className="sr-only">
            SmartBuy brand disclaimer
          </DialogDescription>
        )}
      </div>

      {/* Scrollable body — native overflow scroll for reliable touch scrolling on mobile */}
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
        <div className="px-6 py-5">
          <DisclaimerBody tier={tier} />
        </div>
      </div>

      {/* Fixed footer */}
      <div className="border-t shrink-0 bg-white">
        {/* T&C text */}
        <div className="px-6 pt-4 pb-3 flex sm:flex-row flex-col sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-gray-500 leading-relaxed">
            <sup className="text-red-500 font-bold">*</sup> Please{" "}
            <a
              href="https://offers.reward360.in/terms_conditions"
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
            style={{ backgroundColor: "var(--primary-btn-color, #00386C)" }}
          >
            Start Shopping
          </button>
        </div>
        {/* Mobile button — full-width sticky at bottom */}
        <div className="sm:hidden px-4 pb-5 pt-1">
          <button
            onClick={onProceed}
            className="w-full py-3 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90 active:opacity-80 cursor-pointer"
            style={{ backgroundColor: "var(--primary-btn-color, #00386C)" }}
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
            className="p-0 rounded-t-2xl overflow-hidden flex flex-col h-[85vh] max-h-[85vh]"
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
          <DialogContent className="p-0 w-[90vw] max-w-[90vw] sm:w-[90vw] sm:max-w-[1100px] gap-0 overflow-hidden">
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
