import { type SolidAuthConfig } from "@solid-auth/base";
import Github from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { serverEnv } from "~/env/server";

declare module "@auth/core/types" {
  export interface Session {
    user?: DefaultSession["user"];
  }
}

export const authOptions: SolidAuthConfig = {
  providers: [
    Github({
      clientId: serverEnv.GITHUB_ID,
      clientSecret: serverEnv.GITHUB_SECRET,
    }),
  ],
  debug: true,
};
