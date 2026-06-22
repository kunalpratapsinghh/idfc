"use client";

import { SavingsInfo } from "@/components/atoms";
import { GenericCarousel } from "@/components/molecules";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import AppleProductCard from "./AppleProductCard";
import { APPLE_PRODUCTS } from "./data";

export default function AppleStoreSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section className="bg-white py-6 md:py-10 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 md:px-5">
        <GenericCarousel
          data={APPLE_PRODUCTS}
          renderItem={item => (
            <AppleProductCard
              name={item.name}
              price={item.price}
              image={item.image}
              colors={item.colors}
              url={item.url}
            />
          )}
          genericCarouselApi={setApi}
          withSlideNumbers={false}
          gradient="white"
          arrowVisibility="never"
          className="pb-0"
          carouselItemClassName="basis-[68%] min-w-[200px] md:basis-[318px] md:min-w-[318px] shrink-0"
          itemSpacing="pl-4 md:pl-8"
          edgeSpacing={{ start: "ml-0 md:-ml-4", end: "mr-0" }}
          topBarProps={{
            left: (
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <h2 className="text-[18px] md:text-[22px] font-bold text-gray-900 whitespace-nowrap">
                  Apple Store
                </h2>
                <SavingsInfo
                  preText="Get Up to"
                  valueLabel="5X"
                  benefitType="Reward Points"
                  savingsValue="16%"
                  savingsSuffix="Savings"
                  fromColors="#B1ECFF"
                  toColors="#B1ECFF00"
                />
              </div>
            ),
            right: (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => api?.scrollPrev()}
                  disabled={!canPrev}
                  className="hidden md:flex items-center justify-center transition-opacity disabled:opacity-40"
                >
                  <CircleArrowLeft
                    className={`size-7 ${canPrev ? "text-blue-500" : "text-gray-300"}`}
                  />
                </button>
                <button
                  onClick={() => api?.scrollNext()}
                  disabled={!canNext}
                  className="hidden md:flex items-center justify-center transition-opacity disabled:opacity-40"
                >
                  <CircleArrowRight
                    className={`size-7 ${canNext ? "text-blue-500" : "text-gray-300"}`}
                  />
                </button>
                <div className="hidden md:block w-px h-5 bg-gray-200 mx-1" />
                <button className="flex items-center gap-0.5 text-blue-600 text-sm font-medium hover:underline">
                  View All <ChevronRight className="size-3.5" />
                </button>
              </div>
            )
          }}
        />
      </div>
    </section>
  );
}
