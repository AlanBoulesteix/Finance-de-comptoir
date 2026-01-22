import { NavigationCardSection } from "./components/NavigationCardSection";
import { StatisticsSection } from "./components/StatisticsSection";

export default async function AdminDashboard() {



  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="mx-auto max-w-7xl px-6 py-8 gap-8">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Dashboard
        </h2>
        <div className="flex flex-col gap-8">
          <NavigationCardSection />
          <StatisticsSection />
        </div>
      </main>
    </div >
  );
}
