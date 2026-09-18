import Link from "next/link";
import { categories } from "@/data/services";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return notFound();

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="bg-[#0a152e] rounded-lg px-6 py-5 flex items-center gap-3 mb-8">
        <span className="text-2xl">{category.icon}</span>
        <h1 className="text-white text-2xl font-bold">{category.name}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {category.subServices.map((service) => (
          <Link
            key={service.slug}
            href={`/${category.slug}/${service.slug}`}
            className="bg-[#f0f4f8] hover:bg-[#e2e8f0] border border-[var(--border-light)] transition rounded-xl px-6 py-5 font-bold text-gray-900 shadow-sm hover:shadow-md"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
