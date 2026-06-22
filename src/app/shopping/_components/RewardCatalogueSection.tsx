"use client";

import { ConsentWrapper, SafeImage, SavingsInfo } from "@/components/atoms";
import { GenericCarousel } from "@/components/molecules";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { REWARD_CATALOGUE } from "./data";

export default function RewardCatalogueSection() {
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
          data={REWARD_CATALOGUE}
          renderItem={item => (
            <ConsentWrapper
              href="https://offers-smartbuyuat.reward360.in/rewards/infinia"
              forceNavigateToR360
              openRedirectUrlInNewTab
              className="block relative rounded-2xl overflow-hidden cursor-pointer group w-full ml-3 md:ml-4 h-[220px] md:h-[360px]"
            >
              <div>
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-white font-semibold text-base md:text-lg leading-snug whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              </div>
            </ConsentWrapper>
          )}
          genericCarouselApi={setApi}
          withSlideNumbers={false}
          gradient="white"
          arrowVisibility="never"
          className="pb-0"
          carouselItemClassName="basis-[62%] min-w-[180px] md:basis-[305px] md:min-w-[305px] shrink-0"
          itemSpacing="pl-4 md:pl-5"
          edgeSpacing={{ start: "ml-0 md:-ml-4", end: "mr-0" }}
          topBarProps={{
            left: (
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <h2 className="text-[18px] md:text-[22px] font-bold text-gray-900 shrink-0">
                  Reward Catalogue
                </h2>
                <div className="flex items-center gap-1 shrink-0">
                  <SavingsInfo
                    preText=""
                    valueLabel={
                      <>
                        <span className="text-xl md:text-2xl leading-none align-middle">
                          🔥
                        </span>{" "}
                        Burn your points, unlock rewards
                      </>
                    }
                    valueLabelClassName="text-xs md:text-sm font-medium"
                    benefitType=""
                    savingsValue=""
                    savingsSuffix=""
                    fromColors="#B1ECFF"
                    toColors="#B1ECFF00"
                  />
                </div>
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
