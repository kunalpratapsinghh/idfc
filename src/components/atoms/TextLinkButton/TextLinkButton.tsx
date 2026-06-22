import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";

interface TextLinkButtonProps {
  label: string | null;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  icon?: boolean;
  theme?: "light" | "dark";
}

const TextLinkButton: React.FC<TextLinkButtonProps> = ({
  label = "View all",
  onClick,
  className = "",
  ariaLabel,
  theme = "light" // default to light to maintain old behavior
}) => {
  // Determine color classes based on theme
  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white" : "border-black";
  const hoverText = isDark ? "hover:text-white" : "hover:text-black";
  const hoverBg = "hover:bg-transparent";

  const baseClass = cn(
    textColor,
    borderColor,
    hoverText,
    hoverBg,
    "bg-transparent text-sm",
    "flex justify-center items-center",
    " sm:font-semibold sm:flex sm:items-center sm:hover:no-underline",
    isDark ? "sm:text-white" : "text-link",
    className
  );

  const content = (
    <>
      <span className="">{label}</span>
      <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
    </>
  );
  return (
    label && (
      <Button
        variant="link"
        onClick={onClick}
        aria-label={ariaLabel || label || undefined}
        className={baseClass}
      >
        {content}
      </Button>
    )
  );
};

export default TextLinkButton;
