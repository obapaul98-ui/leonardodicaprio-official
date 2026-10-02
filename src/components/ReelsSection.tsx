import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { ALL_REELS, ReelItem } from '../data/content';
import { DarkBackdrop } from './DarkBackdrop';

interface ReelsSectionProps {
  onPlayReel: (reel: ReelItem) => void;
}

const CATEGORIES = ['All', 'Red Carpet & Events', 'Behind The Scenes', 'Fan Moments', 'Interviews'];

/** Backdrop for the Reels page: the studio portrait on the right. */
export const ReelsBackdrop: React.FC = () => (
  <DarkBackdrop image="/assets/portraits/studio-portrait.jpg" side="right" position="50% 18%" />
);

const Card: React.FC<{ reel: ReelItem; tall: boolean; onPlay: (r: ReelItem) => void }> = ({ reel, tall, onPlay }) => (
  <button
    onClick={() => onPlay(reel)}
    className="group relative text-left rounded-2xl overflow-hidden bg-[#111625]/80 backdrop-blur-sm border border-white/10 hover:border-orange-500/70 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl cursor-pointer"
    aria-label={`Play ${reel.title}`}
  >
    <div className={`relative overflow-hidden bg-slate-900 ${tall ? 'aspect-[3/4]' : 'aspect-video'}`}>
      <img
        src={reel.thumbnail}
        alt={reel.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        style={{ objectPosition: tall ? '50% 25%' : '50% 50%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-black/25 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-orange-500/90 group-hover:bg-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-950/80 group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 fill-white ml-0.5" />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-bold leading-snug line-clamp-2" style={{ color: '#FFFFFF' }}>
            {reel.title}
          </div>
          {reel.caption && (
            <p className="mt-1 text-[11px] line-clamp-2 leading-relaxed font-light" style={{ color: '#CBD5E1' }}>
              {reel.caption}
            </p>
          )}
        </div>
        <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 backdrop-blur-md border border-white/10" style={{ color: '#E2E8F0' }}>
          {reel.duration}
        </span>
      </div>
    </div>
  </button>
);

export const ReelsSection: React.FC<ReelsSectionProps> = ({ onPlayReel }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleWide, setVisibleWide] = useState<number>(9);

  const filtered = ALL_REELS.filter((r) => activeCategory === 'All' || r.category === activeCategory);
  const wide = filtered.filter((r) => !!r.youtubeId);
  const tall = filtered.filter((r) => !r.youtubeId);

  return (
    <div id="reels" className="relative pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleWide(9);
              }}
              className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer backdrop-blur-sm ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 font-bold shadow-md shadow-orange-950/40'
                  : 'bg-white/5 hover:bg-white/10 border border-white/15'
              }`}
              style={{ color: activeCategory === cat ? '#FFFFFF' : '#CBD5E1' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center" style={{ color: '#CBD5E1' }}>
            Nothing here yet.
          </div>
        )}

        {/* Wide clips, in threes */}
        {wide.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wide.slice(0, visibleWide).map((reel) => (
              <Card key={reel.id} reel={reel} tall={false} onPlay={onPlayReel} />
            ))}
          </div>
        )}

        {visibleWide < wide.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleWide((c) => c + 9)}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-sm font-bold shadow-lg hover:scale-105 transition-all cursor-pointer"
              style={{ color: '#FFFFFF' }}
            >
              Show more
            </button>
          </div>
        )}

        {/* Portrait clips, in threes */}
        {tall.length > 0 && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${wide.length > 0 ? 'mt-14 pt-14 border-t border-white/10' : ''}`}>
            {tall.map((reel) => (
              <Card key={reel.id} reel={reel} tall onPlay={onPlayReel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
