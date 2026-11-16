import React from 'react';
import { categories } from '../data/wallpapers';
import CategoryCard from './CategoryCard';

const CategorySection = ({ onCategorySelect }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 fw-bold">Browse Categories</h2>
      <div className="row">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onCategoryClick={onCategorySelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
