# Personal Portfolio Website

A modern, professional personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🚀 Fast performance with Vite
- ♿ Accessible and SEO optimized
- 🎯 Active navigation highlighting based on scroll position

## Sections

- **Hero**: Eye-catching introduction with animated entrance
- **About**: Professional bio and background
- **Projects**: Showcase of featured projects with links and technologies
- **Skills**: Technical competencies organized by category
- **Resume**: Viewable and downloadable PDF resume
- **Contact**: Social links and contact information

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Name and Tagline**: Edit `src/components/Hero.tsx`
2. **About Section**: Edit `src/components/About.tsx`
3. **Projects**: Update the `projects` array in `src/components/Projects.tsx`
4. **Skills**: Update the `skillCategories` array in `src/components/Skills.tsx`
5. **Resume**: Place your resume PDF file in the `public/` folder and name it `resume.pdf`
6. **Contact Links**: Update the `contactLinks` array in `src/components/Contact.tsx`
7. **Meta Tags**: Edit `index.html` for SEO and social sharing

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Project Images

Replace the placeholder Unsplash image URLs in `src/components/Projects.tsx` with your actual project screenshots. You can:
- Add images to `public/` folder and reference them as `/image-name.jpg`
- Use external URLs
- Use a service like Cloudinary or Imgix

## Performance Optimization

- Images are loaded lazily
- Code splitting with React lazy loading (can be added)
- Optimized bundle size with Vite
- CSS is purged in production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

