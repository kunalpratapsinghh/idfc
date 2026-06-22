import { TRANSPARENT_PATH_RULES } from "@/config";

type TransparentPathRuleKey = keyof typeof TRANSPARENT_PATH_RULES;

export const getPageTransparency = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean); // remove empty parts
  const [first, second] = parts;
  const subpath = "/" + (parts.slice(1).join("/") || "");

  const rule =
    TRANSPARENT_PATH_RULES[first as TransparentPathRuleKey] ||
    TRANSPARENT_PATH_RULES[second as TransparentPathRuleKey];
  if (!rule) return false;

  // check explicit exclusion first
  if (rule.exclude.some((ex: string) => subpath.startsWith(ex))) return false;
  if (
    rule.include.some((inc: string) =>
      inc === "/*" ? true : subpath.startsWith(inc)
    )
  )
    return true;

  return false;
};
