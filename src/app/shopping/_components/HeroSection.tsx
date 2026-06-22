"use client";

import { SafeImage } from "@/components/atoms";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/cachedemo/carousel/Apple.png", alt: "Apple" },
  { src: "/cachedemo/carousel/igp.png", alt: "IGP" },
  { src: "/cachedemo/carousel/mmt.png", alt: "MMT" },
  { src: "/cachedemo/carousel/tatacliq.png", alt: "Tata Cliq" },
  { src: "/cachedemo/carousel/decathlon.png", alt: "Decathlon" }
];

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="bg-white pt-4 pb-5 md:pt-15 md:pb-8">
      <div className="max-w-[1240px] mx-auto px-4 md:px-5">
        {/* Banner card — dots are inside */}
        <div className="relative rounded-2xl overflow-hidden mx-auto w-full md:max-w-[1200px]">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            setApi={setApi}
            className="w-full rounded-2xl overflow-hidden"
          >
            <CarouselContent className="-ml-0">
              {SLIDES.map((slide, i) => (
                <CarouselItem key={i} className="pl-0 basis-full">
                  <div className="relative w-full h-[170px] sm:h-[220px] md:h-[442px]">
                    <SafeImage src={slide.src} alt={slide.alt} fill />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots — absolutely positioned inside the banner */}
          <div className="absolute bottom-3 md:bottom-[43px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-[6px] md:gap-[8px]">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-2 h-2 md:w-3 md:h-3 bg-white"
                    : "w-2 h-2 md:w-3 md:h-3 border border-white bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
