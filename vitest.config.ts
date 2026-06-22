import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true,
    restoreMocks: true,
    workspace: [
      {
        test: {
          name: "unit",
          include: ["src/**/*.{test,spec}.{ts,tsx}"],
          environment: "node"
        }
      }
    ]
  }
});
