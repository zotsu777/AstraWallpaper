import React, { useState, useEffect } from 'react';

const WallpaperModal = ({ isOpen, wallpaper, onClose, onFavoriteToggle, isFavorite }) => {
  const [imageError, setImageError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setImageError(false);
    setIsDownloading(false);
    // Reset scroll position
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, wallpaper]);

  const handleDownload = async () => {
    if (imageError) return;

    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = wallpaper.url;
      link.download = wallpaper.title.replace(/[^a-zA-Z0-9.-]/g, '_') + '.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success feedback
      setTimeout(() => setIsDownloading(false), 2000);
    } catch (err) {
      console.error('Download error:', err);
      setIsDownloading(false);
    }
  };

  if (!isOpen || !wallpaper) return null;

  return (
    <div className="modal-backdrop fade show" style={{ zIndex: 1050 }}>
      <div className="modal d-block" tabIndex="-1" style={{ zIndex: 1055 }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header bg-dark text-white border-0">
              <h5 className="modal-title fw-bold">
                <i className="bi bi-image me-2 text-primary"></i>
                {wallpaper.title}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="position-relative">
                {!imageError ? (
                  <img
                    src={wallpaper.url}
                    alt={wallpaper.title}
                    className="img-fluid w-100"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="bg-light d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                    <div className="text-center p-5">
                      <i className="bi bi-image text-muted display-1"></i>
                      <h4 className="mt-3 text-muted">Image unavailable</h4>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-primary-subtle text-primary fs-6">
                    <i className="bi bi-tag me-1"></i> {wallpaper.category}
                  </span>
                  <span className="badge bg-secondary-subtle text-secondary fs-6">
                    <i className="bi bi-arrows-expand me-1"></i> {wallpaper.resolution}
                  </span>
                  {wallpaper.tags && wallpaper.tags.map((tag, index) => (
                    <span key={index} className="badge bg-light text-dark fs-6">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2 mt-3">
                  <button
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'} flex-grow-1`}
                    onClick={() => onFavoriteToggle(wallpaper.id)}
                  >
                    <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                  <button
                    className="btn btn-primary flex-grow-1"
                    onClick={handleDownload}
                    disabled={imageError || isDownloading}
                  >
                    <i className={`bi ${isDownloading ? 'bi-arrow-repeat spinning' : 'bi-download'} me-2`}></i>
                    {isDownloading ? 'Downloading...' : 'Download'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallpaperModal;
