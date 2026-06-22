import { cn } from "@/lib/utils";
import React from "react";
import { Text, type TypographyProps } from "./Typography";

/**
 * GradientText component renders text with a gradient fill.
 * It wraps the existing Text component and applies CSS gradient text via Tailwind.
 */
export const GradientText: React.FC<TypographyProps> = ({
  className,
  ...props
}) => {
  return (
    <Text {...props} className={cn("text-gradient max-w-fit", className)} />
  );
};
