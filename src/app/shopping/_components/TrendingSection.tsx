"use client";

import { GenericCarousel } from "@/components/molecules";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { TRENDING_CONTENT, TRENDING_FILTERS } from "./data";
import ProductCard from "./ProductCard";

// Stable (non-randomized) order so server- and client-rendered HTML match.
const ALL_TRENDING_PRODUCTS = Object.values(TRENDING_CONTENT)
  .flat()
  .map((p, i) => ({ ...p, id: i + 1 }));

export default function TrendingSection() {
  const [activeFilter, setActiveFilter] = useState("All");
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

  useEffect(() => {
    api?.scrollTo(0, true);
  }, [activeFilter, api]);

  const products =
    activeFilter === "All"
      ? ALL_TRENDING_PRODUCTS
      : (TRENDING_CONTENT[activeFilter] ?? []);

  return (
    <section className="bg-white py-6 md:py-10 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 md:px-5">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <h2 className="text-[18px] md:text-[22px] font-bold text-gray-900 flex-1">
            Trending products for you
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

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-nowrap overflow-x-auto -mx-4 px-4 md:flex-wrap md:overflow-visible md:mx-0 md:px-0 mb-5 md:mb-7 [&::-webkit-scrollbar]:hidden">
          {TRENDING_FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 px-4 md:px-5 py-1.5 md:py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                activeFilter === f
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <GenericCarousel
          key={activeFilter}
          data={products}
          renderItem={item => (
            <ProductCard
              name={item.name}
              price={item.price}
              image={item.image}
            />
          )}
          genericCarouselApi={setApi}
          withSlideNumbers={false}
          gradient="white"
          arrowVisibility="never"
          className="pb-0"
          carouselItemClassName="basis-[62%] min-w-[190px] md:basis-[318px] md:min-w-[318px] shrink-0"
          itemSpacing="pl-4 md:pl-8"
          edgeSpacing={{ start: "ml-0 md:-ml-4", end: "mr-0" }}
        />
      </div>
    </section>
  );
}
