import React from 'react';
import Link from 'next/link';
import { categoriesData } from './servicesData';

interface Props {
  activeCatId: string;
  setActiveCatId: (id: string) => void;
  onLinkClick?: () => void;
}

export default function ServicesMenuLayout({ activeCatId, setActiveCatId, onLinkClick }: Props) {
  const activeCategory = categoriesData.find(c => c.id === activeCatId) || categoriesData[0];

  const handleLinkClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      {/* Left Sidebar Tabs */}
      <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-2">
        {categoriesData.map(cat => {
          const isActive = activeCatId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCatId(cat.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-[700] text-[14px] transition-all relative ${
                isActive 
                  ? 'bg-white text-[var(--text-heading)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] z-10' 
                  : 'bg-transparent text-[var(--text-body)] hover:bg-[rgba(255,255,255,0.5)]'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-[#f8fafc] flex items-center justify-center border border-[var(--border-light)] text-[15px]">
                {cat.icon}
              </div>
              <span>{cat.label}</span>
              {/* Active Notch */}
              {isActive && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-r border-[rgba(0,0,0,0.02)]"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Right Main Content */}
      <div className="flex-1 bg-white rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative z-0">
        <h3 className="text-[13px] font-[800] text-blue-700 uppercase tracking-widest mb-4">
          Solutions for {activeCategory.label}
        </h3>
        
        <div className="w-full bg-[#20409a] rounded-xl p-4 mb-6 flex items-center gap-3 text-white shadow-lg">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-lg">
            {activeCategory.icon}
          </div>
          <h2 className="text-[18px] font-[700]">{activeCategory.label}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCategory.solutions.map((sol, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className="bg-[#f8f9fc] hover:bg-[#eff2f9] transition-colors rounded-xl p-4 font-[700] text-[14px] text-[var(--text-heading)] flex items-center justify-between group border border-[rgba(0,0,0,0.02)] shadow-sm"
              >
                <span>{sol.title}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              
              {/* Nested Sub-items (like Google Review Removal) */}
              {sol.subItems && (
                <div className="flex flex-col gap-3 pl-8 border-l-2 border-[#e2e8f0] ml-4">
                  {sol.subItems.map((sub, j) => (
                    <Link 
                      key={j}
                      href="/contact"
                      onClick={handleLinkClick}
                      className="bg-[#f8f9fc] hover:bg-[#eff2f9] transition-colors rounded-xl p-3 font-[600] text-[13px] text-[var(--text-body)] flex items-center justify-between group shadow-sm border border-[rgba(0,0,0,0.02)]"
                    >
                      <span>{sub}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
