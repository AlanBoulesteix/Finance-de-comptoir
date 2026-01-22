interface Props {
  title: string;
  value: number;
  subtitle?: string;
}

export const StatCard = ({ title, value, subtitle }: Props) => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {title}
      </p>
      <p className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        {value}
      </p>
      {subtitle && (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};
