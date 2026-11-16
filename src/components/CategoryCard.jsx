import React from 'react';

const CategoryCard = ({ category, onCategoryClick }) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 border-0 shadow-sm category-card hover-scale" onClick={() => onCategoryClick(category.name)} style={{ cursor: 'pointer' }}>
        <div className="card-body text-center p-4">
          <div className="mb-3">
            <i className={`bi ${category.icon} display-4 text-primary`}></i>
          </div>
          <h5 className="card-title fw-bold">{category.name}</h5>
          <img src={category.image} alt={category.name} className="img-fluid rounded mt-2" style={{ maxHeight: '80px', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
