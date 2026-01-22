import Link from "next/link";

export default function NewArticlePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/admin" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Admin
            </Link>
            <span>/</span>
            <Link href="/admin/articles" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Articles
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-50">Nouveau</span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Nouvel article
        </h1>

        <form className="space-y-6">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="text"
                  className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                  placeholder="Titre de l'article..."
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                  Contenu
                </label>
                <textarea
                  id="text"
                  name="text"
                  rows={6}
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                  placeholder="Contenu de l'article..."
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                  Type
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                  placeholder="Type d'article"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="public"
                  name="public"
                  className="h-4 w-4 rounded border-zinc-300 dark:border-zinc-700"
                />
                <label
                  htmlFor="public"
                  className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                  Public
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Créer l&apos;article
            </button>
            <Link
              href="/admin/articles"
              className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              Annuler
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
