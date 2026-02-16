import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-snf-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">{t('footer.company')}</h3>
            <p className="text-gray-200 text-sm">{t('footer.tagline')}</p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-snf-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-snf-green-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-snf-green-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold">{t('footer.links')}</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/" className="hover:text-snf-green-light transition-colors">{t('nav.home')}</a></li>
              <li><a href="/about" className="hover:text-snf-green-light transition-colors">{t('nav.about')}</a></li>
              <li><a href="/products" className="hover:text-snf-green-light transition-colors">{t('nav.products')}</a></li>
              <li><a href="/connect" className="hover:text-snf-green-light transition-colors">{t('nav.connect')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold">{t('connect.info.phone')}</h4>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@snffarms.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1" />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-bold">{t('connect.info.hours')}</h4>
            <div className="space-y-2 text-sm text-gray-200">
              <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
              <div>Sat: 9:00 AM - 2:00 PM</div>
              <div>Sun: Closed</div>
              <div className="pt-2 text-xs border-t border-gray-400 mt-4">
                24/7 Emergency Support Available
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 pt-8">
          <div className="text-center text-sm text-gray-200">
            <p>
              &copy; {currentYear} {t('footer.company')}. {t('footer.copyright')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
