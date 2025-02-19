import { pgTable, integer, varchar, text, timestamp, foreignKey, index, primaryKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const ankitsPortfolioBlogs = pgTable("ankits_portfolio_blogs", {
	id: integer("id").primaryKey().generatedByDefaultAsIdentity({ name: "ankits_portfolio_blogs_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: varchar("name", { length: 256 }),
	content: text("content"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
});

export const ankitsPortfolioComments = pgTable("ankits_portfolio_comments", {
	id: integer("id").primaryKey().generatedByDefaultAsIdentity({ name: "ankits_portfolio_comments_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	blogId: integer("blog_id").notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	content: text("content").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
},
(table) => {
	return {
		ankitsPortfolioCommentsBlogIdAnkitsPortfolioBlogsIdFk: foreignKey({
			columns: [table.blogId],
			foreignColumns: [ankitsPortfolioBlogs.id],
			name: "ankits_portfolio_comments_blog_id_ankits_portfolio_blogs_id_fk"
		}).onDelete("cascade"),
		ankitsPortfolioCommentsUserIdAnkitsPortfolioUserIdFk: foreignKey({
			columns: [table.userId],
			foreignColumns: [ankitsPortfolioUser.id],
			name: "ankits_portfolio_comments_user_id_ankits_portfolio_user_id_fk"
		}).onDelete("cascade"),
	}
});

export const ankitsPortfolioSession = pgTable("ankits_portfolio_session", {
	sessionToken: varchar("session_token", { length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	expires: timestamp("expires", { withTimezone: true, mode: 'string' }).notNull(),
},
(table) => {
	return {
		sessionUserIdIdx: index("session_user_id_idx").using("btree", table.userId.asc().nullsLast()),
		ankitsPortfolioSessionUserIdAnkitsPortfolioUserIdFk: foreignKey({
			columns: [table.userId],
			foreignColumns: [ankitsPortfolioUser.id],
			name: "ankits_portfolio_session_user_id_ankits_portfolio_user_id_fk"
		}),
	}
});

export const ankitsPortfolioUser = pgTable("ankits_portfolio_user", {
	id: varchar("id", { length: 255 }).primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull(),
	role: varchar("role", { length: 255 }).default('user'),
	emailVerified: timestamp("email_verified", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	image: varchar("image", { length: 255 }),
});

export const ankitsPortfolioLikes = pgTable("ankits_portfolio_likes", {
	blogId: integer("blog_id").notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
},
(table) => {
	return {
		ankitsPortfolioLikesBlogIdAnkitsPortfolioBlogsIdFk: foreignKey({
			columns: [table.blogId],
			foreignColumns: [ankitsPortfolioBlogs.id],
			name: "ankits_portfolio_likes_blog_id_ankits_portfolio_blogs_id_fk"
		}).onDelete("cascade"),
		ankitsPortfolioLikesUserIdAnkitsPortfolioUserIdFk: foreignKey({
			columns: [table.userId],
			foreignColumns: [ankitsPortfolioUser.id],
			name: "ankits_portfolio_likes_user_id_ankits_portfolio_user_id_fk"
		}).onDelete("cascade"),
		ankitsPortfolioLikesBlogIdUserIdPk: primaryKey({ columns: [table.blogId, table.userId], name: "ankits_portfolio_likes_blog_id_user_id_pk"}),
	}
});

export const ankitsPortfolioVerificationToken = pgTable("ankits_portfolio_verification_token", {
	identifier: varchar("identifier", { length: 255 }).notNull(),
	token: varchar("token", { length: 255 }).notNull(),
	expires: timestamp("expires", { withTimezone: true, mode: 'string' }).notNull(),
},
(table) => {
	return {
		ankitsPortfolioVerificationTokenIdentifierTokenPk: primaryKey({ columns: [table.identifier, table.token], name: "ankits_portfolio_verification_token_identifier_token_pk"}),
	}
});

export const ankitsPortfolioAccount = pgTable("ankits_portfolio_account", {
	userId: varchar("user_id", { length: 255 }).notNull(),
	type: varchar("type", { length: 255 }).notNull(),
	provider: varchar("provider", { length: 255 }).notNull(),
	providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: varchar("token_type", { length: 255 }),
	scope: varchar("scope", { length: 255 }),
	idToken: text("id_token"),
	sessionState: varchar("session_state", { length: 255 }),
},
(table) => {
	return {
		accountUserIdIdx: index("account_user_id_idx").using("btree", table.userId.asc().nullsLast()),
		ankitsPortfolioAccountUserIdAnkitsPortfolioUserIdFk: foreignKey({
			columns: [table.userId],
			foreignColumns: [ankitsPortfolioUser.id],
			name: "ankits_portfolio_account_user_id_ankits_portfolio_user_id_fk"
		}),
		ankitsPortfolioAccountProviderProviderAccountIdPk: primaryKey({ columns: [table.provider, table.providerAccountId], name: "ankits_portfolio_account_provider_provider_account_id_pk"}),
	}
});