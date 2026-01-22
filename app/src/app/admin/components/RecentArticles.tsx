import Link from "next/link";

export interface RecentArticle {
  id: string;
  title: string;
  authorName: string;
  public: boolean;
  createdAt: Date;
}

interface Props {
  articles: RecentArticle[];
}

export const RecentArticles = ({ articles }: Props) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
        Articles récents
      </h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/admin/articles/${article.id}`}
            className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-zinc-900 dark:text-zinc-50">
                {article.title}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {article.authorName} • {formatDate(article.createdAt)}
              </p>
            </div>
            <span
              className={`ml-4 shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
                article.public
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              }`}
            >
              {article.public ? "Publié" : "Brouillon"}
            </span>
          </Link>
        ))}
        {articles.length === 0 && (
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Aucun article
          </p>
        )}
      </div>
    </div>
  );
};
