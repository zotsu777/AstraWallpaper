import React, { useState } from 'react';

const WallpaperCard = ({ wallpaper, onSelect, isFavorite, onFavoriteToggle }) => {
  const [imageError, setImageError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (e) => {
    e.stopPropagation();
    if (imageError || isDownloading) return;

    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = wallpaper.url;
      link.download = wallpaper.title.replace(/[^a-zA-Z0-9.-]/g, '_') + '.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download error:', err);
      alert('Failed to download image. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow-sm h-100 wallpaper-card hover-scale" onClick={() => !imageError && onSelect(wallpaper)} style={{ cursor: imageError ? 'not-allowed' : 'pointer' }}>
        <div className="position-relative">
          {!imageError ? (
            <img
              src={wallpaper.thumbnail}
              alt={wallpaper.title}
              className="card-img-top"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="card-img-top bg-light d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
              <div className="text-center p-3">
                <i className="bi bi-image text-muted display-4"></i>
                <p className="text-muted small mt-2">Image unavailable</p>
              </div>
            </div>
          )}
          <button
            className={`btn btn-sm position-absolute top-0 end-0 m-2 ${isFavorite ? 'btn-danger' : 'btn-light'}`}
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle(wallpaper.id);
            }}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title text-truncate fw-bold">{wallpaper.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-primary-subtle text-primary">
              <i className="bi bi-tag me-1"></i> {wallpaper.category}
            </span>
            <small className="text-muted">
              <i className="bi bi-arrows-expand me-1"></i> {wallpaper.resolution}
            </small>
          </div>
        </div>
        <div className="card-footer bg-white">
          <button
            className="btn btn-outline-primary w-100"
            onClick={handleDownload}
            disabled={imageError || isDownloading}
          >
            <i className={`bi ${isDownloading ? 'bi-arrow-repeat spinning' : 'bi-download'} me-2`}></i>
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallpaperCard;
