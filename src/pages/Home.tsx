import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import ThreeDModel from '../components/3DModel';
import { useLanguageStore } from '../store/languageStore';

function Home() {
  const { language } = useLanguageStore();

  const content = {
    en: {
      contact: "Contact Me",
      viewProfile: "View Profile"
    },
    id: {
      contact: "Hubungi Saya",
      viewProfile: "Lihat Profil"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4')] bg-cover bg-fixed bg-center opacity-10 dark:opacity-5"
      />
      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <ProfileCard />
            <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
              <Link 
                to="/contact"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
              >
                <Mail size={20} />
                <span>{content[language].contact}</span>
              </Link>
              <a 
                href="https://www.linkedin.com/in/carolinerisyab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all"
              >
                <Linkedin size={20} />
                <span>{content[language].viewProfile}</span>
              </a>
            </div>
          </div>
          <div className="animate-fade-in-delay">
            <ThreeDModel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;