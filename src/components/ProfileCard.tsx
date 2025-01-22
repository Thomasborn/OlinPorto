import React from 'react';
import { useLanguageStore } from '../store/languageStore';

export default function ProfileCard() {
  const { language } = useLanguageStore();

  const content = {
    en: {
      role: "Information System Graduate",
      description: "Passionate about leveraging technical expertise and collaboration skills to deliver impactful solutions."
    },
    id: {
      role: "Lulusan Sistem Informasi",
      description: "Bersemangat dalam memanfaatkan keahlian teknis dan keterampilan kolaborasi untuk memberikan solusi yang berdampak."
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-900 rounded-lg p-6">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-300">
            Caroline Risya Belinda
          </h2>
          <p className="text-purple-700 dark:text-purple-400 mb-2">
            {content[language].role}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {content[language].description}
          </p>
        </div>
      </div>
    </div>
  );
}