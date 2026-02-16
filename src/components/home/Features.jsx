import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Users, Leaf, Award, BookOpen, Truck } from 'lucide-react';
import FeatureCard from '../shared/FeatureCard';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      title: t('home.features.quality'),
      description: t('home.features.qualityDesc'),
    },
    {
      icon: Zap,
      title: t('home.features.support'),
      description: t('home.features.supportDesc'),
    },
    {
      icon: Leaf,
      title: t('home.features.sustainable'),
      description: t('home.features.sustainableDesc'),
    },
    {
      icon: Users,
      title: t('home.features.experience'),
      description: t('home.features.experienceDesc'),
    },
    {
      icon: BookOpen,
      title: t('home.features.training'),
      description: t('home.features.trainingDesc'),
    },
    {
      icon: Truck,
      title: t('home.features.delivery'),
      description: t('home.features.deliveryDesc'),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-snf-green mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-snf-gray-dark text-lg max-w-2xl mx-auto">
            Premium quality poultry products backed by expert support and sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="animate-slideInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
