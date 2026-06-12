import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, History as HistoryIcon, Award, Settings, LogOut, ShieldCheck, Bell, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/catalog', icon: BookOpen, label: 'Skill Catalog' },
    { path: '/history', icon: HistoryIcon, label: 'Evaluation History' },
    { path: '/certificates', icon: Award, label: 'Certificates' },
  ];

  return (
    <div className="flex h-screen bg-[#f4f7f9] overflow-hidden selection:bg-brand-200 selection:text-brand-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200/60 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20 relative">
        <div className="h-20 flex items-center px-8 border-b border-slate-100 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-2 rounded-xl mr-3 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">SkillAuth<span className="text-brand-600">™</span></span>
        </div>
        
        <nav className="flex-1 py-8 px-4 space-y-2 overflow-y-auto">
          <div className="px-4 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Candidate Portal</div>
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-200 group relative overflow-hidden ${
                  isActive 
                    ? 'text-brand-700 bg-brand-50/80 shadow-sm border border-brand-100/50' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500 rounded-r-full"></div>
                )}
                <Icon className={`mr-3 h-5 w-5 transition-colors duration-200 ${isActive ? 'text-brand-600' : 'text-slate-400 group-hover:text-brand-500'}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center mb-5 p-3 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-100 to-indigo-100 flex items-center justify-center text-brand-700 font-bold border border-brand-200/50 shadow-inner">
              JD
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate">Jane Doe</p>
              <p className="text-xs text-slate-500 truncate font-medium">jane.doe@enterprise.com</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-slate-600 rounded-xl hover:bg-slate-200/50 hover:text-slate-900 transition-colors group"
          >
            <LogOut className="mr-2 h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-50/50 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Top Header */}
        <header className="h-20 glass border-b border-slate-200/50 flex items-center justify-between px-10 shrink-0 z-10 sticky top-0">
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-bold text-slate-800 capitalize tracking-tight">
              {location.pathname.split('/')[1].replace('-', ' ') || 'Dashboard'}
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Quick search..." 
                className="pl-10 pr-4 py-2 bg-white/80 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 w-64 transition-all shadow-sm"
              />
            </div>
            <div className="flex items-center space-x-3 border-l border-slate-200 pl-6">
              <button className="p-2.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all relative group">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white shadow-sm group-hover:animate-pulse"></span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
