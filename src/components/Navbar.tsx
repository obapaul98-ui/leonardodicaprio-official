import React, { useState, useEffect } from 'react';
import { Search, Volume2, VolumeX, Menu, X, Globe, Heart, Film, User, Play, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch,
  isAudioPlaying,
  onToggleAudio,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Theme state: initialized from <html> element state or localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle handler
  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'about', label: 'About', icon: User },
    { id: 'movies', label: 'Movies', icon: Film },
    { id: 'charity', label: 'Charity', icon: Heart, highlight: true },
    { id: 'reels', label: 'Reels', icon: Play },
    { id: 'fanclub', label: 'Fan Club', icon: Sparkles },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 flex justify-center ${
          isScrolled ? 'backdrop-blur-md' : ''
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name Area - Vertically Centered */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group transition-transform focus:outline-none"
            aria-label="Leonardo DiCaprio Official Home"
          >
            {/* Logo Emblem */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-gradient-to-tr from-[#F28C28] via-amber-400 to-yellow-300 p-[1.5px] shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#141414] dark:bg-[#090d16] rounded-full flex items-center justify-center overflow-hidden">
                <span className="cinema-title text-sm sm:text-base font-black text-amber-300 group-hover:text-white transition-colors">
                  LD
                </span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#F28C28] rounded-full ring-2 ring-[var(--bg)] animate-pulse" />
            </div>

            {/* Rearranged Name Block: Single Line Name + Aligned Left OFFICIAL */}
            <div className="flex flex-col justify-center leading-none text-left">
              <span className="cinema-title text-sm xs:text-base sm:text-lg md:text-xl font-bold tracking-wide sm:tracking-wider whitespace-nowrap text-[#141414] dark:text-white transition-colors duration-200">
                LEONARDO DICAPRIO
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#F28C28] mt-1 text-left select-none">
                OFFICIAL
              </span>
            </div>
          </button>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-pill shadow-xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-[#141414] dark:text-white bg-black/5 dark:bg-white/10 shadow-sm'
                      : 'text-[#555555] dark:text-slate-300 hover:text-[#141414] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${link.highlight ? 'text-[#F28C28]' : ''}`} />
                  <span>{link.label}</span>
                  {link.highlight && (
                    <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-[#F28C28]/15 text-[#F28C28] rounded-full border border-[#F28C28]/30">
                      Impact
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#F28C28] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Theme Toggle, Search, Sound, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <button
              id="theme-toggle-btn"
              onClick={handleToggleTheme}
              className="p-2 sm:px-3 sm:py-2 rounded-full glass-pill hover:border-[#F28C28]/50 text-[#141414] dark:text-white transition-all flex items-center gap-2 group"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="hidden md:inline font-mono text-[11px] text-slate-300 group-hover:text-white">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#F28C28] group-hover:-rotate-12 transition-transform duration-300" />
                  <span className="hidden md:inline font-mono text-[11px] text-[#141414] group-hover:text-[#F28C28]">Dark</span>
                </>
              )}
            </button>

            {/* Omni Search Button (Cmd+K) */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-full glass-pill hover:border-[#F28C28]/50 text-[#141414] dark:text-white transition-all text-xs group"
              title="Search Archive (Cmd+K)"
              aria-label="Open Search"
            >
              <Search className="w-3.5 h-3.5 text-[#555555] dark:text-slate-300 group-hover:text-[#F28C28] transition-colors" />
              <span className="hidden sm:inline font-mono text-[11px] text-[#555555] dark:text-slate-300 group-hover:text-[#141414] dark:group-hover:text-white">
                Search
              </span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[9px] font-mono bg-black/5 dark:bg-white/10 text-[#555555] dark:text-slate-300 rounded border border-black/10 dark:border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Soundscape Ambience Toggle */}
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-full glass-pill transition-all ${
                isAudioPlaying
                  ? 'border-[#F28C28]/50 text-[#F28C28] shadow-[0_0_12px_rgba(242,140,40,0.3)]'
                  : 'text-[#555555] dark:text-slate-300 hover:text-[#141414] dark:hover:text-white'
              }`}
              title={isAudioPlaying ? 'Mute Atmosphere' : 'Play Nature & Oceanic Ambience'}
              aria-label="Toggle ambient sound"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full glass-pill text-[#141414] dark:text-white"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)]/98 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn">
          {/* Top Actions in Mobile Menu */}
          <div className="flex items-center justify-between pb-6 mb-4 border-b border-[var(--border)]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Appearance & Atmosphere
            </span>
            <button
              onClick={handleToggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono font-semibold"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-[#F28C28]" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-4 rounded-2xl text-base font-bold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-[#F28C28]/15 text-[#F28C28] border border-[#F28C28]/30'
                      : 'text-[var(--text)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${link.highlight ? 'text-[#F28C28]' : ''}`} />
                    <span>{link.label}</span>
                  </div>
                  {link.highlight && (
                    <span className="px-2 py-0.5 text-xs bg-[#F28C28]/20 text-[#F28C28] rounded-full border border-[#F28C28]/30 font-mono">
                      Impact
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-[var(--border)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
            <span>Co-founder, Re:wild</span>
            <span>UN Messenger of Peace</span>
          </div>
        </div>
      )}
    </>
  );
};
