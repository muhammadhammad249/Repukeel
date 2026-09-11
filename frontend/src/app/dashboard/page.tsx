export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-2">Client Dashboard</h1>
      <p className="text-slate-500 mb-8">Manage and track your protection cases.</p>
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-6">Your Cases</h2>
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center text-slate-400">
          <p className="text-lg font-medium">No cases submitted yet.</p>
          <p className="text-sm mt-2">Submit your first case to get started.</p>
        </div>
      </div>
      <a href="/dashboard/new-case" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors inline-block">
        + Submit New Case
      </a>
    </div>
  );
}
