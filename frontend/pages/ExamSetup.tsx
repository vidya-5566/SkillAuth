import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_CATALOG } from '../constants';
import { Camera, ShieldAlert, CheckCircle, AlertTriangle, Play, Lock, ScanFace, BrainCircuit } from 'lucide-react';

export const ExamSetup: React.FC = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const skill = MOCK_CATALOG.find(s => s.skillId === skillId);
  
  const [cameraGranted, setCameraGranted] = useState<boolean | null>(null);
  const [aiVerified, setAiVerified] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraGranted(true);
      } catch (err) {
        console.error("Camera access denied", err);
        setCameraGranted(false);
      }
    };
    setupCamera();

    // Simulate AI verification delay
    const timer = setTimeout(() => {
      setAiVerified(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (!skill) return <div>Skill not found</div>;

  const isReady = cameraGranted && aiVerified;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 mb-6 shadow-xl border border-slate-700">
          <Lock className="h-10 w-10 text-brand-400" />
        </div>
        <h1 className="text-4xl font-display font-extrabold text-slate-900">Secure Waiting Room</h1>
        <p className="text-xl text-slate-500 mt-3 font-medium">Complete pre-flight checks for <strong className="text-slate-800">{skill.skillName}</strong></p>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-[0_20px_50px_rgb(0,0,0,0.05)] overflow-hidden">
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center">
            <ShieldAlert className="mr-3 h-7 w-7 text-brand-600" />
            Proctoring Initialization
          </h2>
          <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-lg border flex items-center ${isReady ? 'bg-green-100 text-green-800 border-green-200' : 'bg-amber-100 text-amber-800 border-amber-200'}`}>
            {!isReady && <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>}
            {isReady ? 'Ready' : 'Action Required'}
          </span>
        </div>
        
        <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Camera Check */}
          <div>
            <div className="flex items-center mb-6">
              <div className={`flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center border ${cameraGranted ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'}`}>
                {cameraGranted ? <CheckCircle className="h-6 w-6 text-green-600" /> : <Camera className="h-6 w-6 text-slate-500" />}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-slate-900">Identity Verification</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Ensure your face is clearly visible in the frame.</p>
              </div>
            </div>
            
            <div className="mt-6 bg-[#0a0f1c] rounded-3xl overflow-hidden aspect-video relative w-full flex items-center justify-center shadow-inner border-8 border-slate-100">
              {cameraGranted === null && (
                <div className="flex flex-col items-center text-slate-400">
                  <ScanFace className="h-10 w-10 mb-3 animate-pulse" />
                  <span className="font-bold tracking-wide">Requesting camera access...</span>
                </div>
              )}
              {cameraGranted === false && (
                <div className="flex flex-col items-center text-red-400">
                  <AlertTriangle className="h-10 w-10 mb-3" />
                  <span className="font-bold tracking-wide">Camera Access Denied</span>
                </div>
              )}
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className={`w-full h-full object-cover ${!cameraGranted ? 'hidden' : ''}`}
              />
              {cameraGranted && (
                <>
                  {/* Scanning overlay effect */}
                  <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-[float_3s_ease-in-out_infinite] pointer-events-none"></div>
                  
                  <div className="absolute top-4 right-4 flex items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-green-400 font-mono font-bold border border-green-500/30">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 shadow-[0_0_5px_rgba(34,197,94,1)]"></div>
                    AI FEED ACTIVE
                  </div>
                  
                  {/* Face guide box */}
                  <div className="absolute inset-0 m-auto w-48 h-56 border-2 border-dashed border-white/30 rounded-3xl pointer-events-none"></div>
                </>
              )}
            </div>
          </div>

          {/* Rules & AI Status */}
          <div>
            {/* AI Status */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className={`flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center border ${aiVerified ? 'bg-accent-50 border-accent-200' : 'bg-slate-50 border-slate-200'}`}>
                  {aiVerified ? <BrainCircuit className="h-6 w-6 text-accent-600" /> : <BrainCircuit className="h-6 w-6 text-slate-400 animate-pulse" />}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900">Zero-Day Pool Verification</h3>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    {aiVerified ? 'Unique assessment loaded and secured.' : 'Verifying AI-generated question pool...'}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Strict Evaluation Rules</h3>
            <div className="space-y-3">
              {[
                "Do not switch browser tabs or open new windows.",
                "Ensure you are in a quiet, well-lit room.",
                "No other persons should be present or talking.",
                "The exam is adaptive; you cannot go back to previous questions."
              ].map((rule, idx) => (
                <div key={idx} className="flex items-start p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div className="mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                    <AlertTriangle className="h-3 w-3 text-amber-600" />
                  </div>
                  <span className="text-sm text-slate-700 font-bold leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-8 md:px-10 py-8 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm font-bold flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <CheckCircle className={`h-5 w-5 mr-2 ${isReady ? 'text-green-500' : 'text-slate-300'}`} />
            <span className={isReady ? 'text-slate-800' : 'text-slate-400'}>
              {isReady ? 'System checks passed. Ready to begin.' : 'Waiting for system checks...'}
            </span>
          </div>
          <button 
            disabled={!isReady}
            onClick={() => navigate(`/exam/${skill.skillId}`)}
            className={`w-full sm:w-auto flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl transition-all ${
              isReady 
                ? 'bg-slate-900 hover:bg-brand-600 text-white shadow-xl shadow-slate-900/20 hover:shadow-brand-500/30 hover:-translate-y-1' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Play className="mr-2 h-5 w-5" />
            Start Proctored Exam
          </button>
        </div>
      </div>
    </div>
  );
};
