import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Connect() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email && formData.message) {
      toast.success(t('connect.form.success'));
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      toast.error('Please fill all fields');
    }
  }

  return (
    <main className="pt-16 min-h-screen bg-snf-gray">
      <Toaster />
      
      {/* Hero */}
      <section className="bg-snf-green text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('connect.title')}</h1>
          <p className="text-xl text-gray-100">{t('connect.subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-snf-green rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-snf-green">{t('connect.info.phone')}</h3>
                </div>
                <p className="text-snf-gray-dark">+91 98765 43210</p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-snf-green rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-snf-green">{t('connect.info.email')}</h3>
                </div>
                <p className="text-snf-gray-dark">info@snffarms.com</p>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-snf-green rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-snf-green">{t('connect.info.address')}</h3>
                </div>
                <p className="text-snf-gray-dark">SNF Farms, Maharashtra, India</p>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-snf-green rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-snf-green">{t('connect.info.hours')}</h3>
                </div>
                <div className="text-snf-gray-dark text-sm space-y-1">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-snf-green mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-snf-gray-dark font-semibold mb-2">
                    {t('connect.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-snf-green focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-snf-gray-dark font-semibold mb-2">
                    {t('connect.form.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-snf-green focus:outline-none transition-colors"
                    placeholder="Your Phone"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-snf-gray-dark font-semibold mb-2">
                    {t('connect.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-snf-green focus:outline-none transition-colors"
                    placeholder="Your Email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-snf-gray-dark font-semibold mb-2">
                    {t('connect.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-snf-green focus:outline-none transition-colors resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-snf-green text-white py-3 rounded-lg hover:bg-snf-green-dark transition-colors font-bold text-lg"
                >
                  {t('connect.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-snf-green mb-6 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8200619343234!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e1e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
