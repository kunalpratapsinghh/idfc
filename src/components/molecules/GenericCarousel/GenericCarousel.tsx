"use client";

import CarouselPageNumbers from "@/components/atoms/CarouselPageNumbers";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import React, {
  Children,
  isValidElement,
  ReactNode,
  useEffect,
  useState
} from "react";
import CarouselGradient from "../CarouselGradient";
import { Actions } from "./GenericCarousel.Actions";
import { Footer } from "./GenericCarousel.Footer";
import { Tabs } from "./GenericCarousel.Tabs";
import TopBar from "./GenericCarousel.TopBar";
import { GenericCarouselContext } from "./GenericCarouselContext";
import { ChevronRight } from "./icons";

type ArrowVisibility = "auto" | "always" | "never";

interface GenericCarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  header?:
    | ReactNode
    | ((props: {
        activeIndex: number;
        scrollTo: (index: number) => void;
      }) => ReactNode);
  withSlideNumbers?: boolean;
  gradient?: "white" | "primary" | "none";
  children?: ReactNode;
  opts?: any;
  className?: string;
  topBarProps?: React.ComponentProps<typeof TopBar>;
  footerProps?: React.ComponentProps<typeof Footer>;
  edgeSpacing?: {
    start?: string;
    end?: string;
  };
  itemSpacing?: string;
  orientation?: "horizontal" | "vertical";
  subHeader?: ReactNode;
  carouselItemClassName?: string;
  genericCarouselApi?: (api: CarouselApi) => void;
  autoScrollInterval?: number;
  arrowVisibility?: ArrowVisibility;
  arrowClassName?: string;
  renderArrowLeft?: (p: {
    disabled: boolean;
    onClick: () => void;
  }) => ReactNode;
  renderArrowRight?: (p: {
    disabled: boolean;
    onClick: () => void;
  }) => ReactNode;
}

const GenericCarousel = <T,>({
  data = [],
  renderItem,
  withSlideNumbers = true,
  gradient = "white",
  children,
  opts,
  className,
  topBarProps,
  footerProps,
  edgeSpacing,
  itemSpacing,
  genericCarouselApi,
  subHeader,
  orientation = "horizontal",
  arrowVisibility = "never",
  carouselItemClassName,
  autoScrollInterval,
  renderArrowRight,
  renderArrowLeft,
  arrowClassName
}: GenericCarouselProps<T>) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleScrollTo = (index: number) => {
    carouselApi?.scrollTo(index);
    const maxIndex = (carouselApi?.scrollSnapList()?.length ?? 0) - 1;
    setActiveIndex(index);
    setCanScrollLeft(index > 0);
    setCanScrollRight(index < maxIndex);
  };

  useEffect(() => {
    if (!carouselApi) return;
    if (data.length > 0) {
      carouselApi.scrollTo(0);
    }
  }, [data, carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const update = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
      setCanScrollLeft(carouselApi.canScrollPrev());
      setCanScrollRight(carouselApi.canScrollNext());
    };

    update(); // <-- ensures first render is correct

    carouselApi.on("init", update);
    carouselApi.on("reInit", update);
    carouselApi.on("select", update);
    carouselApi.on("resize", update);
    carouselApi.on("slidesChanged", update);

    return () => {
      carouselApi.off("init", update);
      carouselApi.off("reInit", update);
      carouselApi.off("select", update);
      carouselApi.off("resize", update);
      carouselApi.off("slidesChanged", update);
    };
  }, [carouselApi]);

  const childrenArray = Children.toArray(children);

  const topBarChild = childrenArray.find(
    child => isValidElement(child) && child.type === GenericCarousel.TopBar
  );

  const footerChildren = childrenArray.filter(
    child => isValidElement(child) && child.type === GenericCarousel.Footer
  );

  const inlineChildren = childrenArray.filter(
    child =>
      isValidElement(child) &&
      child.type !== GenericCarousel.Footer &&
      child.type !== GenericCarousel.TopBar
  );

  useEffect(() => {
    if (!carouselApi || !setCarouselApi) return;
    genericCarouselApi?.(carouselApi);
  }, [carouselApi, setCarouselApi]);

  const showLeft =
    arrowVisibility === "always"
      ? true
      : arrowVisibility === "never"
        ? false
        : /* auto */ canScrollLeft;

  const showRight =
    arrowVisibility === "always"
      ? true
      : arrowVisibility === "never"
        ? false
        : /* auto */ canScrollRight;

  const leftDisabled = !canScrollLeft;
  const rightDisabled = !canScrollRight;

  return (
    <GenericCarouselContext.Provider
      value={{ activeIndex, scrollTo: handleScrollTo, carouselApi }}
    >
      <Carousel
        setApi={setCarouselApi}
        opts={{
          loop: false,
          dragFree: true,
          containScroll: "trimSnaps",
          ...opts
        }}
        plugins={
          autoScrollInterval ? [Autoplay({ delay: autoScrollInterval })] : []
        }
        className={cn("px-0 pb-12 w-full", className)}
      >
        {inlineChildren}

        {/* TopBar */}
        {topBarChild || (topBarProps && <TopBar {...topBarProps} />)}
        {subHeader}
        {/* Gradient and carousel items */}
        <CarouselGradient
          gradient={gradient}
          showLeft={canScrollLeft}
          showRight={canScrollRight}
        >
          <CarouselContent className="items-start mt-4">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "!h-auto flex flex-col gap-4",
                  // basisClass,
                  itemSpacing ||
                    (orientation === "horizontal" ? "pl-7" : "pt-7"),
                  index === 0 && (edgeSpacing?.start || "ml-5"),
                  index === data.length - 1 && (edgeSpacing?.end || "mr-5"),
                  carouselItemClassName
                )}
              >
                {renderItem(item, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselGradient>

        {/* Page Numbers */}
        {withSlideNumbers && (
          <CarouselPageNumbers
            totalSlides={data.length}
            activeSlide={activeIndex + 1}
          />
        )}

        {/* Left Arrow */}
        {showLeft &&
          !leftDisabled &&
          (renderArrowLeft ? (
            renderArrowLeft({
              disabled: false,
              onClick: () => handleScrollTo(activeIndex - 1)
            })
          ) : (
            <button
              type="button"
              aria-label="Previous"
              onClick={() => handleScrollTo(activeIndex - 1)}
              className={cn(
                "cursor-pointer hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md rotate-180 scale-80",
                arrowClassName
              )}
            >
              <ChevronRight />
            </button>
          ))}

        {/* Right Arrow */}
        {showRight &&
          !rightDisabled &&
          (renderArrowRight ? (
            renderArrowRight({
              disabled: false,
              onClick: () => handleScrollTo(activeIndex + 1)
            })
          ) : (
            <button
              type="button"
              aria-label="Next"
              onClick={() => handleScrollTo(activeIndex + 1)}
              className={cn(
                "cursor-pointer hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md scale-80",
                arrowClassName
              )}
            >
              <ChevronRight />
            </button>
          ))}

        {/* Footer */}
        {footerChildren.length > 0
          ? footerChildren
          : footerProps && <Footer {...footerProps} />}
      </Carousel>
    </GenericCarouselContext.Provider>
  );
};

GenericCarousel.Tabs = Tabs;
GenericCarousel.Actions = Actions;
GenericCarousel.Footer = Footer;
GenericCarousel.TopBar = TopBar;
GenericCarousel.displayName = "GenericCarousel";

export default GenericCarousel;
