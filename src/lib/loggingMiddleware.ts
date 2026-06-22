export const createLoggingMiddleware = (t: any) =>
  t.middleware(({ next }: any) => next());
