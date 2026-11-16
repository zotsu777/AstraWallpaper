import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import CategorySection from './components/CategorySection';
import FilterBar from './components/FilterBar';
import WallpaperGallery from './components/WallpaperGallery';
import WallpaperModal from './components/WallpaperModal';
import FavoritesSection from './components/FavoritesSection';
import Footer from './components/Footer';
import { wallpapers } from './data/wallpapers';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedResolution, setSelectedResolution] = useState('All');
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('wallpaperFavorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error parsing favorites:', error);
        localStorage.removeItem('wallpaperFavorites');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wallpaperFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveSection('home');
  };

  const handleToggleFavorite = (wallpaperId) => {
    const wallpaper = wallpapers.find(w => w.id === wallpaperId);
    if (!wallpaper) return;

    setFavorites(prev => {
      const isAlreadyFavorite = prev.some(fav => fav.id === wallpaperId);
      if (isAlreadyFavorite) {
        return prev.filter(fav => fav.id !== wallpaperId);
      } else {
        return [...prev, wallpaper];
      }
    });
  };

  const handleSelectWallpaper = (wallpaper) => {
    setSelectedWallpaper(wallpaper);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWallpaper(null);
  };

  return (
    <div className="app-wrapper">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {activeSection === 'home' && (
          <>
            <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="container py-4">
              <FilterBar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedResolution={selectedResolution}
                setSelectedResolution={setSelectedResolution}
              />
              <WallpaperGallery
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                selectedResolution={selectedResolution}
                onSelectWallpaper={handleSelectWallpaper}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          </>
        )}

        {activeSection === 'categories' && (
          <CategorySection onCategorySelect={handleCategorySelect} />
        )}

        {activeSection === 'favorites' && (
          <FavoritesSection
            selectedWallpapers={favorites}
            onSelectWallpaper={handleSelectWallpaper}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>

      <Footer />

      <WallpaperModal
        isOpen={isModalOpen}
        wallpaper={selectedWallpaper}
        onClose={handleCloseModal}
        onFavoriteToggle={handleToggleFavorite}
        isFavorite={selectedWallpaper && favorites.some(fav => fav.id === selectedWallpaper.id)}
      />
    </div>
  );
};

export default App;

