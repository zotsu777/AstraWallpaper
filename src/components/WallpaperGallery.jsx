import React, { useState } from 'react';
import { wallpapers } from '../data/wallpapers';
import WallpaperCard from './WallpaperCard';

const WallpaperGallery = ({
  searchQuery,
  selectedCategory,
  selectedResolution,
  onSelectWallpaper,
  favorites,
  onToggleFavorite
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const wallpapersPerPage = 6;

  const filteredWallpapers = wallpapers.filter(wallpaper => {
    const matchesSearch = wallpaper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         wallpaper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || wallpaper.category === selectedCategory;
    const matchesResolution = selectedResolution === "All" || wallpaper.resolution === selectedResolution;
    return matchesSearch && matchesCategory && matchesResolution;
  });

  const totalPages = Math.ceil(filteredWallpapers.length / wallpapersPerPage);
  const currentWallpapers = filteredWallpapers.slice(
    (currentPage - 1) * wallpapersPerPage,
    currentPage * wallpapersPerPage
  );

  return (
    <div className="container py-4">
      {filteredWallpapers.length > 0 ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0">Found {filteredWallpapers.length} wallpapers</h3>
            {(currentPage - 1) * wallpapersPerPage + 1 <= filteredWallpapers.length && (
              <small className="text-muted">Showing {(currentPage - 1) * wallpapersPerPage + 1}-{Math.min(currentPage * wallpapersPerPage, filteredWallpapers.length)} of {filteredWallpapers.length}</small>
            )}
          </div>

          <div className="row">
            {currentWallpapers.map(wallpaper => (
              <WallpaperCard
                key={wallpaper.id}
                wallpaper={wallpaper}
                onSelect={onSelectWallpaper}
                isFavorite={favorites.some(fav => fav.id === wallpaper.id)}
                onFavoriteToggle={onToggleFavorite}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <nav>
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        </li>
                      );
                    } else if (
                      (pageNumber === currentPage - 2 && currentPage > 3) ||
                      (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <li key={pageNumber} className="page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                      );
                    }
                    return null;
                  })}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-5">
          <i className="bi bi-search text-muted display-1"></i>
          <h3 className="mt-3 text-muted">No wallpapers found</h3>
          <p className="text-muted">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default WallpaperGallery;
