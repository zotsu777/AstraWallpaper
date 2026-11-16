import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={() => setActiveSection('home')}>
          <i className="bi bi-image-fill me-2 text-primary"></i>
          AstraWallpaper
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === 'home' ? 'active fw-bold' : ''}`}
                onClick={() => setActiveSection('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === 'categories' ? 'active fw-bold' : ''}`}
                onClick={() => setActiveSection('categories')}
              >
                Categories
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${activeSection === 'favorites' ? 'active fw-bold' : ''}`}
                onClick={() => setActiveSection('favorites')}
              >
                Favorites
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
