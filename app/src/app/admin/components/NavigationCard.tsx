import Link from "next/link"

interface Props {
  href: string;
  title: string;
  description: string;
}

export const NavigationCard = ({
  href,
  title,
  description
}: Props) => {
  return (
    <Link
      href={href}
      className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </Link>
  )
}