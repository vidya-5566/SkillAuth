import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_EXAM_QUESTIONS, MOCK_CATALOG } from '../constants';
import { BloomLevelNames } from '../types';
import { Shield, Clock, AlertTriangle, BrainCircuit, CheckCircle2, Lock } from 'lucide-react';

export const ExamPlayer: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const skill = MOCK_CATALOG.find(s => s.skillId === skillId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = MOCK_EXAM_QUESTIONS[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (currentQuestionIndex < MOCK_EXAM_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/result/res_991');
      }, 3000);
    }
  };

  if (!skill || !question) return <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center text-white">Loading Secure Environment...</div>;

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-[#0a0f1c] flex flex-col items-center justify-center animate-fade-in text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-600/20 mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-10">
            <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 m-auto w-16 h-16 bg-brand-900/50 rounded-full flex items-center justify-center border border-brand-500/30">
              <BrainCircuit className="h-8 w-8 text-brand-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl font-display font-extrabold text-white mb-4">Analyzing Capability...</h2>
          <p className="text-xl text-slate-400 font-medium max-w-md text-center">Processing Bloom's Taxonomy vectors and finalizing Integrity Score.</p>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestionIndex) / MOCK_EXAM_QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-brand-500/30 selection:text-brand-100 flex flex-col animate-fade-in">
      {/* Secure Header */}
      <header className="bg-[#0f172a] border-b border-slate-800 px-8 py-4 flex justify-between items-center shrink-0 shadow-md relative z-20">
        <div className="flex items-center">
          <div className="bg-red-500/10 p-2 rounded-lg mr-4 border border-red-500/20">
            <Lock className="h-5 w-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-white tracking-tight">{skill.skillName}</h1>
            <p className="text-xs text-slate-400 font-mono mt-0.5">SESSION ID: {skillId.toUpperCase()}-882 • SECURE BROWSER ACTIVE</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center px-4 py-2 rounded-xl bg-emerald-900/20 border border-emerald-800/30">
            <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse mr-3 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
            <Shield className="h-4 w-4 text-emerald-400 mr-2" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Proctoring Active</span>
          </div>
          
          <div className="flex items-center px-5 py-2 rounded-xl bg-slate-800/50 border border-slate-700">
            <Clock className="h-5 w-5 mr-3 text-brand-400" />
            <span className="text-xl font-mono font-bold text-white tracking-wider">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-4xl relative z-10">
          {/* Progress Bar */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 backdrop-blur-sm">
              <BrainCircuit className="h-5 w-5 text-brand-400 mr-3" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Target Level</span>
                <span className="text-sm font-bold text-white">{BloomLevelNames[question.bloomLevel]}</span>
              </div>
            </div>
            <div className="flex items-center flex-1 ml-8">
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mr-4 border border-slate-700">
                <div className="h-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 ease-out relative" style={{ width: `${progress}%` }}>
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30"></div>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                Q {currentQuestionIndex + 1} / {MOCK_EXAM_QUESTIONS.length}
              </span>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-[#1e293b]/80 backdrop-blur-xl rounded-[2rem] border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-10 md:p-14">
              <h2 className="text-2xl md:text-3xl font-display font-medium text-white leading-relaxed mb-12">
                {question.text}
              </h2>

              <div className="space-y-4">
                {question.options?.map((option, idx) => {
                  const letters = ['A', 'B', 'C', 'D'];
                  const isSelected = selectedOption === option.id;
                  return (
                    <label 
                      key={option.id}
                      className={`flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                        isSelected 
                          ? 'border-brand-500 bg-brand-900/30 shadow-[0_0_20px_rgba(14,165,233,0.15)]' 
                          : 'border-slate-700 hover:border-slate-500 hover:bg-slate-800/50'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500 rounded-r-full shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                      )}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg mr-6 transition-colors ${
                        isSelected ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300'
                      }`}>
                        {letters[idx]}
                      </div>
                      <input 
                        type="radio" 
                        name="question_option" 
                        value={option.id}
                        checked={isSelected}
                        onChange={() => setSelectedOption(option.id)}
                        className="sr-only"
                      />
                      <span className={`text-lg md:text-xl font-medium ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {option.text}
                      </span>
                      
                      {isSelected && (
                        <div className="ml-auto pl-4 animate-fade-in">
                          <CheckCircle2 className="h-6 w-6 text-brand-400" />
                        </div>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
            
            <div className="px-10 py-6 bg-[#0f172a] border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center text-sm font-bold text-amber-500 bg-amber-900/20 px-5 py-3 rounded-xl border border-amber-800/50">
                <AlertTriangle className="h-5 w-5 mr-3 text-amber-500" />
                Navigating away will terminate the session.
              </div>
              <button 
                disabled={!selectedOption}
                onClick={handleNext}
                className={`w-full sm:w-auto px-12 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center ${
                  selectedOption 
                    ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:-translate-y-1' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {currentQuestionIndex === MOCK_EXAM_QUESTIONS.length - 1 ? 'Submit Evaluation' : 'Confirm & Next'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
