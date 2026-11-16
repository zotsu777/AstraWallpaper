import React from 'react';

const FilterBar = ({
  selectedCategory,
  setSelectedCategory,
  selectedResolution,
  setSelectedResolution
}) => {
  const resolutions = [
    { value: "All", label: "All Resolutions" },
    { value: "1920x1080", label: "1080p (1920×1080)" },
    { value: "4K", label: "4K (3840×2160)" }
  ];

  return (
    <div className="bg-light p-4 rounded shadow-sm mb-4">
      <div className="row g-3 align-items-center">
        <div className="col-md-6">
          <label htmlFor="categorySelect" className="form-label fw-semibold">
            <i className="bi bi-grid me-2 text-primary"></i>
            Category
          </label>
          <select
            id="categorySelect"
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Nature">Nature</option>
            <option value="Architecture">Architecture</option>
            <option value="Space">Space</option>
            <option value="Abstract">Abstract</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="resolutionSelect" className="form-label fw-semibold">
            <i className="bi bi-arrows-expand me-2 text-primary"></i>
            Resolution
          </label>
          <select
            id="resolutionSelect"
            className="form-select"
            value={selectedResolution}
            onChange={(e) => setSelectedResolution(e.target.value)}
          >
            {resolutions.map(res => (
              <option key={res.value} value={res.value}>{res.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
