/**
 * logSanitizer.ts
 * Deep-clones an object and redacts sensitive fields before logging.
 * Add field names to REDACTED_KEYS to extend coverage.
 */

const REDACTED_KEYS = new Set([
  // Auth / tokens
  "password",
  "passwd",
  "pass",
  "secret",
  "token",
  "accessToken",
  "access_token",
  "refreshToken",
  "refresh_token",
  "idToken",
  "id_token",
  "apiKey",
  "api_key",
  "authorization",
  "Authorization",
  "cookie",
  "Cookie",
  "sessionId",
  "session_id",
  "csrfToken",
  "csrf",
  "_gadu",
  "gadu",
  // Payment / card
  "cardNumber",
  "card_number",
  "cvv",
  "cvc",
  "pin",
  "otp",
  "lastfourdigit",
  "last4digit",
  "last4Digit",
  "last_four_digit",
  // PII
  "mobile",
  "phone",
  "phoneNumber",
  "phone_number",
  "email",
  "dob",
  "aadhaar",
  "pan",
  "ssn",
  "passport",
  // Encryption payloads
  "encryptedPayload",
  "encrypted_payload",
  "burrito"
]);

const REDACTED_PATTERNS: RegExp[] = [
  /^\d{10,16}$/, // bare phone or card numbers
  /^[A-Z]{5}\d{4}[A-Z]$/i // PAN card
];

const PLACEHOLDER = "[REDACTED]";
const MAX_DEPTH = 8;

export function sanitize(value: unknown, depth = 0): unknown {
  if (depth > MAX_DEPTH) return "[MaxDepth]";

  if (value === null || value === undefined) return value;

  if (typeof value === "string") {
    for (const re of REDACTED_PATTERNS) {
      if (re.test(value.trim())) return PLACEHOLDER;
    }
    return value;
  }

  if (typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return value.map(item => sanitize(item, depth + 1));
  }

  const result: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    if (REDACTED_KEYS.has(k)) {
      result[k] = PLACEHOLDER;
    } else {
      result[k] = sanitize(v, depth + 1);
    }
  }
  return result;
}
/** Safe JSON.stringify — never throws, truncates giant payloads. */
export function safeStringify(value: unknown, maxLen = 8_000): string {
  try {
    const str = JSON.stringify(sanitize(value));
    return str.length > maxLen ? str.slice(0, maxLen) + "…[truncated]" : str;
  } catch {
    return String(value).slice(0, 512);
  }
}
