import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'mr' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.connect'), path: '/connect' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
           <img
  src="/logo/logo.png"
  alt="SNF Logo"
  className="w-28 h-34 object-contain"
/>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-snf-gray-dark hover:text-snf-green transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-snf-gray hover:bg-snf-green hover:text-white rounded-lg transition-all duration-300"
            >
              <Globe size={18} />
              <span className="font-semibold text-sm">
                {i18n.language === 'en' ? 'EN' : 'MR'}
              </span>
            </button>

            <Link
              to="/connect"
              className="hidden sm:block px-6 py-2 bg-snf-green text-white rounded-lg hover:bg-snf-green-dark transition-colors font-semibold"
            >
              {t('nav.contact')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-snf-green"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-snf-gray-dark hover:bg-snf-gray hover:text-snf-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/connect"
              className="block m-4 px-4 py-2 bg-snf-green text-white rounded-lg hover:bg-snf-green-dark transition-colors text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
