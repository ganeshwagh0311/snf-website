import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/shared/ProductCard';

export default function Products() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('chicks');

  const products = {
    chicks: [
      {
        id: 1,
        name: 'Broiler Chicks',
        category: 'Poultry',
        description: 'High-quality broiler chicks with excellent growth rate',
        price: 25,
        images: ['https://images.unsplash.com/photo-1581092161562-40038e57c0e0?w=300&h=300&fit=crop'],
      },
      {
        id: 2,
        name: 'Layer Chicks',
        category: 'Poultry',
        description: 'Premium layer chicks for egg production',
        price: 20,
        images: ['https://images.unsplash.com/photo-1516160091661-bb44562f50ba?w=300&h=300&fit=crop'],
      },
    ],
    medicines: [
      {
        id: 3,
        name: 'Poultry Antibiotic Mix',
        category: 'Medicine',
        description: 'Effective antibiotic solution for common poultry diseases',
        price: 450,
        images: ['https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=300&h=300&fit=crop'],
      },
      {
        id: 4,
        name: 'Vitamin & Mineral Supplement',
        category: 'Medicine',
        description: 'Complete nutritional supplement for poultry health',
        price: 350,
        images: ['https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=300&h=300&fit=crop'],
      },
    ],
    feed: [
      {
        id: 5,
        name: 'Broiler Starter Feed',
        category: 'Feed',
        description: '20kg bag of premium broiler starter feed',
        price: 580,
        images: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd64b57?w=300&h=300&fit=crop'],
      },
      {
        id: 6,
        name: 'Layer Feed',
        category: 'Feed',
        description: '25kg bag of enriched layer feed for egg production',
        price: 620,
        images: ['https://images.unsplash.com/photo-1599599810694-b5ac4dd64b57?w=300&h=300&fit=crop'],
      },
    ],
    equipment: [
      {
        id: 7,
        name: 'Automatic Feeder',
        category: 'Equipment',
        description: 'Stainless steel automatic feeder with capacity control',
        price: 2500,
        images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop'],
      },
      {
        id: 8,
        name: 'Water Cooler System',
        category: 'Equipment',
        description: 'Efficient cooling system for poultry water management',
        price: 3200,
        images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop'],
      },
    ],
  };

  const categories = [
    { key: 'chicks', label: t('products.categories.chicks') },
    { key: 'medicines', label: t('products.categories.medicines') },
    { key: 'feed', label: t('products.categories.feed') },
    { key: 'equipment', label: t('products.categories.equipment') },
  ];

  const currentProducts = products[activeCategory] || [];

  return (
    <main className="pt-16 min-h-screen bg-snf-gray">
      {/* Hero */}
      <section className="bg-snf-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('products.title')}</h1>
          <p className="text-xl text-gray-100">{t('products.subtitle')}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-snf-green text-white shadow-lg'
                    : 'bg-white text-snf-green hover:bg-snf-green hover:text-white border border-snf-green'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
