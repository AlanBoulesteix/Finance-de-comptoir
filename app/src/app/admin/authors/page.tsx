import Link from "next/link";

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/admin" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Admin
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-50">Auteurs</span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Auteurs
          </h1>
          <button
            type="button"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Nouvel auteur
          </button>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="p-6 text-center text-zinc-600 dark:text-zinc-400">
            Aucun auteur pour le moment
          </div>
        </div>
      </main>
    </div>
  );
}
