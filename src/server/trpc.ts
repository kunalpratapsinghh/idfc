import { createLoggingMiddleware } from "@/lib/loggingMiddleware";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { Context } from "./utils";
export const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return {
      ...shape,
      message: shape.message, // Preserve the error message
      data: {
        code: shape.data.code,
        httpStatus: shape.data.httpStatus
      }
    };
  }
});

const loggingMiddleware = createLoggingMiddleware(t);

export const publicProcedure = t.procedure.use(loggingMiddleware);
// export const protectedProcedure = t.procedure.use(verifySignature);
export const { router, createCallerFactory } = t;
