import React from "react";
import { useLanguageStore } from "../store/languageStore";

const LogoIso = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 6L12 18" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 9L17 15" stroke="currentColor" strokeWidth="2"/>
    <path d="M17 9L7 15" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const LogoPowerBI = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M3 3H21V21H3V3Z" fill="currentColor"/>
    <path d="M6 8V16M10 10V16M14 12V16M18 6V16" stroke="white" strokeWidth="2"/>
  </svg>
);

const LogoFigma = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2H8.5C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 9H8.5C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 16H8.5C6.567 16 5 17.567 5 19.5C5 21.433 6.567 23 8.5 23C10.433 23 12 21.433 12 19.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 9H15.5C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16H12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const Logo3DVista = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const LogoVirtualTour = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M21 7.5V16.5M3 7.5L12 12L21 7.5L12 3L3 7.5Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 16.5L12 21L21 16.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12L12 16.5L21 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const LogoToefl = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 9H17M7 12H17M7 15H13" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

interface SkillContent {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface EducationDetails {
  degree: string;
  university: string;
  gpa: string;
  duration: string;
}

function SkillCard({ content }: { content: SkillContent }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-xl group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="flex items-center gap-4 relative z-10">
        <div className="p-3 bg-purple-500 text-white rounded-full shadow-lg">
          {content.icon}
        </div>
        <h4 className="text-xl font-bold text-purple-900 dark:text-purple-200">
          {content.title}
        </h4>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-4 relative z-10">
        {content.description}
      </p>
      <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-600 rounded-full blur-xl opacity-40 
        group-hover:bottom-4 group-hover:right-4 group-hover:blur-2xl group-hover:opacity-60 transition-all duration-500"></div>
    </div>
  );
}

function EducationCard({ details }: { details: EducationDetails }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transform transition-transform hover:-translate-y-2 hover:shadow-xl group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-600 to-purple-900 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="flex items-center gap-4 relative z-10">
        <div className="p-3 bg-purple-500 text-white rounded-full shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 14H16M12 10V18" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <h4 className="text-2xl font-semibold text-purple-900 dark:text-purple-200">
          {details.degree}
        </h4>
      </div>
      <p className="text-xl text-purple-700 dark:text-purple-300 mt-2 relative z-10">
        {details.university}
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 relative z-10">
        {details.gpa}
      </p>
      <p className="text-base text-gray-500 dark:text-gray-400 relative z-10">
        {details.duration}
      </p>
      <div className="absolute -top-10 -left-10 w-36 h-36 bg-purple-500 rounded-full blur-3xl opacity-20 
        group-hover:top-4 group-hover:left-4 group-hover:blur-lg group-hover:opacity-50 transition-all duration-500"></div>
    </div>
  );
}

function Skills() {
  const { language } = useLanguageStore();


  const content = {
    en: {
      title: "Skills & Achievements",
      skills: [
        { 
          title: "ISO/IEC 27001:2013", 
          description: "Information Security Management Systems", 
          icon: <LogoIso /> 
        },
        { 
          title: "Microsoft Power BI", 
          description: "Data visualization and business intelligence tool", 
          icon: <LogoPowerBI /> 
        },
        { 
          title: "Figma", 
          description: "UI/UX design tool for creating prototypes and designs", 
          icon: <LogoFigma /> 
        },
        { 
          title: "3D Vista", 
          description: "3D Vista Software for virtual tours", 
          icon: <Logo3DVista /> 
        },
        { 
          title: "Virtual Tour Development", 
          description: "Experience in creating immersive virtual tours", 
          icon: <LogoVirtualTour /> 
        },
        { 
          title: "TOEFL ITP Certified", 
          description: "Certified English proficiency", 
          icon: <LogoToefl /> 
        },
      ] as SkillContent[],
      education: {
        degree: "Bachelor of Information System",
        university: "Universitas Atma Jaya Yogyakarta",
        gpa: "GPA: 3.64/4.00",
        duration: "2020 - 2024",
      },
    },
    id: {
      title: "Keahlian & Prestasi",
      skills: [
        { 
          title: "ISO/IEC 27001:2013", 
          description: "Sistem Manajemen Keamanan Informasi", 
          icon: <LogoIso /> 
        },
        { 
          title: "Microsoft Power BI", 
          description: "Alat visualisasi data dan intelijen bisnis", 
          icon: <LogoPowerBI /> 
        },
        { 
          title: "3D Vista", 
          description: "Perangkat Lunak 3D Vista untuk tur virtual", 
          icon: <Logo3DVista /> 
        },
        { 
          title: "Pengembangan Tur Virtual", 
          description: "Pengalaman dalam menciptakan tur virtual yang imersif", 
          icon: <LogoVirtualTour /> 
        },
        { 
          title: "Figma", 
          description: "Perangkat desain UI/UX untuk membuat prototipe dan desain", 
          icon: <LogoFigma /> 
        },
        { 
          title: "Sertifikasi TOEFL ITP", 
          description: "Sertifikat kemampuan berbahasa Inggris", 
          icon: <LogoToefl /> 
        },
      ] as SkillContent[],
      education: {
        degree: "Sarjana Sistem Informasi",
        university: "Universitas Atma Jaya Yogyakarta",
        gpa: "IPK: 3.64/4.00",
        duration: "2020 - 2024",
      },
    },
  };

  const localizedContent = content[language];

  return (
    <section className="min-h-screen py-24 pt-32 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-6">
       
        <h2 className="text-5xl font-extrabold text-purple-900 dark:text-purple-300 mb-12 text-center">
          {localizedContent.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedContent.skills.map((skill, index) => (
            <SkillCard key={index} content={skill} />
          ))}
        </div>
        <div className="mt-12">
          <EducationCard details={localizedContent.education} />
        </div>
      </div>
    </section>
  );
}

export default Skills;