import { HandlerContext, Handlers } from "$fresh/server.ts";
import { calendar as schedule } from "../../components/dataset.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return new Response(JSON.stringify(schedule));
  },
};
