import { cn } from "@/lib/utils";
import * as React from "react";

/**
 * Font weight options mapped from Tailwind config
 */
export const TEXT_WEIGHTS = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
} as const;
/**
 * Font weight
 *
 * - "normal" → 400
 * - "medium" → 500
 * - "semibold" → 600
 * - "bold" → 700
 * - "extrabold" → 800
 */
export type TextWeight = keyof typeof TEXT_WEIGHTS;
export type TextSize =
  | "xxs"
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";
export type TextColor =
  | "default"
  | "muted"
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "neutral500"
  | "label"
  | "brandColor";
export type ElementTag = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4";
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  size?: TextSize;
  as?: ElementTag;
  weight?: TextWeight;
  color?: TextColor;
}

interface HeadingProps extends TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Text({
  className,
  children,
  size = "base",
  as: Component = "p",
  weight = "normal",
  color = "default",
  ...props
}: TypographyProps) {
  const sizeClasses = {
    xxs: "text-xxs",
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl"
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold"
  };

  const colorClasses = {
    default: "",
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
    black: "text-black",
    neutral500: "text-[#6B7280]",
    label: "text-[#787878]",
    brandColor: "text-[#1C3FCA]"
  };

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
export function Heading({
  className,
  children,
  as: Component = "h1",
  ...props
}: HeadingProps) {
  const headingClasses = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight leading-9"
  };

  return (
    <Component
      className={cn(
        headingClasses[Component as keyof typeof headingClasses],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
export function Blockquote({ className, children, ...props }: TypographyProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      role="blockquote"
      {...props}
    >
      {children}
    </blockquote>
  );
}
export function InlineCode({ className, children, ...props }: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
export function Pre({ className, children, ...props }: TypographyProps) {
  return (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-black py-4 px-6 font-mono text-sm text-white",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  );
}
export function Table({ className, children, ...props }: TypographyProps) {
  return (
    <div className="my-6 w-full overflow-auto">
      <table className={cn("w-full", className)} role="table" {...props}>
        {children}
      </table>
    </div>
  );
}
export function THead({ className, children, ...props }: TypographyProps) {
  return (
    <thead
      className={cn("[&_tr]:border-b", className)}
      role="rowgroup"
      {...props}
    >
      {children}
    </thead>
  );
}
export function TBody({ className, children, ...props }: TypographyProps) {
  return (
    <tbody className={className} role="rowgroup" {...props}>
      {children}
    </tbody>
  );
}
export function TR({ className, children, ...props }: TypographyProps) {
  return (
    <tr
      className={cn("border-b transition-colors hover:bg-muted/50", className)}
      role="row"
      {...props}
    >
      {children}
    </tr>
  );
}
export function TH({ className, children, ...props }: TypographyProps) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
        className
      )}
      role="columnheader"
      {...props}
    >
      {children}
    </th>
  );
}
export function TD({ className, children, ...props }: TypographyProps) {
  return (
    <td className={cn("p-4 align-middle", className)} role="cell" {...props}>
      {children}
    </td>
  );
}
export function Caption({ className, children, ...props }: TypographyProps) {
  return (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </caption>
  );
}
