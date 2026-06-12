import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER_CREDIT, MOCK_ACTIVE_SESSIONS, MOCK_RESULTS } from '../constants';
import { Coins, PlayCircle, AlertCircle, CheckCircle2, Calendar, ArrowRight, TrendingUp, Award, BrainCircuit, Loader2 } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const availableCredits = MOCK_USER_CREDIT.totalCredits - MOCK_USER_CREDIT.usedCredits;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Welcome back, Jane! 👋</h2>
          <p className="text-slate-500 mt-1 font-medium">Here's what's happening with your capability verifications.</p>
        </div>
        <button onClick={() => navigate('/catalog')} className="flex items-center px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/20">
          Explore New Skills <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Card 1 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group animate-fade-in-up delay-100">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Available Credits</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-display font-black text-slate-900">{availableCredits}</p>
                <span className="text-sm font-bold text-amber-500 flex items-center"><TrendingUp className="h-3 w-3 mr-1"/> +50</span>
              </div>
            </div>
            <div className="h-14 w-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center border border-amber-200/50 shadow-inner group-hover:rotate-12 transition-transform duration-300">
              <Coins className="h-7 w-7 text-amber-500" />
            </div>
          </div>
        </div>
        
        {/* Stat Card 2 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group animate-fade-in-up delay-200">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Verified Skills</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-display font-black text-slate-900">{MOCK_RESULTS.length}</p>
                <span className="text-sm font-bold text-emerald-500 flex items-center">Top 10%</span>
              </div>
            </div>
            <div className="h-14 w-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-200/50 shadow-inner group-hover:rotate-12 transition-transform duration-300">
              <Award className="h-7 w-7 text-emerald-500" />
            </div>
          </div>
        </div>

        {/* Stat Card 3 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group animate-fade-in-up delay-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100/50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Expiring Soon</p>
              <p className="text-4xl font-display font-black text-slate-900">0</p>
            </div>
            <div className="h-14 w-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center border border-slate-200/50 shadow-inner group-hover:rotate-12 transition-transform duration-300">
              <AlertCircle className="h-7 w-7 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scheduled & Active Sessions */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col animate-fade-in-up delay-400">
          <div className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center">
            <h2 className="text-xl font-display font-bold text-slate-900">Your Schedule</h2>
            <button onClick={() => navigate('/catalog')} className="text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center transition-colors">
              Browse Catalog <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="p-0 flex-1 bg-slate-50/30">
            {MOCK_ACTIVE_SESSIONS.length > 0 ? (
              <ul className="divide-y divide-slate-100">
                {MOCK_ACTIVE_SESSIONS.map(session => (
                  <li key={session.sessionId} className="p-8 bg-white hover:bg-brand-50/30 transition-colors group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-700 transition-colors">{session.skillName}</h3>
                        <div className="flex flex-wrap items-center mt-3 gap-3 text-sm text-slate-500 font-medium">
                          <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                            <Calendar className="h-4 w-4 mr-2 text-brand-500" />
                            {session.scheduledFor ? new Date(session.scheduledFor).toLocaleString([], {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'}) : 'Not Scheduled'}
                          </div>
                          
                          {/* AI Status Indicator */}
                          {session.aiGenerationStatus === 'Generating' && (
                            <div className="flex items-center bg-accent-50 px-3 py-1.5 rounded-lg text-accent-700 border border-accent-200">
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              AI Generating Pool
                            </div>
                          )}
                          {session.aiGenerationStatus === 'Ready' && (
                            <div className="flex items-center bg-emerald-50 px-3 py-1.5 rounded-lg text-emerald-700 border border-emerald-200">
                              <BrainCircuit className="h-4 w-4 mr-2" />
                              AI Pool Ready
                            </div>
                          )}
                        </div>
                      </div>
                      <button 
                        disabled={session.aiGenerationStatus !== 'Ready'}
                        onClick={() => navigate(`/exam-setup/${session.skillId}`)}
                        className={`flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl shadow-md transition-all ${
                          session.aiGenerationStatus === 'Ready' 
                            ? 'text-white bg-brand-600 hover:bg-brand-500 hover:-translate-y-0.5 shadow-brand-500/20' 
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                        }`}
                      >
                        {session.aiGenerationStatus === 'Ready' ? (
                          <><PlayCircle className="mr-2 h-5 w-5" /> Enter Waiting Room</>
                        ) : (
                          <><Lock className="mr-2 h-5 w-5" /> Locked (AI Prep)</>
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-12 text-center flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-10 w-10 text-slate-300" />
                </div>
                <p className="text-slate-500 font-medium text-lg">No exams scheduled.</p>
                <button onClick={() => navigate('/catalog')} className="mt-4 text-brand-600 font-bold hover:underline">Find a skill to verify</button>
              </div>
            )}
          </div>
        </div>

        {/* Recent Results */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col animate-fade-in-up delay-500">
          <div className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center">
            <h2 className="text-xl font-display font-bold text-slate-900">Recent Outcomes</h2>
            <button onClick={() => navigate('/history')} className="text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors">View All</button>
          </div>
          <div className="p-0 flex-1 bg-slate-50/30">
            <ul className="divide-y divide-slate-100">
              {MOCK_RESULTS.map(result => (
                <li key={result.resultId} className="p-8 bg-white hover:bg-brand-50/30 transition-colors cursor-pointer group" onClick={() => navigate(`/result/${result.resultId}`)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center border border-emerald-200/50 mr-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Award className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{result.skillName}</h3>
                        <div className="flex items-center mt-1.5 gap-3">
                          <span className="text-sm font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">Lvl {result.finalLevel}: {result.bloomLabel}</span>
                          <span className="text-sm font-bold text-brand-600">{result.finalScore}% Score</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
                        {result.gradeName}
                      </span>
                      <p className="text-xs text-slate-400 mt-2 font-medium">{new Date(result.issuedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
