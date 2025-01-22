import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguageStore } from '../store/languageStore';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguageStore();

  const navigation = {
    en: [
      { name: 'Home', path: '/' },
      { name: 'Experience', path: '/experience' },
      { name: 'Skills', path: '/skills' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' },
    ],
    id: [
      { name: 'Beranda', path: '/' },
      { name: 'Pengalaman', path: '/experience' },
      { name: 'Keahlian', path: '/skills' },
      { name: 'Proyek', path: '/projects' },
      { name: 'Kontak', path: '/contact' },
    ]
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-purple-900 dark:text-purple-300">CRB</Link>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
            <button 
              className="md:hidden p-2 text-purple-900 dark:text-purple-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            {navigation[language].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-purple-900 dark:text-purple-300 border-b-2 border-purple-900 dark:border-purple-300'
                    : 'text-purple-600 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          {navigation[language].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20'
                  : 'text-purple-600 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;