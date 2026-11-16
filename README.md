# AstraWallpaper Project

A modern, responsive wallpaper gallery application built with React and Bootstrap 5.

## Features

- Browse high-quality wallpapers by category
- Search and filter wallpapers
- Save favorites locally
- View wallpapers in a detailed modal
- Download wallpapers directly
- Responsive design for all devices

## Technologies

- React 18
- Bootstrap 5
- Bootstrap Icons
- Local Storage
- Vite

## Installation

```bash
cd wallpaper-project
npm install
npm run dev
```

## Project Structure

- `src/components/` - React components
- `src/data/` - Wallpaper data and categories
- `src/hooks/` - Custom React hooks
- `src/styles/` - CSS styles
- `src/App.jsx` - Main application component

## Components

- `App` - Main application container
- `Navbar` - Navigation bar
- `HeroSection` - Hero banner with search
- `CategorySection` - Browse categories
- `CategoryCard` - Individual category card
- `SearchBar` - Search input
- `FilterBar` - Category and resolution filters
- `WallpaperGallery` - Wallpaper grid with pagination
- `WallpaperCard` - Individual wallpaper card
- `WallpaperModal` - Detailed wallpaper view
- `FavoritesSection` - User favorites
- `Footer` - Page footer

## Data

- `src/data/wallpapers.js` - Wallpaper collection
- `src/data/categories.js` - Category data

## Local Storage

Favorites are stored in the browser's localStorage under the key `wallpaperFavorites`.

## License

MIT
