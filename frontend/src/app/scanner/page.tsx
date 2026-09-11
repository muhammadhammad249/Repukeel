"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [activeTab, setActiveTab] = useState("Brand / Business");

  return (
    <div className="container mx-auto px-4 pt-12 pb-16 max-w-3xl">
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">Free Tool</span>
        <h1 className="text-4xl font-extrabold mb-4">AI Brand Scanner</h1>
        <p className="text-lg text-slate-600">Generate targeted search queries to find unauthorized use of your brand or content online.</p>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {["Brand / Business", "Text / Content", "Image Search"].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`p-4 rounded-xl border-2 text-center transition-all font-semibold ${
                activeTab === tab 
                  ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm" 
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="space-y-4">
          {activeTab === "Brand / Business" && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Brand / Business Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. ProtectIP Master" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Website <span className="text-slate-400 font-normal">(optional — will be excluded from searches)</span></label>
                <input type="url" placeholder="https://yourdomain.com" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Extra Keywords <span className="text-slate-400 font-normal">(optional, comma-separated)</span></label>
                <input type="text" placeholder="e.g. logo, trademark, copyright" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </>
          )}

          {activeTab === "Text / Content" && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Text Snippet / Content <span className="text-red-500">*</span></label>
                <textarea rows={4} placeholder="Paste a unique sentence or paragraph from your content..." className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Original URL <span className="text-slate-400 font-normal">(optional)</span></label>
                <input type="url" placeholder="https://yourdomain.com/article" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </>
          )}

          {activeTab === "Image Search" && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image URL <span className="text-red-500">*</span></label>
                <input type="url" placeholder="https://yourdomain.com/image.jpg" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Image Description <span className="text-slate-400 font-normal">(optional)</span></label>
                <input type="text" placeholder="Describe the image..." className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </>
          )}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-colors mt-4">
            Run AI Scanner
          </button>
        </div>
        <p className="text-xs text-slate-400 mt-6 text-center">
          ⚠️ Disclaimer: This tool only builds search engine query links. It does not scrape search engines, does not automatically verify infringement, and does not provide legal advice.
        </p>
      </div>
    </div>
  );
}
