import React from 'react';
import { useLanguageStore } from '../store/languageStore';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
      className="px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors font-medium"
    >
      {language === 'en' ? 'ID' : 'EN'}
    </button>
  );
}