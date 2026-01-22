import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">

      <main className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Dashboard
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/admin/articles"
            className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Articles
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Gérer les articles du site
            </p>
          </Link>

          <Link
            href="/admin/categories"
            className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Catégories
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Gérer les catégories
            </p>
          </Link>

          <Link
            href="/admin/authors"
            className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Auteurs
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Gérer les auteurs
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
