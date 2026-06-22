import { cookies } from "next/headers";

export interface Context {
  access_token?: string;
  gadu?: string;
  sid?: string;
  pzu?: string;
  crayon_uuid?: string;
  crayon_hashed_mobile?: string;
  randomTrackId?: string;
  clientIp?: string | null;
  referer?: string;
  requestId?: string;
  traceId?: string;
  cookiesStore?: Awaited<ReturnType<typeof cookies>>;
}
