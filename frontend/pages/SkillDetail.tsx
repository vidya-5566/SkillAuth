import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CATALOG } from '../constants';
import { BrainCircuit, CheckCircle2, Clock, ShieldCheck, ArrowRight, BookOpen, Layers, Zap, Coins, Award } from 'lucide-react';

export const SkillDetail: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const skill = MOCK_CATALOG.find(s => s.skillId === skillId);

  if (!skill) return <div className="p-8 text-center text-slate-500">Skill not found</div>;

  const bloomLevels = [
    { level: 6, name: 'Create', desc: 'Design, assemble, construct, conjecture, develop, formulate.', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    { level: 5, name: 'Evaluate', desc: 'Appraise, argue, defend, judge, select, support, value.', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    { level: 4, name: 'Analyze', desc: 'Appraise, compare, contrast, criticize, differentiate, discriminate.', color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    { level: 3, name: 'Apply', desc: 'Choose, demonstrate, dramatize, employ, illustrate, interpret.', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    { level: 2, name: 'Understand', desc: 'Classify, describe, discuss, explain, identify, locate, recognize.', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    { level: 1, name: 'Remember', desc: 'Define, duplicate, list, memorize, recall, repeat, reproduce.', color: 'from-slate-500 to-slate-600', bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 animate-fade-in-up">
      {/* Hero Section */}
      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
        <div className="bg-[#0a0f1c] p-10 md:p-16 text-white relative overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] rounded-full bg-brand-600/20 mix-blend-screen filter blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] left-[10%] w-[40%] h-[80%] rounded-full bg-indigo-600/20 mix-blend-screen filter blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white/10 text-brand-300 border border-white/10 mb-6 backdrop-blur-md">
              <Zap className="w-3 h-3 mr-1.5" /> {skill.domainName}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">{skill.skillName}</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-medium">
              {skill.description}
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <button 
                onClick={() => navigate(`/checkout/${skill.skillId}`)}
                className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1 flex items-center group"
              >
                Enroll & Schedule
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center shadow-inner">
                <span className="text-3xl font-display font-black text-white">${skill.priceUsd}</span>
                <span className="mx-4 text-white/20 h-8 w-px bg-white/20"></span>
                <span className="text-sm font-bold text-brand-300 flex items-center">
                  <Coins className="w-4 h-4 mr-1.5" /> {skill.creditCost} Credits
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
          <div className="p-8 flex items-center group">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 border border-brand-100">
              <Clock className="h-7 w-7 text-brand-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</p>
              <p className="text-xl font-display font-bold text-slate-900">60 Minutes</p>
            </div>
          </div>
          <div className="p-8 flex items-center group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 border border-indigo-100">
              <ShieldCheck className="h-7 w-7 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Proctoring</p>
              <p className="text-xl font-display font-bold text-slate-900">AI Monitored</p>
            </div>
          </div>
          <div className="p-8 flex items-center group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 border border-emerald-100">
              <Layers className="h-7 w-7 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Format</p>
              <p className="text-xl font-display font-bold text-slate-900">Adaptive MCQ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Bloom Engine */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mr-4 border border-brand-200">
                <BrainCircuit className="h-6 w-6 text-brand-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900">The Bloom Engine</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
              This assessment utilizes our proprietary Adaptive Capability Verification Framework (ACVF). Instead of a static pass/fail, the engine dynamically adjusts question difficulty across the 6 cognitive levels of Bloom's Taxonomy to pinpoint your exact capability.
            </p>
            
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {bloomLevels.map((b, idx) => (
                <div key={b.level} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${b.color} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                      L{b.level}
                    </div>
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl border ${b.border} ${b.bg} shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1`}>
                    <h4 className={`text-lg font-display font-bold ${b.text} mb-1`}>{b.name}</h4>
                    <p className="text-sm text-slate-600 font-medium">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Syllabus */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-28">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mr-3 border border-slate-200">
                <BookOpen className="h-5 w-5 text-slate-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-900">Syllabus</h2>
            </div>
            <ul className="space-y-5">
              {skill.syllabus.map((topic, idx) => (
                <li key={idx} className="flex items-start group">
                  <div className="mt-0.5 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center border border-green-200 group-hover:bg-green-500 group-hover:border-green-500 transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 font-semibold leading-snug">{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="bg-brand-50 rounded-xl p-4 border border-brand-100 mb-6">
                <p className="text-sm text-brand-800 font-medium flex items-start">
                  <Award className="h-5 w-5 mr-2 flex-shrink-0 text-brand-600" />
                  Upon completion, receive a verifiable LER and digital badge.
                </p>
              </div>
              <button 
                onClick={() => navigate(`/checkout/${skill.skillId}`)}
                className="w-full py-4 bg-slate-900 hover:bg-brand-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-slate-900/20 hover:shadow-brand-500/30 hover:-translate-y-0.5"
              >
                Proceed to Scheduling
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
