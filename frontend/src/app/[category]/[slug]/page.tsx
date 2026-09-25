/* eslint-disable */
import { categories } from "@/data/services";
import RemoveRequestButton from "@/app/components/RemoveRequestButton";
import ServiceIcon from "@/app/components/ServiceIcon";
import { notFound } from "next/navigation";

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;

  const category = categories.find((c) => c.slug === categorySlug);
  const service = category?.subServices.find((s) => s.slug === slug);

  if (!category || !service) return notFound();

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <main className="container py-6 sm:py-8 lg:py-12">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 sm:mb-8 text-[12px] sm:text-[13px] font-[600] text-[var(--text-muted-navy)]">
          <span className="truncate max-w-[140px] sm:max-w-none">{category.name}</span>
          <span>›</span>
          <span className="text-[var(--gold)] truncate max-w-[160px] sm:max-w-none">{service.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ===== LEFT: Blog Content ===== */}
          <article>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(217,165,43,0.1)] border border-[rgba(217,165,43,0.3)] rounded-full px-4 py-1.5 text-[12px] font-[700] text-[var(--gold)] uppercase tracking-widest mb-6">
              {category.name}
            </div>

            <h1 style={{ fontFamily: 'Poppins, sans-serif', color: '#000000', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px' }}
              className="text-[26px] sm:text-[30px] lg:text-[36px]"
            >
              {service.heading}
            </h1>

            <p style={{ fontFamily: 'Poppins, sans-serif', color: '#374151', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}
              className="sm:text-[17px]"
            >
              {service.intro}
            </p>

            {service.bodySections.map((section, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', color: '#000000', fontSize: '18px', fontWeight: 700, marginBottom: '8px', marginTop: '24px' }}>
                  {section.heading}
                </h2>
                <p style={{ fontFamily: 'Poppins, sans-serif', color: '#374151', fontSize: '14px', lineHeight: 1.8 }}>
                  {section.text}
                </p>
              </div>
            ))}

            {/* Gold-accented bullet list */}
            <div className="bg-[var(--bg-soft)] rounded-xl p-6 border-l-4 border-[var(--gold)] mt-8 mb-8">
              <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#000000', fontSize: '16px', fontWeight: 700, marginBottom: '14px' }}>
                What We Do
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
                {service.bulletPoints.map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'Poppins, sans-serif', color: '#374151', fontSize: '14px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d9a52b', flexShrink: 0, marginTop: '6px', display: 'inline-block' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <RemoveRequestButton serviceName={service.name} />
          </article>

          {/* ===== RIGHT: Icon — shown below content on mobile, sticky on desktop ===== */}
          <div className="lg:sticky lg:top-24 order-first lg:order-last">
            <ServiceIcon slug={service.slug} name={service.name} />
          </div>

        </div>
      </main>
    </div>
  );
}
