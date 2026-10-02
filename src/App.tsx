import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { LegacyPage } from './pages/LegacyPage';
import { FilmographyPage } from './pages/FilmographyPage';
import { FilmPage } from './pages/FilmPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReelsPage } from './pages/ReelsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { CharityPage } from './pages/CharityPage';
import { FanClubPage } from './pages/FanClubPage';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/legacy" element={<LegacyPage />} />
            <Route path="/filmography" element={<FilmographyPage />} />
            <Route path="/film/:id" element={<FilmPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/charity" element={<CharityPage />} />
            <Route path="/fan-club" element={<FanClubPage />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
