import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_RESULTS } from '../constants';
import { History as HistoryIcon, ChevronRight, Award, ShieldCheck, Calendar } from 'lucide-react';

export const HistoryView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-display font-extrabold text-slate-900 flex items-center">
            <HistoryIcon className="h-8 w-8 mr-3 text-indigo-600" />
            Evaluation History
          </h1>
          <p className="text-slate-500 text-base mt-2 font-medium">Review your past capability assessments and outcomes.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/60">
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Assessment</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Score & Level</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Integrity</th>
                <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_RESULTS.map((result) => (
                <tr key={result.resultId} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => navigate(`/result/${result.resultId}`)}>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center border border-brand-100 mr-4 group-hover:scale-110 transition-transform">
                        <Award className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-base font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{result.skillName}</p>
                        <p className="text-xs text-slate-500 font-mono mt-1">ID: {result.resultId}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center text-sm font-medium text-slate-600">
                      <Calendar className="h-4 w-4 mr-2 text-slate-400" />
                      {new Date(result.issuedAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-lg font-display font-black text-slate-900">{result.finalScore}%</span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">Lvl {result.finalLevel}: {result.bloomLabel}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <ShieldCheck className="h-5 w-5 text-emerald-500 mr-2" />
                      <span className="text-sm font-bold text-slate-700">{result.integrityScore}/100</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-all shadow-sm">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
