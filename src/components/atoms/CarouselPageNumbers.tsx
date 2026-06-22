import { Text } from "@/components/atoms";

type CarouselPageNumbersProps = {
  totalSlides?: number;
  activeSlide?: number;
  /**
   * Optional test id for UI automation.
   */
  testId?: string;
};

const CarouselPageNumbers = ({
  totalSlides = 0,
  activeSlide = 0,
  testId
}: CarouselPageNumbersProps) => {
  return (
    <div
      className="flex items-center gap-2 justify-center mt-7"
      data-testid={testId}
    >
      <span className="text-gray-200">&#9679;</span>
      <div className="rounded-full bg-white shadow-lg px-2.5 py-0.5 border border-gray-200">
        <Text size="xs" className="text-black">
          {activeSlide}/{totalSlides}
        </Text>
      </div>
      <span className="text-gray-200">&#9679;</span>
    </div>
  );
};

export default CarouselPageNumbers;
