import { blogs } from "./data";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">Insights</span>
        <h1 className="text-5xl font-extrabold mb-6 text-white">Latest from Our Blog</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Expert guides on copyright law, DMCA, brand protection, and digital rights.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="block group">
            <div className="bg-[#16223c] border border-[#22304d] rounded-2xl p-8 h-full transition-transform transform hover:-translate-y-2 hover:border-[#e0ac2f] shadow-lg">
              <h2 className="text-xl font-bold text-white mb-4 group-hover:text-[#e0ac2f] transition-colors line-clamp-3">
                {blog.title}
              </h2>
              <p className="text-slate-400 line-clamp-4 mb-6 text-sm">
                {blog.meta}
              </p>
              <span className="text-[#e0ac2f] text-sm font-semibold flex items-center">
                Read Article &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
