import { MOBILE_HEADER_VISIBLE_PAGES } from "@/config";
import { generateCSP } from "@/lib/cspConfig";
import { getPageTransparency } from "@/lib/pageTransparency";
import { NextRequest, NextResponse } from "next/server";

const IS_MAIN_DOMAIN = process.env.NEXT_PUBLIC_ISMAIN === "true";
const IS_SESSION_ISMAIN = process.env.NEXT_PUBLIC_SESSION_ISMAIN === "true";

export async function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const sid = searchParams.get("sid");
  if (
    process.env.NEXT_PUBLIC_ENV === "production" &&
    (pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|json)$/) ||
      pathname.includes("undefined"))
  ) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/|\/$/g, "") ?? "";
  let path = new URL(req.url).pathname.replace(/^\//gi, "");
  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length);
    if (path.startsWith("/")) path = path.slice(1);
  }
  const [first, second] = path.split("/");
  const pagePath = first === "not-found" ? "not-found" : first || second;
  const isHomePage = getPageTransparency(req.nextUrl.pathname);

  const paramRaw = first || "";
  const { csp, nonce } = generateCSP();
  const setCustomHeaders = (response: NextResponse) => {
    if (pagePath) response.headers.set("x-page-path", pagePath);
    if (isHomePage) response.headers.set("x-home-page", "true");
    response.headers.set("card-type-param", paramRaw);
    if (MOBILE_HEADER_VISIBLE_PAGES.includes(path)) {
      response.headers.set("x-mobile-header-visible", "true");
    }
    response.headers.set("Content-Security-Policy", csp);
    response.headers.set("x-nonce", nonce);
    response.headers.set("x-page-full-path", req.nextUrl.pathname);
  };

  if (sid && IS_MAIN_DOMAIN && IS_SESSION_ISMAIN) {
    searchParams.delete("sid");
    const response = NextResponse.redirect(req.nextUrl);
    const isHttps = req.nextUrl.protocol === "https:";
    response.cookies.set("sid", sid, { secure: isHttps });
    setCustomHeaders(response);
    return response;
  }

  const requestHeaders = new Headers(req.headers);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });

  setCustomHeaders(res);
  return res;
}
// Apply middleware to all pages except login & public routes
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|login|public|stencil-assets|landing-page|api/access-log).*)"
  ]
};
