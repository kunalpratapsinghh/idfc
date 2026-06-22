import { cn } from "@/lib/utils";
import React from "react";

interface CarouselGradientProps {
  children: React.ReactNode;
  gradient?: "white" | "primary" | "none";
  showLeft?: boolean;
  showRight?: boolean;
}

const CarouselGradient = ({
  children,
  gradient = "white",
  showLeft = false,
  showRight = false
}: CarouselGradientProps) => {
  if (gradient === "none") {
    return <>{children}</>;
  }

  const isWhite = gradient === "white";

  const leftGradientStyle = isWhite
    ? {
        background:
          "linear-gradient(90deg, #E9EEF5 0%, rgba(233, 238, 245, 0.00) 58.17%)"
      }
    : {
        background: "linear-gradient(90deg, var(--color-primary), transparent)"
      };

  const rightGradientStyle = isWhite
    ? {
        background:
          "linear-gradient(270deg, #E9EEF5 0%, rgba(233, 238, 245, 0.00) 58.17%)"
      }
    : {
        background: "linear-gradient(270deg, var(--color-primary), transparent)"
      };

  return (
    <div className="relative">
      {/* Left Gradient */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-4 md:w-20 z-10 pointer-events-none transition-opacity duration-300 ease-in-out",
          showLeft ? "opacity-100" : "opacity-0"
        )}
        style={leftGradientStyle}
      />

      {/* Content */}
      {children}

      {/* Right Gradient */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-4 md:w-20 z-10 pointer-events-none transition-opacity duration-300 ease-in-out",
          showRight ? "opacity-100" : "opacity-0"
        )}
        style={rightGradientStyle}
      />
    </div>
  );
};

export default CarouselGradient;
