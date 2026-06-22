import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGenericCarousel } from "./GenericCarouselContext";

export const Tabs = <T,>({
  sections,
  getLabel,
  variant = "pills",
  className
}: {
  sections: T[];
  getLabel: (item: T) => string;
  variant?: "pills" | "underline" | "ghost";
  className?: string;
}) => {
  const { activeIndex, scrollTo } = useGenericCarousel();

  const getClass = (active: boolean) => {
    switch (variant) {
      case "underline":
        return active
          ? "border-b-2 border-primary text-primary font-medium"
          : "text-muted-foreground hover:text-primary";
      case "ghost":
        return active ? "text-primary underline" : "text-muted-foreground";
      case "pills":
      default:
        return active
          ? "bg-blue-100 border-blue-700 text-blue-700 font-semibold"
          : "border-blue-200 text-blue-400";
    }
  };

  return (
    <div className={cn("flex gap-2 flex-wrap", className)}>
      {sections.map((item, index) => (
        <Button
          key={index}
          variant="outline"
          onClick={() => scrollTo(index)}
          className={`px-4 py-1 text-sm rounded-full border ${getClass(index === activeIndex)}`}
        >
          {getLabel(item)}
        </Button>
      ))}
    </div>
  );
};
