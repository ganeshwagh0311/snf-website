import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.images || ['https://via.placeholder.com/300x300?text=Product'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 h-full flex flex-col">
      {/* Image Carousel */}
      <div className="relative bg-snf-gray h-48 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/75 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs bg-black/50 px-2 py-1 rounded">
              {currentImageIndex + 1}/{images.length}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-snf-green text-lg">{product.name}</h3>
          {product.category && (
            <span className="text-xs bg-snf-green text-white px-2 py-1 rounded-full">
              {product.category}
            </span>
          )}
        </div>
        
        <p className="text-snf-gray-dark text-sm mb-4 flex-grow">
          {product.description}
        </p>

        {product.price && (
          <div className="mb-4">
            <span className="text-lg font-bold text-snf-green">₹{product.price}</span>
          </div>
        )}

        <button className="w-full bg-snf-green text-white py-2 rounded-lg hover:bg-snf-green-dark transition-colors font-semibold">
          {t('products.viewDetails')}
        </button>
      </div>
    </div>
  );
}
