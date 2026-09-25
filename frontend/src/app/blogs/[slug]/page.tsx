/* eslint-disable */
import { blogs } from "../data";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug);
  const blog = blogs.find((b) => b.slug === decodedSlug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24 max-w-3xl">
      <a href="/blogs" className="text-[#e0ac2f] hover:underline text-sm mb-8 inline-block">&larr; Back to Blog</a>
      <h1 className="text-4xl font-extrabold mb-6 text-black leading-tight">{blog.title}</h1>
      <div className="flex items-center gap-4 mb-10 border-b border-gray-200 pb-6">
        <div className="w-10 h-10 bg-[#e0ac2f] rounded-full flex items-center justify-center text-black font-bold">R</div>
        <div>
          <p className="text-black font-semibold">ProtectIP Master Team</p>
          <p className="text-gray-500 text-sm">Expert Guide</p>
        </div>
      </div>
      
      <article 
        className="prose prose-lg max-w-none text-gray-700 prose-headings:text-black prose-a:text-[#e0ac2f]"
        dangerouslySetInnerHTML={{ __html: blog!.content }}
      />
    </div>
    </div>
  );
}
