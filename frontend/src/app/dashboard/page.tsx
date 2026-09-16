'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    // Mock fetching cases
    setCases([
      { id: 'CAS-1029', status: 'In Progress', date: 'Sep 15, 2026', title: 'Copyright Infringement on Example.com' },
      { id: 'CAS-1030', status: 'Resolved', date: 'Sep 12, 2026', title: 'Impersonator on Instagram' }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">Client Dashboard</h1>
        <button onClick={handleLogout} className="text-sm font-semibold text-red-600 hover:text-red-700">Logout</button>
      </div>
      <p className="text-slate-500 mb-8">Manage and track your protection cases.</p>
      
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cases</h2>
          <Link href="/dashboard/new-case" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
            + New Case
          </Link>
        </div>
        
        {cases.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 font-semibold text-slate-600 text-sm">Case ID</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 text-sm">Title</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 text-sm">Date Filed</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-slate-900">{c.id}</td>
                    <td className="py-4 px-4 text-sm text-slate-600">{c.title}</td>
                    <td className="py-4 px-4 text-sm text-slate-500">{c.date}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        c.status === 'Resolved' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center text-slate-400">
            <p className="text-lg font-medium">No cases submitted yet.</p>
            <p className="text-sm mt-2">Submit your first case to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
