import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-snf-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/about/about1.png"
              alt="About SNF"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="animate-slideInUp">
            <h2 className="text-3xl font-bold text-snf-green mb-4">
              {t('home.about.title')}
            </h2>
            <p className="text-snf-gray-dark leading-relaxed mb-6">
              {t('home.about.description')}
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-snf-green shadow-md">
              <p className="text-snf-green font-bold">
                ✓ {t('home.about.highlight')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
