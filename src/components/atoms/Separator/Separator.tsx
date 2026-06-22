interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className = "" }: SeparatorProps) => {
  return <div className={`w-px bg-gray-300 ${className}`}></div>;
};
export type { SeparatorProps };
