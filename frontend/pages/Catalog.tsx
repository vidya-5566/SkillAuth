import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CATALOG } from '../constants';
import { Search, Filter, ChevronRight, Coins, Sparkles } from 'lucide-react';

export const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCatalog = MOCK_CATALOG.filter(skill => 
    skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.domainName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-display font-extrabold text-slate-900">Skill Catalog</h1>
          <p className="text-slate-500 text-base mt-2 font-medium">Browse industry-standard capability verifications.</p>
        </div>
        <div className="flex w-full md:w-auto space-x-3 relative z-10">
          <div className="relative flex-1 md:w-80">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 sm:text-sm transition-all shadow-inner"
              placeholder="Search skills or domains..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center px-5 py-3 border border-slate-200 shadow-sm text-sm font-bold rounded-2xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all">
            <Filter className="h-4 w-4 mr-2 text-slate-500" />
            Filters
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredCatalog.map((skill, index) => (
          <div 
            key={skill.skillId} 
            className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden" 
            onClick={() => navigate(`/skill/${skill.skillId}`)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/60">
                  {skill.domainName}
                </span>
                <div className="flex flex-col items-end">
                  <span className="flex items-center text-lg font-display font-black text-slate-900">
                    ${skill.priceUsd}
                  </span>
                  <span className="flex items-center text-xs font-bold text-amber-600 mt-1 bg-amber-50 px-2 py-1 rounded-md border border-amber-100">
                    <Coins className="h-3 w-3 mr-1" />
                    {skill.creditCost} cr
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">{skill.skillName}</h3>
              <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed font-medium">{skill.description}</p>
            </div>
            
            <div className="px-8 py-5 border-t border-slate-100 bg-slate-50/50 group-hover:bg-brand-50/50 transition-colors flex items-center justify-between">
              <div className="flex items-center text-sm font-bold text-brand-600">
                <Sparkles className="h-4 w-4 mr-2 text-brand-400" />
                View Syllabus
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-brand-600 group-hover:border-brand-600 transition-colors shadow-sm">
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
