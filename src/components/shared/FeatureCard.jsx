import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-snf-green rounded-lg flex items-center justify-center">
          <Icon size={28} className="text-white" />
        </div>
      </div>
      <h3 className="font-bold text-lg text-snf-green mb-2">{title}</h3>
      <p className="text-snf-gray-dark text-sm">{description}</p>
    </div>
  );
}
