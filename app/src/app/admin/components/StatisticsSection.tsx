import { getDashboardStats, getArticlesPerMonth, getCategoryDistribution, getRecentArticles } from "../actions";
import { ArticlesPerMonthChart } from "./ArticlesPerMonthChart"
import { CategoryDistributionChart } from "./CategoryDistributionChart"
import { RecentArticles } from "./RecentArticles"
import { StatCard } from "./StatCard"

export const StatisticsSection = async () => {
  const [stats, articlesPerMonth, categoryDistribution, recentArticles] =
    await Promise.all([
      getDashboardStats(),
      getArticlesPerMonth(),
      getCategoryDistribution(),
      getRecentArticles(),
    ]);

  return (
    <div className="flex flex-col gap-4" >
      <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
        Statistiques
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total articles"
          value={stats.totalArticles}
          subtitle={`${stats.publishedArticles} publiés`}
        />
        <StatCard
          title="Articles publiés"
          value={stats.publishedArticles}
        />
        <StatCard title="Auteurs" value={stats.totalAuthors} />
        <StatCard title="Catégories" value={stats.totalCategories} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <ArticlesPerMonthChart data={articlesPerMonth} />
        </div>
        <div className="min-w-0">
          <CategoryDistributionChart data={categoryDistribution} />
        </div>
      </div>
      <div>
        <RecentArticles articles={recentArticles} />
      </div>
    </div >
  );
};