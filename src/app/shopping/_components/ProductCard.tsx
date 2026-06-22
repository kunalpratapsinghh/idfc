import { SafeImage } from "@/components/atoms";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div
      className="flex flex-col items-center gap-3 md:gap-6 rounded-2xl md:rounded-[24px] px-5 py-5 md:px-10 md:py-8 w-full"
      style={{
        background: "#f5f6fb",
        border: "0.5px solid #d0ddfc"
      }}
    >
      {/* Image — single container, no nested wrapper */}
      <div className="relative w-full h-[110px] md:h-[160px]">
        <SafeImage src={image} alt={name} fill className="object-contain" />
      </div>

      {/* Name + Price */}
      <div className="flex flex-col gap-1 md:gap-1.5 items-center text-black w-full">
        <p className="text-[13px] md:text-[14px] font-medium leading-5 text-center line-clamp-2">
          {name}
        </p>
        <p className="text-[14px] md:text-[16px] font-normal leading-6 text-center line-clamp-1">
          {price} (Incl. of all taxes)
        </p>
      </div>
    </div>
  );
}
