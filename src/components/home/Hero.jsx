import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/Hero/hero1.png',
    '/Hero/hero2.png',
    '/Hero/hero3.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen mt-16 overflow-hidden">

      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
              draggable="false"
            />
          </div>
        ))}

        {/* Lighter Gradient Overlay (Reduced Blur Effect Look) */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
            {t('home.hero.title')}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-lg">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-3 bg-snf-green hover:bg-snf-green-dark text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('home.hero.cta')}
            </Link>

            <Link
              to="/about"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              {t('home.hero.secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-snf-green w-8'
                : 'bg-white/60 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
