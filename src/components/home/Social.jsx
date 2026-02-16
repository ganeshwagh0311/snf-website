import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Youtube } from 'lucide-react';

export default function Social() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-snf-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-snf-green mb-12">
          {t('home.social.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-snf-green mb-2">
              {t('home.social.instagram')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">Follow our daily farm updates</p>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold"
            >
              Follow @SNFFarms
            </a>
          </div>

          {/* YouTube */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <Youtube size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-snf-green mb-2">
              {t('home.social.youtube')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">Watch our farming tutorials</p>
            <a
              href="#"
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
