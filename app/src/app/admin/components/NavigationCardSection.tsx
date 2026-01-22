import { NavigationCard } from "./NavigationCard";

export const NavigationCardSection = () => {
  const navigationList = [
    {
      title: "Articles",
      href: "/admin/articles",
      description: "Gestion des articles",
    },
    {
      title: "Auteurs",
      href: "/admin/authors",
      description: "Gestion des auteurs",
    },
    {
      title: "Catégories",
      href: "/admin/categories",
      description: "Gestion des catégories",
    },
  ];

  return (
    <div className="grid gap-4">
      {/* Navigation Cards */}
      <div>
        <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
          Gestion
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {navigationList.map((item) => (
            <NavigationCard
              key={item.title}
              href={item.href}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};