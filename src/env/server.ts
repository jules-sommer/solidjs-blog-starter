import { serverScheme } from "./schema";
import type { ZodFormattedError } from "zod";
import { z } from "zod";

const envSchema = z.object({
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  AUTH_TRUST_HOST: z.enum(["true", "false"]).transform((val: string) => {
    if (val == "true") return true;
    if (val == "false") return false;
  }),
  AUTH_URL: z.string().url(),
})

const env = envSchema.safeParse(process.env);

if (env.success === false) {
  throw new Error("Invalid environment variables");
}

export const serverEnv = env.data;
