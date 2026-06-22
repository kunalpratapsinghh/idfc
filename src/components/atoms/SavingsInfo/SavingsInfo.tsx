// components/SavingsInfo.tsx

import { SafeImage, Text } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { SavingsBannerProps } from "@/server/schemas/shared";
import React from "react";

interface SavingsBannerPropsClass extends Omit<
  SavingsBannerProps,
  "valueLabel"
> {
  valueLabel?: React.ReactNode | string;
  containerClassName?: string;
  innerWrapperClassName?: string;
  preTextClassName?: string;
  valueLabelClassName?: string;
  benefitTypeClassName?: string;
  equalsIconClassName?: string;
  savingsValueClassName?: string;
  savingsSuffixClassName?: string;
  suffixHighlightValue?: string;
  suffixHighlightClassName?: string;
  suffixTail?: string;
  gradient?: string;
}

const SavingsInfo: React.FC<SavingsBannerPropsClass> = props => {
  const {
    preText,
    valueLabel,
    benefitType,
    savingsValue,
    savingsSuffix,
    fromColors,
    toColors,
    valueLabelClassName = "",
    preTextClassName = "",
    containerClassName = "",
    innerWrapperClassName = "",
    benefitTypeClassName = "",
    equalsIconClassName = "",
    savingsValueClassName = "",
    savingsSuffixClassName = "",
    suffixHighlightValue,
    suffixHighlightClassName = "",
    suffixTail = "",
    gradient
  } = props;

  const showFull = savingsValue;
  return (
    <div
      className={cn(
        "transform -skew-x-[10deg] rounded-l-lg inline-block py-2 px-2",
        containerClassName
      )}
      style={
        gradient
          ? { background: gradient }
          : {
              background: `linear-gradient(to right, ${fromColors}, ${toColors})`
            }
      }
    >
      <div
        className={cn(
          "flex items-center gap-1 skew-x-[10deg] italic",
          innerWrapperClassName
        )}
      >
        <Text
          weight="semibold"
          className={cn("text-xxs sm:text-xs", preTextClassName)}
        >
          {preText}
        </Text>
        <Text
          weight="extrabold"
          className={cn("text-sm sm:text-lg", valueLabelClassName)}
        >
          {valueLabel}
        </Text>
        {showFull && (
          <>
            <Text
              weight="semibold"
              className={cn("text-xxs sm:text-xs", benefitTypeClassName)}
            >
              {benefitType}
            </Text>
            <SafeImage
              width={24}
              height={24}
              src="/equalsRed.svg"
              alt="equals"
              className={cn(equalsIconClassName)}
            />
            <Text
              weight="extrabold"
              className={cn("text-sm sm:text-lg", savingsValueClassName)}
            >
              {savingsValue}
            </Text>
          </>
        )}
        <Text
          size="xs"
          weight="semibold"
          className={cn(
            "text-xxs sm:text-xs flex items-center gap-1",
            savingsSuffixClassName
          )}
        >
          {savingsSuffix}
          {suffixHighlightValue ? (
            <span
              className={cn(
                "font-extrabold text-sm text-yellow-400 md:text-3xl",
                suffixHighlightClassName
              )}
            >
              {suffixHighlightValue}
            </span>
          ) : null}
          {suffixTail ? <span>{suffixTail}</span> : null}
        </Text>
      </div>
    </div>
  );
};

export default SavingsInfo;
