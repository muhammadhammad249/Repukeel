import Link from "next/link";
import { categories } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return {};

  const canonicalUrl = canonicalFor(`/${category.slug}`);

  return {
    title: category.name,
    description: `Explore our professional ${category.name} solutions. RepuKeel provides specialized services for ${category.name.toLowerCase()}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.name} | RepuKeel`,
      description: `Explore our professional ${category.name} solutions. RepuKeel provides specialized services for ${category.name.toLowerCase()}.`,
      url: canonicalUrl,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return notFound();

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <div className="bg-[#0a152e] rounded-lg px-6 py-5 flex items-center gap-3 mb-8">
        <span className="text-2xl" aria-hidden="true">{category.icon}</span>
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

      {category.slug === 'content-removal' && (
        <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Featured Guide</h2>
            <p className="text-sm text-gray-600">
              Dealing with an online booking photo or arrest record? Read our walkthrough on{" "}
              <Link
                href="/blogs/remove-mugshots-from-google"
                className="text-[#20409a] font-semibold hover:underline"
              >
                how to remove mugshots from Google
              </Link>{" "}
              and the internet.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-200">
            <p className="text-sm text-gray-600">
              Dealing with unauthorized subscription media? Read our walkthrough on{" "}
              <Link
                href="/blogs/remove-leaked-onlyfans-content"
                className="text-[#20409a] font-semibold hover:underline"
              >
                how to remove leaked OnlyFans content
              </Link>.
            </p>
          </div>
        </div>
      )}

      {category.slug === 'dating-reputation' && (
        <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Featured guide</h2>
          <p className="text-sm text-gray-600">
            Found in an AWDTSG group? Read our walkthrough on{" "}
            <Link
              href="/blogs/remove-awdtsg"
              className="text-[#20409a] font-semibold hover:underline"
            >
              how to remove AWDTSG posts
            </Link>{" "}
            and what your options are.
          </p>
        </div>
      )}
    </div>
  );
}
