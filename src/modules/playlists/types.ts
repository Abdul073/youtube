import { inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/trpc/routers/_app";

export type playlistGetManyOutput = 
inferRouterOutputs<AppRouter>["playlists"]["getMany"]