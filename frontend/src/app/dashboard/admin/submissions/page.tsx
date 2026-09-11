export default function AdminSubmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">All Submissions</h1>
          <p className="text-slate-500">View all contact, analysis, and case submissions.</p>
        </div>
      </div>
      <div className="space-y-6">
        {["Contact Messages", "Analysis Requests", "Protection Cases"].map((section) => (
          <div key={section} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4">{section}</h2>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400">
              <p>No {section.toLowerCase()} yet.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
