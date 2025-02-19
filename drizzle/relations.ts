import { relations } from "drizzle-orm/relations";
import { ankitsPortfolioBlogs, ankitsPortfolioComments, ankitsPortfolioUser, ankitsPortfolioSession, ankitsPortfolioLikes, ankitsPortfolioAccount } from "./schema";

export const ankitsPortfolioCommentsRelations = relations(ankitsPortfolioComments, ({one}) => ({
	ankitsPortfolioBlog: one(ankitsPortfolioBlogs, {
		fields: [ankitsPortfolioComments.blogId],
		references: [ankitsPortfolioBlogs.id]
	}),
	ankitsPortfolioUser: one(ankitsPortfolioUser, {
		fields: [ankitsPortfolioComments.userId],
		references: [ankitsPortfolioUser.id]
	}),
}));

export const ankitsPortfolioBlogsRelations = relations(ankitsPortfolioBlogs, ({many}) => ({
	ankitsPortfolioComments: many(ankitsPortfolioComments),
	ankitsPortfolioLikes: many(ankitsPortfolioLikes),
}));

export const ankitsPortfolioUserRelations = relations(ankitsPortfolioUser, ({many}) => ({
	ankitsPortfolioComments: many(ankitsPortfolioComments),
	ankitsPortfolioSessions: many(ankitsPortfolioSession),
	ankitsPortfolioLikes: many(ankitsPortfolioLikes),
	ankitsPortfolioAccounts: many(ankitsPortfolioAccount),
}));

export const ankitsPortfolioSessionRelations = relations(ankitsPortfolioSession, ({one}) => ({
	ankitsPortfolioUser: one(ankitsPortfolioUser, {
		fields: [ankitsPortfolioSession.userId],
		references: [ankitsPortfolioUser.id]
	}),
}));

export const ankitsPortfolioLikesRelations = relations(ankitsPortfolioLikes, ({one}) => ({
	ankitsPortfolioBlog: one(ankitsPortfolioBlogs, {
		fields: [ankitsPortfolioLikes.blogId],
		references: [ankitsPortfolioBlogs.id]
	}),
	ankitsPortfolioUser: one(ankitsPortfolioUser, {
		fields: [ankitsPortfolioLikes.userId],
		references: [ankitsPortfolioUser.id]
	}),
}));

export const ankitsPortfolioAccountRelations = relations(ankitsPortfolioAccount, ({one}) => ({
	ankitsPortfolioUser: one(ankitsPortfolioUser, {
		fields: [ankitsPortfolioAccount.userId],
		references: [ankitsPortfolioUser.id]
	}),
}));