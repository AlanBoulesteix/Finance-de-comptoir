"use server";

import { prisma } from "@/lib/prisma";
import type { MonthlyData } from "./components/ArticlesPerMonthChart";
import type { CategoryData } from "./components/CategoryDistributionChart";
import type { RecentArticle } from "./components/RecentArticles";

export async function getDashboardStats() {
  const [totalArticles, publishedArticles, totalAuthors, totalCategories] =
    await Promise.all([
      prisma.article.count({
        where: { deleteAt: null },
      }),
      prisma.article.count({
        where: { deleteAt: null, public: true },
      }),
      prisma.author.count({
        where: { deleteAt: null },
      }),
      prisma.category.count(),
    ]);

  return {
    totalArticles,
    publishedArticles,
    totalAuthors,
    totalCategories,
  };
}

export async function getArticlesPerMonth(): Promise<MonthlyData[]> {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
  sixMonthsAgo.setDate(1);
  sixMonthsAgo.setHours(0, 0, 0, 0);

  const articles = await prisma.article.findMany({
    where: {
      deleteAt: null,
      createdAt: { gte: sixMonthsAgo },
    },
    select: { createdAt: true },
  });

  const monthNames = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sep", "Oct", "Nov", "Déc"
  ];

  const monthCounts = new Map<string, number>();

  // Initialize last 6 months
  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const key = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    monthCounts.set(key, 0);
  }

  // Count articles per month
  articles.forEach((article) => {
    const date = new Date(article.createdAt);
    const key = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    if (monthCounts.has(key)) {
      monthCounts.set(key, (monthCounts.get(key) || 0) + 1);
    }
  });

  return Array.from(monthCounts.entries()).map(([month, count]) => ({
    month,
    count,
  }));
}

export async function getCategoryDistribution(): Promise<CategoryData[]> {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { articles: true },
      },
    },
  });

  return categories
    .map((category) => ({
      name: category.name,
      count: category._count.articles,
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);
}

export async function getRecentArticles(): Promise<RecentArticle[]> {
  const articles = await prisma.article.findMany({
    where: { deleteAt: null },
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      author: {
        select: { firstName: true, LastName: true },
      },
    },
  });

  return articles.map((article) => ({
    id: article.id,
    title: article.title,
    authorName: `${article.author.firstName} ${article.author.LastName}`,
    public: article.public,
    createdAt: article.createdAt,
  }));
}
