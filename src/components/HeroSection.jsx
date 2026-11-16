import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="input-group input-group-lg shadow-sm">
      <span className="input-group-text bg-white border-end-0">
        <i className="bi bi-search text-muted"></i>
      </span>
      <input
        type="text"
        className="form-control border-start-0 ps-0"
        placeholder="Search for wallpapers (e.g. 'mountains', 'neon')..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-primary text-white py-5 mb-5 position-relative overflow-hidden" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold mb-3">Elevate Your Screen</h1>
            <p className="lead mb-4">Discover thousands of high-quality wallpapers for your desktop and mobile.</p>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection, SearchBar };
