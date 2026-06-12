import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_RESULTS } from '../constants';
import { BloomLevelNames } from '../types';
import { Award, ShieldCheck, Download, ChevronLeft, FileText, CheckCircle2, Share2, Sparkles, BrainCircuit, BarChart3 } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

export const ResultView: React.FC = () => {
  const { resultId } = useParams<{ resultId: string }>();
  const navigate = useNavigate();
  const result = MOCK_RESULTS.find(r => r.resultId === resultId);

  if (!result) return <div>Result not found</div>;

  const chartData = result.levelBreakdown.map(lb => ({
    subject: BloomLevelNames[lb.level],
    Score: lb.score,
    fullMark: lb.max,
  }));

  const COLORS = ['#94a3b8', '#3b82f6', '#10b981', '#f59e0b', '#f97316', '#8b5cf6'];

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-16 animate-fade-in-up">
      <button onClick={() => navigate('/dashboard')} className="flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 w-fit">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Dashboard
      </button>

      {/* Top Summary Card - Premium Certificate Look */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-[0_20px_50px_rgb(0,0,0,0.05)] overflow-hidden relative">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] rounded-full bg-gradient-to-bl from-brand-100/50 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[80%] rounded-full bg-gradient-to-tr from-indigo-100/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="p-10 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 mb-6 shadow-sm">
              <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Officially Verified Outcome
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">{result.skillName}</h1>
            <p className="text-xl text-slate-500 font-medium flex items-center justify-center lg:justify-start">
              Issued on {new Date(result.issuedAt).toLocaleDateString([], {year: 'numeric', month: 'long', day: 'numeric'})}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-xl">
            <div className="text-center">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Final Score</p>
              <div className="text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-600 to-indigo-600">
                {result.finalScore}<span className="text-4xl text-slate-300">%</span>
              </div>
            </div>
            <div className="h-24 w-px bg-slate-200 hidden sm:block"></div>
            <div className="w-full h-px bg-slate-200 sm:hidden"></div>
            <div className="text-center">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Grade</p>
              <div className="text-4xl font-display font-black text-slate-900">{result.gradeName}</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/80 border-t border-slate-100 relative z-10 backdrop-blur-md">
          <div className="p-8 flex flex-col items-center justify-center text-center group">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Demonstrated Level</span>
            <span className="text-3xl font-display font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">{result.bloomLabel}</span>
            <span className="text-sm text-slate-500 mt-2 font-bold bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">Bloom's Level {result.finalLevel}</span>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center group">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Integrity Score</span>
            <div className="flex items-center bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm group-hover:border-emerald-300 transition-colors">
              <ShieldCheck className="h-8 w-8 text-emerald-500 mr-3" />
              <span className="text-3xl font-display font-extrabold text-slate-900">{result.integrityScore}</span>
              <span className="text-xl text-slate-400 font-bold ml-1">/100</span>
            </div>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Actions</span>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <button onClick={() => navigate(`/verify/${result.certificateCode}`)} className="flex-1 flex items-center justify-center px-5 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-slate-900/20 hover:-translate-y-0.5">
                <Award className="mr-2 h-5 w-5" /> View Cert
              </button>
              <button className="flex-1 flex items-center justify-center px-5 py-3 bg-white border-2 border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                <Share2 className="mr-2 h-5 w-5" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Badges & LER Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Digital Badge */}
        <div className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-500"></div>
          <h3 className="text-xl font-display font-bold text-slate-900 mb-8 w-full text-left flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-amber-500" /> Earned Badge
          </h3>
          
          {result.badges.map(badge => (
            <div key={badge.id} className="flex flex-col items-center w-full">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 p-3 shadow-inner mb-8 relative z-10 border border-slate-200 group-hover:scale-105 transition-transform duration-500">
                  <img src={badge.imageUrl} alt={badge.name} className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg" />
                </div>
              </div>
              <h4 className="text-2xl font-display font-extrabold text-slate-900">{badge.name}</h4>
              <p className="text-sm text-slate-500 mt-2 font-bold bg-slate-100 px-3 py-1 rounded-md">Issued: {new Date(badge.issuedDate).toLocaleDateString()}</p>
              <button className="mt-8 w-full py-3 bg-white border-2 border-brand-100 text-brand-600 font-bold text-sm rounded-xl flex items-center justify-center hover:bg-brand-50 transition-colors">
                <Download className="h-5 w-5 mr-2" /> Download Asset
              </button>
            </div>
          ))}
        </div>

        {/* Learning and Employment Record (LER) */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-indigo-500"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h3 className="text-xl font-display font-bold text-slate-900 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-brand-600" />
              Learning & Employment Record (LER)
            </h3>
            <span className="text-xs font-mono font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg shadow-sm">JSON-LD Ready</span>
          </div>
          
          <div className="space-y-4">
            {result.ler.map((record, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
                <div>
                  <p className="text-xs font-mono font-bold text-brand-600 mb-2 bg-brand-50 inline-block px-2 py-0.5 rounded border border-brand-100">{record.competencyId}</p>
                  <h4 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-700 transition-colors">{record.competencyName}</h4>
                  <p className="text-sm text-slate-500 mt-1 font-medium flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-1 text-slate-400" /> {record.verificationMethod}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-white border-2 border-slate-200 text-slate-800 shadow-sm group-hover:border-brand-300 transition-colors">
                    {record.achievementLevel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Radar Chart */}
        <div className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-8 flex items-center">
            <BrainCircuit className="h-5 w-5 mr-3 text-brand-600" /> Cognitive Profile
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 13, fontWeight: 700, fontFamily: 'Outfit' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="Score" stroke="#0ea5e9" strokeWidth={3} fill="#0ea5e9" fillOpacity={0.2} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', fontWeight: 'bold', fontFamily: 'Outfit' }} 
                  itemStyle={{ color: '#0ea5e9' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Breakdown */}
        <div className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-8 flex items-center">
            <BarChart3 className="h-5 w-5 mr-3 text-brand-600" /> Bloom's Level Breakdown
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="subject" type="category" axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 13, fontWeight: 700, fontFamily: 'Outfit' }} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold', fontFamily: 'Outfit' }} 
                />
                <Bar dataKey="Score" radius={[0, 8, 8, 0]} barSize={28}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
