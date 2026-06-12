import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_RESULTS } from '../constants';
import { Award, ExternalLink, Download, ShieldCheck } from 'lucide-react';

export const Certificates: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-display font-extrabold text-slate-900 flex items-center">
            <Award className="h-8 w-8 mr-3 text-emerald-600" />
            Digital Credentials
          </h1>
          <p className="text-slate-500 text-base mt-2 font-medium">Manage and share your verified Learning and Employment Records (LER).</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {MOCK_RESULTS.map((result, index) => (
          <div 
            key={result.resultId} 
            className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col relative overflow-hidden group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-brand-500"></div>
            
            <div className="p-8 flex-1 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 p-2 shadow-inner mb-6 relative group-hover:scale-105 transition-transform duration-500">
                <img src={result.badges[0]?.imageUrl || 'https://picsum.photos/200'} alt="Badge" className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" />
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2 leading-tight">{result.skillName}</h3>
              <p className="text-sm font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-lg border border-brand-100 mb-4">
                {result.bloomLabel} (Level {result.finalLevel})
              </p>
              
              <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100 mt-auto">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Issued On</p>
                <p className="text-sm font-bold text-slate-700">{new Date(result.issuedAt).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex gap-3">
              <button 
                onClick={() => navigate(`/verify/${result.certificateCode}`)}
                className="flex-1 flex items-center justify-center px-4 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-brand-600 transition-colors shadow-md shadow-slate-900/10"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Verify
              </button>
              <button className="flex items-center justify-center px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors">
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
