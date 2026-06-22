import { ConsentWrapper, SafeImage } from "@/components/atoms";

interface AppleProductCardProps {
  name: string;
  price: string;
  image: string;
  colors?: string[];
  url: string;
}

export default function AppleProductCard({
  name,
  price,
  image,
  colors = [],
  url
}: AppleProductCardProps) {
  return (
    <ConsentWrapper href={url} forceNavigateToR360>
      <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-black/[0.06] w-full">
        {/* Image area */}
        <div className="relative h-36 md:h-80 bg-[#f5f5f7] rounded-t-2xl flex items-center justify-center">
          <SafeImage
            src={image}
            alt={name}
            fill
            className="object-contain p-4 md:p-8"
          />
        </div>

        {/* Color dots */}
        {colors.length > 0 && (
          <div className="flex items-center justify-center gap-1.5 pt-3 md:pt-4">
            {colors.map((color, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-black/10"
                style={{ background: color }}
              />
            ))}
          </div>
        )}

        {/* Product info */}
        <div className="px-3 pt-2.5 pb-4 md:px-4 md:pt-3 md:pb-5 text-center">
          <h3 className="text-[13px] md:text-sm font-semibold text-[#1d1d1f] mb-1.5 md:mb-2 leading-snug line-clamp-2">
            {name}
          </h3>
          <p className="text-[13px] md:text-sm font-bold text-[#1d1d1f]">
            {price}
          </p>
        </div>
      </div>
    </ConsentWrapper>
  );
}
