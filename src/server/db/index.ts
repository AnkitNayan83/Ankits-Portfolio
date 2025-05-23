import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env";
import { type InferSelectModel } from "drizzle-orm";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });

export type BlogTable = InferSelectModel<typeof schema.blogs>;
export type CommentTable = InferSelectModel<typeof schema.comments>;
export type CommentWithUser = CommentTable & {
  user: { name: string | null; id: string; image: string | null };
};
export type ReplyTable = InferSelectModel<typeof schema.replies>;
export type ReplyWithUser = ReplyTable & {
  user: { name: string | null; id: string; image: string | null };
};
export type LikeTable = InferSelectModel<typeof schema.likes>;
