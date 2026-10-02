import React from 'react';
import {
  Film,
  Home,
  Flame,
  Bookmark,
  Globe,
  Users,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clapperboard,
} from 'lucide-react';

interface SidebarProps {
  activeNav: string;
  onSelectNav: (nav: string) => void;
  watchlistCount: number;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onOpenWatchlist: () => void;
  onOpenCommunity: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeNav,
  onSelectNav,
  watchlistCount,
  isCollapsed,
  onToggleCollapse,
  onOpenWatchlist,
  onOpenCommunity,
}) => {
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'movies', label: 'Movies & Cinema', icon: Film },
    { id: 'top10', label: 'Top 10 Today', icon: Flame, badge: 'Hot' },
    { id: 'docu', label: 'Conservation & Docu', icon: Globe },
    { id: 'watchlist', label: 'My Watchlist', icon: Bookmark, count: watchlistCount },
    { id: 'community', label: 'Fan Club & Oscars', icon: Users },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-40 bg-[#080b11]/95 backdrop-blur-xl border-r border-slate-800/80 transition-all duration-300 flex flex-col justify-between select-none ${
        isCollapsed ? 'w-20' : 'w-64'
      } hidden md:flex`}
    >
      {/* Top Branding Section */}
      <div>
        <div className="h-20 flex items-center justify-between px-5 border-b border-slate-800/60">
          <div
            onClick={() => onSelectNav('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Clapperboard className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black tracking-wider text-white">
                    CINE<span className="text-orange-500">STREAM</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    LEO
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 tracking-widest font-mono uppercase">
                  DiCaprio Official
                </span>
              </div>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            aria-label="Toggle sidebar collapse"
            className="w-7 h-7 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-3 py-6 space-y-1.5">
          <div className={`px-3 mb-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 ${isCollapsed ? 'hidden' : 'block'}`}>
            Menu
          </div>

          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'watchlist') {
                    onOpenWatchlist();
                  } else if (item.id === 'community') {
                    onOpenCommunity();
                  } else {
                    onSelectNav(item.id);
                  }
                }}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500/20 to-orange-500/5 text-orange-400 font-semibold border border-orange-500/30 shadow-md shadow-orange-950/20'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-orange-500 rounded-r-full shadow-lg shadow-orange-500/80" />
                )}

                <Icon
                  className={`w-5 h-5 shrink-0 transition-colors ${
                    isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                />

                {!isCollapsed && (
                  <span className="truncate flex-1 text-left">{item.label}</span>
                )}

                {!isCollapsed && item.count !== undefined && item.count > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40">
                    {item.count}
                  </span>
                )}

                {!isCollapsed && item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* VIP Pass Banner */}
        {!isCollapsed && (
          <div className="mx-3 mt-4 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-[#141b2c] border border-orange-500/20 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                VIP Premiere Pass
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              Stream 4K Mastercuts, unreleased climate dispatches & Oscar archive.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition-colors cursor-pointer shadow-md shadow-orange-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Access</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Profile & Settings Section */}
      <div className="p-3 border-t border-slate-800/60 space-y-2">
        <button
          onClick={() => onSelectNav('settings')}
          className="w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-colors"
          title={isCollapsed ? 'Settings' : undefined}
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span>Settings</span>}
        </button>

        {/* User Card */}
        <div
          className={`flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          <div className="relative">
            <img
              src="/assets/logo.png"
              alt="Leonardo DiCaprio"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-500/50"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#080b11]" />
          </div>

          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white truncate">Leonardo D.</span>
                <span className="px-1 py-0.2 text-[9px] font-bold rounded bg-amber-500/20 text-amber-300">
                  VIP
                </span>
              </div>
              <span className="text-[10px] text-slate-400 truncate block">Auteur Patron</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
