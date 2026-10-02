import React, { useRef } from 'react';
import {
  Play,
  Bookmark,
  Check,
  Info,
  ChevronLeft,
  ChevronRight,
  Flame,
  Star,
} from 'lucide-react';
import { Movie } from '../../data/content';

interface Top10CarouselProps {
  movies: Movie[];
  onPlayMovie: (movie: Movie) => void;
  onOpenDetail: (movie: Movie) => void;
  watchlist: string[];
  onToggleWatchlist: (movieId: string) => void;
}

export const Top10Carousel: React.FC<Top10CarouselProps> = ({
  movies,
  onPlayMovie,
  onOpenDetail,
  watchlist,
  onToggleWatchlist,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sort movies by rank 1 to 10
  const top10List = [...movies]
    .filter((m) => m.rank !== undefined)
    .sort((a, b) => (a.rank || 0) - (b.rank || 0))
    .slice(0, 10);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-14 relative">
      {/* Header with Title and Scroll Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-500 border border-orange-500/30 flex items-center justify-center shadow-lg shadow-orange-950/20">
            <Flame className="w-5 h-5 fill-orange-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Top 10 Movies <span className="text-orange-500">This Month</span>
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/40">
                Most Watched
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Ranked by viewer streams, critical acclaim, and box office impact
            </p>
          </div>
        </div>

        {/* Arrow Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-xl bg-[#111625] hover:bg-orange-500 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all hover:scale-105"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-xl bg-[#111625] hover:bg-orange-500 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center transition-all hover:scale-105"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar pb-6 pt-2 px-1"
      >
        {top10List.map((movie) => {
          const isSaved = watchlist.includes(movie.id);
          const rank = movie.rank || 1;

          return (
            <div
              key={movie.id}
              className="flex items-end shrink-0 group relative select-none cursor-pointer"
              onClick={() => onOpenDetail(movie)}
            >
              {/* Massive Signature Rank Numeral */}
              <div className="relative z-0 -mr-6 sm:-mr-8 select-none pointer-events-none">
                <span className="rank-numeral text-8xl sm:text-9xl md:text-[10rem] block font-black leading-none transform translate-y-3">
                  {rank}
                </span>
              </div>

              {/* Vertical Movie Poster Card */}
              <div className="relative z-10 w-44 sm:w-52 aspect-[2/3] rounded-2xl overflow-hidden bg-[#111625] border border-slate-800/80 group-hover:border-orange-500/70 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-950/50">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-[#080b11]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    {movie.matchScore}
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-300" />
                    {movie.rating}
                  </span>
                </div>

                {/* Bottom Info & Action Buttons on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-semibold mb-0.5">
                    {movie.quality} • {movie.duration}
                  </span>
                  <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-orange-200 transition-colors">
                    {movie.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mb-2 font-light">
                    {movie.genres.join(', ')}
                  </p>

                  {/* Hover Quick Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayMovie(movie);
                      }}
                      className="flex-1 py-1.5 px-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md shadow-orange-500/30 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Play</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWatchlist(movie.id);
                      }}
                      className={`p-1.5 rounded-lg border text-xs transition-colors ${
                        isSaved
                          ? 'bg-orange-500/20 border-orange-500/50 text-orange-400'
                          : 'bg-black/60 border-slate-700 text-slate-300 hover:text-white'
                      }`}
                      title={isSaved ? 'Remove from Watchlist' : 'Add to Watchlist'}
                    >
                      {isSaved ? <Check className="w-3.5 h-3.5 text-orange-400" /> : <Bookmark className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDetail(movie);
                      }}
                      className="p-1.5 rounded-lg bg-black/60 border border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                      title="More details"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
