"use client";

import { ConsentWrapper, SafeImage } from "@/components/atoms";
import { GenericCarousel } from "@/components/molecules";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronRight, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { EMI_PRODUCTS } from "./data";

export default function MyEMIShopSection() {
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
          data={EMI_PRODUCTS}
          renderItem={item => <EMICard item={item} />}
          genericCarouselApi={setApi}
          withSlideNumbers={false}
          gradient="white"
          arrowVisibility="never"
          className="pb-0"
          carouselItemClassName="basis-[70%] min-w-[210px] md:basis-[305px] md:min-w-[305px] shrink-0"
          itemSpacing="pl-4 md:pl-5"
          edgeSpacing={{ start: "ml-0 md:-ml-4", end: "mr-0" }}
          topBarProps={{
            left: (
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <div className="relative w-28 h-7 md:w-36 md:h-9 shrink-0">
                  <SafeImage
                    src="/cachedemo/emi/myemishop-logo.webp"
                    alt="MyEMIShop"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h2 className="text-[15px] md:text-[22px] font-bold text-gray-900">
                  EMI Made Easy, Cashback Made Instant
                </h2>
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

function EMICard({ item }: { item: (typeof EMI_PRODUCTS)[number] }) {
  return (
    <ConsentWrapper href={item.url} consentType={"emistore"}>
      <div className="bg-[#F5F5F7] rounded-2xl p-3 md:p-4 flex flex-col min-h-[300px] md:min-h-[360px] w-full">
        <div className="relative flex items-center justify-center bg-[#F5F5F7] rounded-xl min-h-[140px] md:min-h-[180px]">
          {/* Badge */}
          <div className="absolute top-0 left-0 z-10 w-[44px] h-[19px] md:w-[52px] md:h-[22px]">
            <SafeImage
              src="/cachedemo/emi/summersale.png"
              alt="Summer Sale"
              fill
              className="object-contain object-left-top"
            />
          </div>
          <div className="relative w-full h-32 md:h-44">
            <SafeImage
              src={item.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <p className="text-sm font-bold text-gray-800 mt-3 md:mt-4 line-clamp-1">
          {item.name}
        </p>

        <div className="mt-2 flex flex-col gap-[3px]">
          <div className="flex items-center gap-1.5">
            <div className="relative w-[110px] h-[16px] md:w-[120px] md:h-[17px] shrink-0">
              <SafeImage
                src="/cachedemo/emi/EMIBadge.png"
                alt="EasyEMI"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <div className="flex items-baseline gap-[9px]">
            <span className="text-[15px] md:text-[16px] font-semibold text-black">
              {item.emi}
            </span>
            <span className="text-[15px] md:text-[16px] font-medium text-[#2db780]">
              {item.saving}
            </span>
          </div>
        </div>

        <div className="mt-auto pt-3">
          <div className="bg-gradient-to-r from-[#fef3d6] to-white rounded-[30px] px-4 py-2.5 text-center">
            <span className="text-[12px] font-medium text-[#111827]">
              {item.cashback}
            </span>
          </div>
        </div>
      </div>
    </ConsentWrapper>
  );
}
