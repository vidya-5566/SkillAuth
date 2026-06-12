import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CATALOG, MOCK_USER_CREDIT } from '../constants';
import { Calendar as CalendarIcon, CreditCard, Coins, ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, BrainCircuit, Info } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const skill = MOCK_CATALOG.find(s => s.skillId === skillId);
  
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'credits'>('credits');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!skill) return <div>Skill not found</div>;

  const availableCredits = MOCK_USER_CREDIT.totalCredits - MOCK_USER_CREDIT.usedCredits;
  const hasEnoughCredits = availableCredits >= skill.creditCost;

  // Generate dates: Today (disabled), Tomorrow (valid), +2 days (valid), +3 days (valid)
  const now = new Date();
  const dates = [
    { date: new Date(now.getTime() + 2 * 3600000).toISOString(), label: 'Today (Too Soon)', disabled: true }, // 2 hours from now
    { date: new Date(now.getTime() + 26 * 3600000).toISOString(), label: 'Tomorrow', disabled: false }, // 26 hours from now
    { date: new Date(now.getTime() + 50 * 3600000).toISOString(), label: '+2 Days', disabled: false },
    { date: new Date(now.getTime() + 74 * 3600000).toISOString(), label: '+3 Days', disabled: false },
  ];

  const handleConfirm = () => {
    if (!selectedDate) {
      alert("Please select a date and time.");
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto mt-12 animate-fade-in-up">
        <div className="bg-white p-12 rounded-[2.5rem] border border-slate-200/60 shadow-[0_20px_50px_rgb(0,0,0,0.05)] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-accent-500"></div>
          
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center border-4 border-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            <div className="w-16 h-1 bg-slate-200 rounded-full relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full bg-brand-400 w-full animate-shimmer"></div>
            </div>
            <div className="w-20 h-20 bg-accent-50 rounded-full flex items-center justify-center border-4 border-accent-100 relative">
              <BrainCircuit className="h-10 w-10 text-accent-500 animate-pulse" />
              <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">ACTIVE</span>
            </div>
          </div>

          <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-4">Exam Scheduled!</h1>
          <p className="text-lg text-slate-600 mb-6 font-medium leading-relaxed">
            Your evaluation for <strong className="text-slate-900">{skill.skillName}</strong> is confirmed for <br/>
            <span className="inline-block mt-3 px-5 py-2.5 bg-slate-100 rounded-xl font-bold text-slate-900 border border-slate-200 text-xl">
              {new Date(selectedDate).toLocaleString([], {weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}
            </span>
          </p>

          <div className="bg-accent-50 border border-accent-100 rounded-2xl p-6 mb-10 text-left flex items-start">
            <Info className="h-6 w-6 text-accent-600 mr-4 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-accent-900 mb-1">AI Generation Initiated</h4>
              <p className="text-sm text-accent-700">Our Bloom Engine has begun synthesizing your unique, zero-day question pool. You will receive an email when your secure environment is ready.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigate('/dashboard')} className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-all">
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-extrabold text-slate-900">Schedule & Checkout</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Finalize your booking for {skill.skillName}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Step 1: Schedule */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center">
                <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mr-4 text-lg border border-brand-200">1</span>
                Select Date & Time
              </h2>
            </div>

            {/* AI Notice */}
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-8 flex items-start">
              <BrainCircuit className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-brand-900 text-sm mb-1">24-Hour AI Generation Requirement</h4>
                <p className="text-sm text-brand-700">To ensure absolute integrity, exams must be scheduled at least 24 hours in advance. This allows our AI engine to synthesize a completely unique, zero-day assessment tailored to current industry standards.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {dates.map((slot, idx) => (
                <div 
                  key={idx}
                  onClick={() => !slot.disabled && setSelectedDate(slot.date)}
                  className={`p-5 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden ${
                    slot.disabled 
                      ? 'border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed' 
                      : selectedDate === slot.date 
                        ? 'border-brand-500 bg-brand-50/50 shadow-md shadow-brand-100 cursor-pointer' 
                        : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50 cursor-pointer'
                  }`}
                >
                  {selectedDate === slot.date && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/10 rounded-bl-full -mr-8 -mt-8"></div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg mr-3 ${selectedDate === slot.date ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'}`}>
                        <CalendarIcon className="h-5 w-5" />
                      </div>
                      <span className={`font-bold text-lg ${slot.disabled ? 'text-slate-400' : 'text-slate-900'}`}>
                        {new Date(slot.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    {slot.disabled && <Lock className="h-4 w-4 text-slate-300" />}
                  </div>
                  <span className={`text-sm font-bold px-3 py-1 rounded-md border inline-block ${slot.disabled ? 'text-slate-400 bg-slate-100 border-slate-200' : 'text-slate-500 bg-white border-slate-100'}`}>
                    {slot.label === 'Today (Too Soon)' ? 'Unavailable (AI Prep)' : '10:00 AM - 11:00 AM UTC'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Payment */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 flex items-center">
              <span className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mr-4 text-lg border border-brand-200">2</span>
              Payment Method
            </h2>
            <div className="space-y-5">
              <label className={`flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 ${paymentMethod === 'credits' ? 'border-brand-500 bg-brand-50/50 shadow-md shadow-brand-100' : 'border-slate-200 hover:bg-slate-50 hover:border-brand-300'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-5 ${paymentMethod === 'credits' ? 'border-brand-500' : 'border-slate-300'}`}>
                  {paymentMethod === 'credits' && <div className="w-3 h-3 bg-brand-500 rounded-full"></div>}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 border border-amber-200">
                      <Coins className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-lg">Enterprise Credits</span>
                      <span className="block text-sm font-medium text-slate-500 mt-0.5">Balance: {availableCredits} credits</span>
                    </div>
                  </div>
                  <span className="font-black text-slate-900 text-xl">-{skill.creditCost}</span>
                </div>
              </label>

              <label className={`flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 ${paymentMethod === 'card' ? 'border-brand-500 bg-brand-50/50 shadow-md shadow-brand-100' : 'border-slate-200 hover:bg-slate-50 hover:border-brand-300'}`}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-5 ${paymentMethod === 'card' ? 'border-brand-500' : 'border-slate-300'}`}>
                  {paymentMethod === 'card' && <div className="w-3 h-3 bg-brand-500 rounded-full"></div>}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mr-4 border border-slate-200">
                      <CreditCard className="h-6 w-6 text-slate-600" />
                    </div>
                    <span className="block font-bold text-slate-900 text-lg">Credit Card</span>
                  </div>
                  <span className="font-black text-slate-900 text-xl">${skill.priceUsd}</span>
                </div>
              </label>
            </div>
            
            {paymentMethod === 'credits' && !hasEnoughCredits && (
              <div className="mt-6 p-5 bg-red-50 text-red-700 rounded-xl text-sm font-bold border border-red-200 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                Insufficient credits. Please purchase more or use a credit card.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Summary */}
        <div>
          <div className="bg-[#0a0f1c] text-white p-8 md:p-10 rounded-[2rem] shadow-2xl sticky top-28 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <h3 className="text-2xl font-display font-bold mb-8 border-b border-white/10 pb-6">Order Summary</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Assessment</p>
                <p className="font-bold text-lg leading-tight">{skill.skillName}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Scheduled For</p>
                <p className="font-medium text-brand-300 bg-brand-900/30 px-3 py-2 rounded-lg inline-block border border-brand-800/50">
                  {selectedDate ? new Date(selectedDate).toLocaleString([], {month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'}) : 'Not selected'}
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8 mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400 font-medium">Subtotal</span>
                <span className="font-bold">{paymentMethod === 'credits' ? `${skill.creditCost} Credits` : `$${skill.priceUsd}`}</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-display font-black mt-6">
                <span>Total</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
                  {paymentMethod === 'credits' ? `${skill.creditCost} CR` : `$${skill.priceUsd}`}
                </span>
              </div>
            </div>

            <button 
              onClick={handleConfirm}
              disabled={isProcessing || !selectedDate || (paymentMethod === 'credits' && !hasEnoughCredits)}
              className="w-full py-5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 text-white rounded-xl font-bold text-lg transition-all flex justify-center items-center shadow-[0_0_20px_rgba(14,165,233,0.3)] disabled:shadow-none hover:-translate-y-0.5"
            >
              {isProcessing ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Initiating AI...
                </div>
              ) : (
                <>
                  <ShieldCheck className="mr-2 h-6 w-6" />
                  Confirm & Schedule
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-6 font-medium">
              By confirming, you agree to the <a href="#" className="text-brand-400 hover:underline">Proctoring Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
