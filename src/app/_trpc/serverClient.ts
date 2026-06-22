import { createCaller } from "@/server";

export const serverClient = () =>
  createCaller(async () => {
    return {
    };
  });
export const robotsClient = () =>
  createCaller({
    access_token: undefined,
    gadu: undefined,
    sid: undefined,
    pzu: undefined,
    crayon_uuid: undefined,
    crayon_hashed_mobile: undefined,
    randomTrackId: undefined,
    clientIp: undefined,
    referer: undefined,
    traceId: undefined
  });
