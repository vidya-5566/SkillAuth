import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/Layout';
import { LandingPage } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Catalog } from './pages/Catalog';
import { SkillDetail } from './pages/SkillDetail';
import { Checkout } from './pages/Checkout';
import { ExamSetup } from './pages/ExamSetup';
import { ExamPlayer } from './pages/ExamPlayer';
import { ResultView } from './pages/Result';
import { VerifyPage } from './pages/Verify';
import { HistoryView } from './pages/History';
import { Certificates } from './pages/Certificates';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/verify/:code" element={<VerifyPage />} />

        {/* Authenticated Routes (Wrapped in Layout) */}
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/catalog" element={<AppLayout><Catalog /></AppLayout>} />
        <Route path="/skill/:skillId" element={<AppLayout><SkillDetail /></AppLayout>} />
        <Route path="/checkout/:skillId" element={<AppLayout><Checkout /></AppLayout>} />
        <Route path="/exam-setup/:skillId" element={<AppLayout><ExamSetup /></AppLayout>} />
        <Route path="/result/:resultId" element={<AppLayout><ResultView /></AppLayout>} />
        <Route path="/history" element={<AppLayout><HistoryView /></AppLayout>} />
        <Route path="/certificates" element={<AppLayout><Certificates /></AppLayout>} />
        
        {/* Exam Player - Standalone Full Screen for Proctoring Lockdown */}
        <Route path="/exam/:skillId" element={<ExamPlayer />} />
        
        {/* Fallbacks */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
