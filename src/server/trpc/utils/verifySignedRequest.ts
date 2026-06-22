// server/utils/verifySignedRequest.ts
import {
  canonicalMessage,
  computeHMACWithKey,
  verifyCsrfTokenOpaque
} from "@/utils/csrf";
import { TRPCError } from "@trpc/server";
import { timingSafeEqual } from "crypto";

// Shape of what your procedures expect for signed requests
export interface SignedRequestBase {
  csrfToken: string;
  signature: string;
  clientTs: number;
  payload: unknown; // usually string, but we keep it generic
}
export interface VerifyOptions {
  path?: string; // defaults to "/trpc"
  method?: "POST" | "GET";
}
/**
 * Reusable validator for CSRF + HMAC signed requests.
 * Throws TRPCError(UNAUTHORIZED) on any failure.
 * Returns metadata you might want to reuse.
 */
export function verifySignedRequestOrThrow(
  input: SignedRequestBase
  // options: VerifyOptions = {}
) {
  const { csrfToken, signature, clientTs, payload } = input;

  // const path = options.path ?? "/trpc";
  // const method = options.method ?? "POST";

  // 1) Required fields
  if (!csrfToken || !signature || clientTs == null || payload === undefined) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Missing signature fields"
    });
  }

  // 2) Validate CSRF token
  const tokenCheck = verifyCsrfTokenOpaque(csrfToken);
  if (!tokenCheck.ok) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: `Invalid CSRF token: ${tokenCheck.reason}`
    });
  }

  // 3) Time skew (you can add ms→sec normalization if needed)
  const now = Math.floor(Date.now() / 1000);
  const allowedSkew = 60 * 5; // 5 minutes
  if (Math.abs(clientTs - now) > allowedSkew) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Request time skew too large"
    });
  }

  // 4) Canonical message + HMAC
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);

  // Set default values for method and path
  const method = "POST";
  const path = "/trpc";

  const msg = canonicalMessage({
    method,
    path,
    body,
    clientTs
  });

  const expected = computeHMACWithKey(csrfToken, msg); // hex

  const expectedBuf = Buffer.from(expected, "hex");
  const providedBuf = Buffer.from(signature, "hex");
  if (
    expectedBuf.length !== providedBuf.length ||
    !timingSafeEqual(expectedBuf, providedBuf)
  ) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Bad signature"
    });
  }

  // If you ever want metadata in ctx, you have it here:

  return {
    tokenCheck,
    normalizedClientTs: clientTs
  };
}

import { z } from "zod";

export const SignedRequestSchema = z.object({
  csrfToken: z.string(),
  signature: z.string(),
  clientTs: z.number(),
  payload: z.string()
});
