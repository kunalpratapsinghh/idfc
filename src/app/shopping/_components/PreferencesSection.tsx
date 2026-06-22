"use client";

import { ConsentWrapper, SafeImage } from "@/components/atoms";
import { GenericCarousel } from "@/components/molecules";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const COLLECTION_IMAGES = [
  "Gym essentials in cool blue tones.png",
  "Beauty collection on soft pink backdrop.png",
  "Gamer's collection in neon glow.png",
  "Travel essentials for your journey.png",
  "Tech essentials in blue glow.png"
];

export default function PreferencesSection() {
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
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <h2 className="text-[18px] md:text-[22px] font-bold text-gray-900 flex-1">
            Shop by Your Collections
          </h2>
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
        </div>

        {/* Carousel */}
        <GenericCarousel
          data={COLLECTION_IMAGES}
          renderItem={img => (
            <ConsentWrapper
              href="https://offers-smartbuyuat.reward360.in/rewards/infinia"
              forceNavigateToR360
              openRedirectUrlInNewTab
              className="block relative w-full h-[200px] md:h-[360px] rounded-2xl md:rounded-[24px] overflow-hidden"
            >
              <div>
                <SafeImage
                  src={`/cachedemo/collection/${img}`}
                  alt={img.replace(".png", "")}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ConsentWrapper>
          )}
          genericCarouselApi={setApi}
          withSlideNumbers={false}
          gradient="white"
          arrowVisibility="never"
          className="pb-0"
          carouselItemClassName="basis-[75%] min-w-[230px] md:basis-[392px] md:min-w-[392px] shrink-0"
          itemSpacing="pl-4 md:pl-8"
          edgeSpacing={{ start: "ml-0 md:-ml-4", end: "mr-0" }}
        />
      </div>
    </section>
  );
}
