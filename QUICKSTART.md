# Quick Start Guide - SNF Poultry Farm Website

## Installation (2 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser - website will load at http://localhost:5173
```

## Key Features to Try

### 1. **One-Click Language Toggle**
- Click the **EN/MR** button in the top-right navbar
- Watch the entire website translate to Marathi instantly
- Click again to switch back to English
- Refresh the page - your language choice is remembered!

### 2. **Navigate All Pages**
- **Home** - Hero slider, features, social media
- **About** - Company story and vision
- **Products** - Browse 4 product categories
- **Connect** - Contact form and location map

### 3. **Responsive Design**
- Resize browser window to see mobile menu
- Try on your phone/tablet
- Mobile hamburger menu includes language toggle

### 4. **Interactive Elements**
- Hover over product cards - scales up
- Click category buttons to filter products
- Fill contact form - get success toast notification
- Product image carousels with navigation arrows

## Project Overview

```
SNF Poultry Farm Website
├── React 18 + Vite (fast builds)
├── Tailwind CSS (styling)
├── i18next (translations)
├── React Router (navigation)
└── Lucide Icons (UI)
```

## File Structure

- **`src/pages/`** - Main page components (Home, About, Products, Connect)
- **`src/components/`** - Reusable UI components
- **`src/i18n/`** - Translation files (en.json, mr.json)
- **`tailwind.config.js`** - Color and styling configuration
- **`package.json`** - Dependencies and scripts

## Common Tasks

### Add a New Product
Edit `src/pages/Products.jsx`:
```jsx
{
  id: 12,
  name: 'New Product Name',
  category: 'chicks',
  description: 'Product description',
  price: 100,
  images: ['https://image-url.jpg']
}
```

### Update Website Text
Edit translation files:
- **English**: `src/i18n/locales/en.json`
- **Marathi**: `src/i18n/locales/mr.json`

### Change Colors
Edit `tailwind.config.js` - modify the `snf` color object.

### Update Navigation Links
Edit `src/components/shared/Navbar.jsx` - modify the `navLinks` array.

## Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then `npm run dev`)

## Next Steps

1. ✅ Explore the website
2. ✅ Try the language toggle
3. ✅ Customize colors and content
4. ✅ Add your product information
5. ✅ Deploy to Vercel

## Support

For detailed documentation, see `README.md`

---

**Happy farming! 🌾**
