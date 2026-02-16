import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-snf-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('about.hero.title')}</h1>
          <p className="text-xl text-gray-100">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Founder"
              className="rounded-lg shadow-lg h-80 object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-snf-green mb-6">{t('about.owner.title')}</h2>
              <p className="text-snf-gray-dark leading-relaxed text-lg">
                {t('about.owner.message')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-snf-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-snf-green mb-6">{t('about.story.title')}</h2>
          <p className="text-snf-gray-dark text-lg max-w-3xl mx-auto leading-relaxed">
            {t('about.story.description')}
          </p>
        </div>
      </section>

      {/* Why Poultry Farming */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-snf-green mb-6">{t('about.why.title')}</h2>
              <p className="text-snf-gray-dark leading-relaxed text-lg">
                {t('about.why.description')}
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-snf-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-snf-gray-dark">Sustainable and profitable business model</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-snf-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-snf-gray-dark">Growing demand for quality poultry products</span>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-snf-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-snf-gray-dark">Expert support and training available</span>
                </div>
              </div>
            </div>
            <img
              src="/about/about2.png"
              alt="Poultry Farming"
              className="rounded-lg shadow-lg h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-snf-green text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Poultry Journey?</h2>
          <p className="text-lg mb-8 text-gray-100">
            Get expert guidance and premium products to build your successful poultry farm
          </p>
          <a
            href="/connect"
            className="inline-block px-8 py-3 bg-white text-snf-green font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}
