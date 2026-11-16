import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="fw-bold mb-2">
              <i className="bi bi-image-fill text-primary me-2"></i>
              WallCraft
            </h5>
            <p className="text-muted mb-0">Elevate your screen with premium wallpapers</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#" className="text-muted text-decoration-none hover-primary">Privacy Policy</a>
              <a href="#" className="text-muted text-decoration-none hover-primary">Terms of Service</a>
              <a href="#" className="text-muted text-decoration-none hover-primary">Contact</a>
            </div>
            <div className="mt-2">
              <small className="text-muted">© 2025 WallCraft. All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
