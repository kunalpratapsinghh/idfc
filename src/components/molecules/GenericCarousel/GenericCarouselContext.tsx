"use client";

import { CarouselApi } from "@/components/ui/carousel";
import { createContext, useContext } from "react";

interface GenericCarouselContextValue {
  activeIndex: number;
  scrollTo: (index: number) => void;
  carouselApi?: CarouselApi;
}

export const GenericCarouselContext =
  createContext<GenericCarouselContextValue | null>(null);
export const useGenericCarousel = () => {
  const ctx = useContext(GenericCarouselContext);
  if (!ctx) {
    throw new Error("useGenericCarousel must be used within GenericCarousel");
  }
  return ctx;
};
