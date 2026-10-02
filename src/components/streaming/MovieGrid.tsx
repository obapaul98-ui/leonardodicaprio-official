import React from 'react';
import { Play, Bookmark, Check, Info, Star, Film, Award } from 'lucide-react';
import { Movie } from '../../data/content';

interface MovieGridProps {
  title?: string;
  subtitle?: string;
  movies: Movie[];
  onPlayMovie: (movie: Movie) => void;
  onOpenDetail: (movie: Movie) => void;
  watchlist: string[];
  onToggleWatchlist: (movieId: string) => void;
}

export const MovieGrid: React.FC<MovieGridProps> = ({
  title = 'Curated Premieres & Filmography',
  subtitle = 'Iconic cinematic roles spanning three decades of auteur storytelling',
  movies,
  onPlayMovie,
  onOpenDetail,
  watchlist,
  onToggleWatchlist,
}) => {
  return (
    <section className="mb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Film className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">{subtitle}</p>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-orange-400 font-bold">{movies.length}</span> titles
        </div>
      </div>

      {/* Grid Layout */}
      {movies.length === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-[#111625] border border-slate-800">
          <Film className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1">No movies match your criteria</h3>
          <p className="text-xs text-slate-400">Try adjusting your category filter or search query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => {
            const isSaved = watchlist.includes(movie.id);

            return (
              <div
                key={movie.id}
                onClick={() => onOpenDetail(movie)}
                className="group relative rounded-2xl overflow-hidden bg-[#111625] border border-slate-800/80 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-orange-950/40 cursor-pointer flex flex-col justify-between"
              >
                {/* Poster container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-[#080b11]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {movie.year}
                    </span>

                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-emerald-400" />
                      {movie.rating}
                    </span>
                  </div>

                  {/* Awards Ribbon if applicable */}
                  {movie.awards && movie.awards.length > 0 && (
                    <div className="absolute top-9 left-2.5">
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-orange-950/80 text-orange-300 border border-orange-500/30 flex items-center gap-1">
                        <Award className="w-2.5 h-2.5 text-orange-400" />
                        <span>Award Winner</span>
                      </span>
                    </div>
                  )}

                  {/* Bottom info on poster */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-0.5">
                      Dir. {movie.director}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-200 transition-colors line-clamp-1 mb-1 cinema-title">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 mb-2 font-light">
                      {movie.genres.join(' • ')}
                    </p>

                    {/* Quick Hover Buttons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayMovie(movie);
                        }}
                        className="flex-1 py-1.5 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/30 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Watch</span>
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
                        title={isSaved ? 'In Watchlist' : 'Add to Watchlist'}
                      >
                        {isSaved ? <Check className="w-3.5 h-3.5 text-orange-400" /> : <Bookmark className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDetail(movie);
                        }}
                        className="p-1.5 rounded-lg bg-black/60 border border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                        title="Film Synopsis & Cast"
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
      )}
    </section>
  );
};
