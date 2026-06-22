import { Cache } from "@/server/cache";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  Cache.clear();
  return NextResponse.json({ message: "Ok" }, { status: 200 });
}
