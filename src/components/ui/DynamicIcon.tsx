import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import React from "react";

type LucideIconName = Exclude<keyof typeof LucideIcons, "createLucideIcon">;

type DynamicIconProps = {
  /**
   * Lucide icon name (e.g., "Plane", "Search", "Heart").
   */
  name: LucideIconName;
  /**
   * Optional test id for UI automation.
   */
  testId?: string;
} & LucideProps;

const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  testId,
  ...props
}) => {
  if (!name) {
    return null;
  }

  const LucideIcon = LucideIcons[name] as React.FC<LucideProps> | undefined;

  if (!LucideIcon) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(`[DynamicIcon] Unknown icon name: ${String(name)}`);
    }
    return null;
  }

  return <LucideIcon {...props} data-testid={testId} />;
};

export type { DynamicIconProps, LucideIconName };
export default DynamicIcon;
