export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-slate-500 mb-8">Manage all submissions, blog posts, and case studies.</p>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[{ label: "New Contacts", count: "0" }, { label: "Analysis Requests", count: "0" }, { label: "Active Cases", count: "0" }].map((item) => (
          <div key={item.label} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-blue-600">{item.count}</p>
            <p className="text-slate-600 font-medium mt-1">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="/dashboard/admin/submissions" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm">View Submissions</a>
        <a href="/dashboard/admin/blogs" className="border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors text-sm">Manage Blog</a>
      </div>
    </div>
  );
}
