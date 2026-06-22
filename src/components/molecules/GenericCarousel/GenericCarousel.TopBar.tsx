import { cn } from "@/lib/utils"; // Assuming you use `cn` utility
import { ReactNode } from "react";

interface TopBarProps {
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
}

const TopBar = ({ left, right, className }: TopBarProps) => {
  return (
    <div
      className={cn("flex items-center justify-between w-full mb-4", className)}
    >
      {left}
      {right}
    </div>
  );
};

export default TopBar;
