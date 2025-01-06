import zod from "zod";

const envSchema = zod.object({
  AUTH_SECRET: zod.string().min(1).default("auth-secret"),
  AUTH_TRUST_HOST: zod.string().min(1).default("true"),
  DATABASE_URL: zod.string().min(1),
  AUTH_GOOGLE_ID: zod.string().min(1),
  AUTH_GOOGLE_SECRET: zod.string().min(1),
});

export const env = envSchema.parse(process.env);
