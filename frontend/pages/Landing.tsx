import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, BrainCircuit, ArrowRight, Lock as LockIcon, Award, Zap, Clock, Cpu, CheckCircle2, BarChart3, BookOpen } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockAdaptiveData = [
  { question: 'Q1', difficulty: 20, bloom: 'Remember' },
  { question: 'Q2', difficulty: 40, bloom: 'Understand' },
  { question: 'Q3', difficulty: 35, bloom: 'Understand' },
  { question: 'Q4', difficulty: 60, bloom: 'Apply' },
  { question: 'Q5', difficulty: 80, bloom: 'Analyze' },
  { question: 'Q6', difficulty: 75, bloom: 'Analyze' },
  { question: 'Q7', difficulty: 95, bloom: 'Evaluate' },
];

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050b14] font-sans selection:bg-brand-500/30 selection:text-brand-100 overflow-hidden relative">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/20 mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-600/15 mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/15 mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="glass-dark sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
              <div className="bg-gradient-to-br from-brand-400 to-brand-600 p-2.5 rounded-xl mr-3 shadow-[0_0_20px_rgba(14,165,233,0.4)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-300">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-extrabold text-white tracking-tight">SkillAuth<span className="text-brand-400">™</span></span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#engine" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">AI Engine</a>
              <a href="#workflow" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">How it Works</a>
              <a href="#outcomes" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">LER Outcomes</a>
            </div>
            <div className="flex space-x-4 items-center">
              <button onClick={() => navigate('/verify/sample')} className="hidden sm:block text-slate-300 hover:text-white px-3 py-2 text-sm font-semibold transition-colors">
                Verify Credential
              </button>
              <button onClick={() => navigate('/dashboard')} className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-slate-900 group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900">
                  Candidate Portal
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 font-semibold text-sm mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.15)]">
              <Cpu className="h-4 w-4 mr-2 text-brand-400 animate-pulse" />
              Powered by Generative AI & Bloom's Taxonomy
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight leading-[1.1] animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            Zero-Day Exploit Prevention <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-400 to-brand-300 animate-pulse-slow">
              for Skill Verification.
            </span>
          </h1>
          
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '300ms' }}>
            SkillAuth™ doesn't use static question banks. Our AI generates a completely unique, adaptive assessment 24 hours before your scheduled time, ensuring absolute integrity and true capability measurement.
          </p>
          
          <div className="mt-12 max-w-md mx-auto sm:flex sm:justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
            <button onClick={() => navigate('/catalog')} className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] transition-all duration-300 hover:-translate-y-1">
              Explore Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="mt-4 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full text-white font-bold text-lg bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300">
              View Sample LER
            </button>
          </div>
        </div>
      </div>

      {/* Graphical Selling Point: The Adaptive Curve */}
      <div id="engine" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white flex items-center">
                <BarChart3 className="h-8 w-8 mr-3 text-brand-400" />
                Real-Time Adaptive Difficulty
              </h2>
              <p className="text-slate-400 mt-2">The engine adjusts to the candidate's cognitive level instantly.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center text-sm text-slate-300 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                <div className="w-3 h-3 rounded-full bg-brand-500 mr-2"></div> Difficulty
              </div>
            </div>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockAdaptiveData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDifficulty" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="question" stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#38bdf8' }}
                />
                <Area type="monotone" dataKey="difficulty" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorDifficulty)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* The 24h Workflow Section */}
      <div id="workflow" className="py-32 relative z-10 bg-[#0a0f1c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2 block">The Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Why Schedule 24 Hours in Advance?</h2>
            <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">To guarantee absolute integrity, our AI requires time to synthesize a completely unique assessment tailored to current industry standards.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-600 shadow-lg">
                <BookOpen className="h-8 w-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">1. Select Skill</h3>
              <p className="text-sm text-slate-400">Choose from our catalog of enterprise-grade capability domains.</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-brand-900/50 rounded-2xl flex items-center justify-center mb-6 border border-brand-700 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <Clock className="h-8 w-8 text-brand-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">2. Schedule</h3>
              <p className="text-sm text-slate-400">Book your proctored slot. Must be at least 24 hours in the future.</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-accent-900/30 backdrop-blur-md border border-accent-500/50 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <div className="absolute -top-3 -right-3 bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">AI ACTIVE</div>
              <div className="w-16 h-16 mx-auto bg-accent-800/50 rounded-2xl flex items-center justify-center mb-6 border border-accent-500 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                <BrainCircuit className="h-8 w-8 text-accent-300" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">3. AI Generation</h3>
              <p className="text-sm text-slate-300">Our engine synthesizes a unique, zero-day question pool just for you.</p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 bg-emerald-900/20 backdrop-blur-md border border-emerald-700/50 p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-emerald-800/50 rounded-2xl flex items-center justify-center mb-6 border border-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <ShieldCheck className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">4. Verification</h3>
              <p className="text-sm text-slate-400">Take the adaptive exam under strict AI proctoring conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
