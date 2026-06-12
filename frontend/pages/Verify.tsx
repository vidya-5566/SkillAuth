import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_RESULTS } from '../constants';
import { ShieldCheck, CheckCircle, Calendar, User, Award, Lock, ExternalLink } from 'lucide-react';

export const VerifyPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  
  const result = MOCK_RESULTS[0]; 
  const isValid = code === result.certificateCode || code === 'sample';

  return (
    <div className="min-h-screen bg-[#0a0f1c] py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden selection:bg-brand-500/30 selection:text-brand-100">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-600/10 mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-3xl w-full relative z-10 animate-fade-in-up">
        
        <div className="text-center mb-10 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="inline-flex bg-white/5 p-3 rounded-2xl border border-white/10 mb-4 backdrop-blur-md group-hover:bg-white/10 transition-colors">
            <ShieldCheck className="h-10 w-10 text-brand-400" />
          </div>
          <h2 className="text-3xl font-display font-extrabold text-white tracking-tight">SkillAuth™ Verification</h2>
          <p className="text-slate-400 mt-2 font-medium">Global Capability Registry</p>
        </div>

        {isValid ? (
          <div className="bg-white rounded-[2rem] shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden border border-slate-200 relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
              <ShieldCheck className="w-96 h-96" />
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
                <CheckCircle className="h-10 w-10 text-emerald-500" />
              </div>
              <h1 className="text-3xl font-display font-extrabold text-white">Verified Credential</h1>
              <p className="text-emerald-50 mt-2 font-medium flex items-center justify-center">
                <Lock className="w-4 h-4 mr-1.5" /> Cryptographically secured and active
              </p>
            </div>
            
            <div className="p-10 md:p-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 border-b border-slate-100 pb-2">Candidate Details</h3>
                  <div className="flex items-center">
                    <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center border border-slate-200">
                      <User className="h-6 w-6 text-slate-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xl font-display font-bold text-slate-900">Jane Doe</p>
                      <p className="text-sm font-mono text-slate-500 mt-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 inline-block">ID: usr_123</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 border-b border-slate-100 pb-2">Certification Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-bold text-slate-500 mb-1">Skill Assessed</p>
                      <p className="text-lg font-display font-bold text-slate-900 leading-tight">{result.skillName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500 mb-1">Demonstrated Level</p>
                      <p className="text-md font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-lg inline-block border border-brand-100">
                        {result.bloomLabel} (Level {result.finalLevel})
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-center text-slate-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-xs uppercase font-bold tracking-wider">Issued On</span>
                  </div>
                  <p className="font-bold text-slate-900">{new Date(result.issuedAt).toLocaleDateString()}</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex items-center text-slate-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-xs uppercase font-bold tracking-wider">Valid Until</span>
                  </div>
                  <p className="font-bold text-slate-900">{new Date(result.expiresAt).toLocaleDateString()}</p>
                </div>
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                  <div className="flex items-center text-emerald-700 mb-2">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    <span className="text-xs uppercase font-bold tracking-wider">Integrity Score</span>
                  </div>
                  <p className="font-display font-black text-emerald-700 text-xl">{result.integrityScore}/100</p>
                </div>
              </div>

              <div className="mt-10 text-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Certificate ID</p>
                <p className="text-sm font-mono font-bold text-slate-700 tracking-widest">{result.certificateCode}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-red-200 p-12 text-center relative">
             <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
             <div className="h-24 w-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-red-100">
               <span className="text-red-500 text-4xl font-black">X</span>
             </div>
             <h1 className="text-3xl font-display font-extrabold text-slate-900 mb-3">Invalid Credential</h1>
             <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">The certificate code provided could not be found in the registry or has been revoked.</p>
             <button onClick={() => navigate('/')} className="mt-8 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors">
               Return Home
             </button>
          </div>
        )}
      </div>
    </div>
  );
};
