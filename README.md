# SNF - Sanoip Natural Farms Website

A modern, bilingual poultry farm website built with **React + Vite**, featuring one-click English ↔ Marathi translation, responsive design, and a premium green/white color scheme.

## ✨ Key Features

- **🌐 Bilingual Support**: One-click button (EN/MR) in navbar to translate entire website
  - i18next integration for seamless translations
  - Language preference persisted in localStorage
  - All content dynamically translated across all pages

- **📱 Responsive Design**: Fully responsive mobile-first layout
  - Mobile hamburger menu with language toggle
  - Tablet and desktop optimizations
  - Touch-friendly interface

- **🎨 Modern UI/UX**:
  - Green (#22863a) and white color scheme
  - Smooth fade-in and slide-in animations
  - Auto-rotating hero image slider
  - Professional component library

- **📄 Complete Pages**:
  - **Home**: Hero slider, about section, 6 feature cards, social media
  - **About**: Company story, founder info, why poultry farming
  - **Products**: 4 categories with image carousels and filtering
  - **Connect**: Contact form, info cards, embedded Google Maps

## Tech Stack

- **Frontend Framework**: React 18+ with Vite (lightning-fast builds)
- **Build Tool**: Vite 5 (ES modules, instant HMR)
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Translations**: i18next + react-i18next
- **Icons**: Lucide React
- **Notifications**: react-hot-toast
- **Animations**: Tailwind CSS + Framer Motion ready

## One-Click Language Toggle

The website features a prominent **EN/MR language toggle button** in the navbar:

```jsx
// In Navbar.jsx - One-click translation
<button onClick={toggleLanguage}>
  <Globe size={18} />
  <span>{i18n.language === 'en' ? 'EN' : 'MR'}</span>
</button>
```

- Displays current language (EN/MR) with globe icon
- Instantly translates all page content
- Language preference saved to localStorage for persistence
- Available on all pages and devices

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or pnpm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server with Vite HMR
npm run dev

# Open browser to http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── shared/              # Reusable components
│   │   ├── Navbar.jsx       # Navigation with language toggle
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── FeatureCard.jsx
│   └── home/                # Home page sections
│       ├── Hero.jsx         # Auto-rotating slider
│       ├── About.jsx
│       ├── Features.jsx     # 6 feature cards
│       └── Social.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx         # Category filtering
│   └── Connect.jsx          # Contact form + map
├── i18n/
│   ├── config.js            # i18next setup
│   └── locales/
│       ├── en.json          # English translations
│       └── mr.json          # Marathi translations
├── App.jsx                  # Router setup
└── main.jsx
```

## Translation System

All content is managed through translation JSON files. To add or update content:

**English** - `src/i18n/locales/en.json`:
```json
{
  "nav": {
    "home": "Home",
    "contact": "Contact Now"
  }
}
```

**Marathi** - `src/i18n/locales/mr.json`:
```json
{
  "nav": {
    "home": "होम",
    "contact": "आता संपर्क करा"
  }
}
```

Access translations in components:
```jsx
const { t } = useTranslation();
<h1>{t('home.hero.title')}</h1>
```

## Color Scheme

The website uses a professional green and white palette optimized for agricultural business:

```
Primary Green:    #22863a
Light Green:      #2ea043
Dark Green:       #1a5e2f
White:            #ffffff
Light Gray:       #f8f9fa
Dark Gray:        #333333
```

## Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  snf: {
    green: "#22863a",
    "green-light": "#2ea043",
    "green-dark": "#1a5e2f",
  }
}
```

### Update Product Categories
Edit `src/pages/Products.jsx` - modify the `products` object with your items.

### Add More Languages
1. Create new translation file: `src/i18n/locales/[lang].json`
2. Update i18n config to include new language
3. Add language option to navbar toggle

### Modify Navigation
Edit `src/components/shared/Navbar.jsx` to customize menu items and structure.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## Performance Features

- ⚡ **Vite**: Sub-second HMR during development
- 📦 **Code Splitting**: Automatic route-based splitting
- 🖼️ **Image Optimization**: Lazy loading ready
- 🎯 **Tree Shaking**: Unused code automatically removed
- 🔍 **SEO Ready**: Semantic HTML, metadata management

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## License

This project is proprietary to SNF - Sanoip Natural Farms.
