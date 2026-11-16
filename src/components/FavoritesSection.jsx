import React, { useState, useEffect } from 'react';
import { wallpapers } from '../data/wallpapers';
import WallpaperCard from './WallpaperCard';

const FavoritesSection = ({ selectedWallpapers, onSelectWallpaper }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('wallpaperFavorites');
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('Error parsing favorites:', error);
        localStorage.removeItem('wallpaperFavorites');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wallpaperFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (wallpaperId) => {
    setFavorites(prev => {
      const wallpaper = wallpapers.find(w => w.id === wallpaperId);
      if (!wallpaper) return prev;

      const isAlreadyFavorite = favorites.some(fav => fav.id === wallpaperId);

      if (isAlreadyFavorite) {
        return prev.filter(fav => fav.id !== wallpaperId);
      } else {
        return [...prev, wallpaper];
      }
    });
  };

  const handleSelectWallpaper = (wallpaper) => {
    onSelectWallpaper(wallpaper);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="display-5 fw-bold mb-0">
          <i className="bi bi-heart-fill text-danger me-2"></i>
          My Favorites
        </h2>
        <span className="badge bg-primary-subtle text-primary fs-6">
          {favorites.length} wallpapers
        </span>
      </div>

      {favorites.length > 0 ? (
        <div className="row">
          {favorites.map(wallpaper => (
            <WallpaperCard
              key={wallpaper.id}
              wallpaper={wallpaper}
              onSelect={handleSelectWallpaper}
              isFavorite={true}
              onFavoriteToggle={handleToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-heart text-muted display-1"></i>
          <h3 className="mt-3 text-muted">No favorites yet</h3>
          <p className="text-muted">Add some wallpapers to your favorites by clicking the heart icon</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesSection;
