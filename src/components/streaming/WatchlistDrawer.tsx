import React from 'react';
import { X, Play, Trash2, Bookmark, Film } from 'lucide-react';
import { Movie } from '../../data/content';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlist: string[];
  allMovies: Movie[];
  onPlayMovie: (movie: Movie) => void;
  onRemoveFromWatchlist: (movieId: string) => void;
  onOpenDetail: (movie: Movie) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  watchlist,
  allMovies,
  onPlayMovie,
  onRemoveFromWatchlist,
  onOpenDetail,
}) => {
  if (!isOpen) return null;

  const savedMovies = allMovies.filter((m) => watchlist.includes(m.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#0a0e19] border-l border-slate-800 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-orange-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">My Watchlist</h2>
              <p className="text-xs text-slate-400">{savedMovies.length} saved titles</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {savedMovies.length === 0 ? (
            <div className="py-20 text-center">
              <Film className="w-12 h-12 text-slate-700 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-white mb-1">Your watchlist is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore movies and click the bookmark icon to save titles you want to stream later.
              </p>
            </div>
          ) : (
            savedMovies.map((movie) => (
              <div
                key={movie.id}
                className="group p-3 rounded-2xl bg-[#111625] border border-slate-800/80 hover:border-orange-500/40 transition-all flex items-center gap-3.5"
              >
                {/* Poster */}
                <div
                  onClick={() => {
                    onOpenDetail(movie);
                    onClose();
                  }}
                  className="w-16 aspect-[2/3] rounded-xl overflow-hidden bg-slate-900 shrink-0 cursor-pointer"
                >
                  <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4
                    onClick={() => {
                      onOpenDetail(movie);
                      onClose();
                    }}
                    className="text-sm font-bold text-white truncate hover:text-orange-400 cursor-pointer"
                  >
                    {movie.title}
                  </h4>
                  <div className="text-xs text-slate-400 truncate">
                    {movie.year} • {movie.duration} • {movie.director}
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 mt-1">
                    {movie.matchScore}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onPlayMovie(movie);
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 transition-colors"
                    title="Play Movie"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                  </button>

                  <button
                    onClick={() => onRemoveFromWatchlist(movie.id)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                    title="Remove from Watchlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedMovies.length > 0 && (
          <div className="p-4 border-t border-slate-800 bg-[#080b11]">
            <button
              onClick={() => {
                if (savedMovies[0]) {
                  onPlayMovie(savedMovies[0]);
                  onClose();
                }
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:scale-[1.02] transition-transform"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Streaming Queue</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
