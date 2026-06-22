import crypto from "crypto";

const SECRET = process.env.SECRET_CSRF_KEY!;
// if (!SECRET) throw new Error("SECRET_CSRF_KEY must be set in .env.local");

export const TOKEN_TTL_SECONDS = 60 * 60; // 1 hour token life (adjust)

const base64url = (b: Buffer) =>
  b
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const fromBase64url = (s: string) =>
  Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/") + "==", "base64");

export function issueCsrfToken() {
  const nonce = crypto.randomBytes(16).toString("hex");
  const ts = Math.floor(Date.now() / 1000);
  const payload = `${nonce}:${ts}`;
  const mac = crypto.createHmac("sha256", SECRET).update(payload).digest();
  const token = `${nonce}:${ts}:${base64url(mac)}`;
  return token;
}
export function verifyCsrfTokenOpaque(token: string) {
  try {
    const parts = token.split(":");
    if (parts.length !== 3) return { ok: false, reason: "invalid-format" };
    const [nonce, tsStr, macB64] = parts;
    const ts = Number(tsStr);
    if (!nonce || !ts || Number.isNaN(ts))
      return { ok: false, reason: "invalid-parts" };
    const payload = `${nonce}:${ts}`;
    const expectedMac = crypto
      .createHmac("sha256", SECRET)
      .update(payload)
      .digest();
    const providedMac = fromBase64url(macB64);
    // constant-time compare
    if (!crypto.timingSafeEqual(expectedMac, providedMac)) {
      return { ok: false, reason: "bad-mac" };
    }
    const now = Math.floor(Date.now() / 1000);
    if (ts + TOKEN_TTL_SECONDS < now) {
      return { ok: false, reason: "expired" };
    }
    // valid
    return { ok: true, nonce, ts };
  } catch (e) {
    console.log(e);
    return { ok: false, reason: "exception" };
  }
}
export function computeHMACWithKey(key: string | Buffer, message: string) {
  return crypto
    .createHmac("sha256", Buffer.from(key))
    .update(message)
    .digest("hex");
}
// Helper to build canonical message you sign on client & server (deterministic)
export function canonicalMessage({
  method,
  path,
  body,
  clientTs
}: {
  method: string;
  path: string;
  body: string; // already JSON-stringified
  clientTs: number;
}) {
  // Keep deterministic order & newline separators
  return `${method.toUpperCase()}\n${path}\n${clientTs}\n${body}`;
}
