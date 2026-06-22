"use client";
import { hideCommonFooter } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export const CommonFooter = ({ ssrHtml }: { ssrHtml: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const hidden = hideCommonFooter(pathname);

  return (
    <div
      className={hidden ? "hidden sm:block" : ""}
      ref={wrapperRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: ssrHtml }}
    />
  );
};
export default CommonFooter;
