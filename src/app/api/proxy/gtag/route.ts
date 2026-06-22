import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const target = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`;
  const res = await fetch(target, {
    headers: {
      "User-Agent": req.headers.get("user-agent") || "",
      "Accept-Encoding": "gzip"
    }
  });
  // Forward response but rewrite headers
  const body = await res.arrayBuffer();
  const response = new NextResponse(body, {
    status: res.status
  });
  response.headers.set(
    "Content-Type",
    res.headers.get("Content-Type") || "application/javascript"
  );
  response.headers.set("Cache-Control", "public, max-age=3600, immutable");

  return response;
}
