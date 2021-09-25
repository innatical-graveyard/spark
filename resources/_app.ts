import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import routes from "./_routes";

export type Context = {};

export const app = routes;
export type App = typeof app;

export const handler = createHTTPHandler({
  router: app,
  createContext() {
    return {};
  },
});
