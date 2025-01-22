import React, { useState } from "react";
import { useLanguageStore } from "../store/languageStore";
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// TypeScript interfaces
interface ToolType {
  name: string;
  icon: string;
}

interface ExperienceType {
  role: string;
  company: string;
  duration: string;
  logo: string;
  photos: string[];
  tools: ToolType[];
  responsibilities: string[];
}

interface ContentType {
  [key: string]: {
    title: string;
    experiences: ExperienceType[];
  };
}

// Modal Component
const ExperienceModal = ({ 
  selectedExperience, 
  closeModal 
}: { 
  selectedExperience: ExperienceType;
  closeModal: () => void;
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => 
      prev === selectedExperience.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? selectedExperience.photos.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto relative animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={selectedExperience.logo} 
                  alt="Company Logo" 
                  className="w-16 h-16 rounded-xl object-contain bg-gray-100 dark:bg-gray-800 p-2"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {selectedExperience.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedExperience.company}
                </p>
              </div>
            </div>
            <button 
              onClick={closeModal}
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Duration Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
            {selectedExperience.duration}
          </div>

          {/* Photo Carousel */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
            <img 
              src={selectedExperience.photos[currentPhotoIndex]} 
              alt="Experience Visual" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            {selectedExperience.photos.length > 1 && (
              <>
                <button 
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {selectedExperience.photos.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentPhotoIndex 
                          ? 'bg-white' 
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Tools Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {selectedExperience.tools.map((tool, idx) => (
                <div 
                  key={idx}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <img 
                    src={tool.icon} 
                    alt={`${tool.name} Icon`} 
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Key Responsibilities
            </h4>
            <div className="space-y-3">
              {selectedExperience.responsibilities.map((resp, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {idx + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Experience Component
const Experience = () => {
  const { language } = useLanguageStore();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);

  const content: ContentType = {
      en: {
        title: "Work Experience",
        experiences: [
          {
            role: "Student Staff - Administrator",
            company: "KPBB (Kantor Pelatihan Budaya dan Bahasa) UAJY",
            duration: "May 2023 - Aug 2024",
            logo: "https://upload.wikimedia.org/wikipedia/id/thumb/d/df/UAJY_LOGOGRAM.svg/1200px-UAJY_LOGOGRAM.svg.png",
            photos: ["/images/admin1.png", "/images/admin2.jpg", "/images/admin3.jpg"],
            tools: [
              { name: "Excel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4Xruvlj08qwI8q_oXc5luswwWjxgsIfDRg&s" },
              { name: "Google Sheets", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/1489px-Google_Sheets_2020_Logo.svg.png" },
            ],
            responsibilities: [
              "Efficiently compiled language course participant data",
              "Provided exceptional customer service and information",
            ],
          },
          {
            role: "Field Service Intern",
            company: "PT Pertamina Patra Niaga - Balikpapan",
            duration: "Sep 2023 - Jan 2024",
            logo: "https://www.shutterstock.com/image-vector/pertamina-icon-logo-art-famous-260nw-2286688511.jpg",
            photos: ["/images/intern1.jpg", "/images/intern2.jpg"],
            tools: [
              { name: "360-degree Camera", icon: "https://cdn-icons-png.flaticon.com/512/6439/6439607.png" },
              { name: "3D Vista Software", icon: "https://i2.wp.com/www.3dvista.com/wp-content/uploads/2020/07/logo_3dvista_white.png?fit=790%2C282&ssl=1" },
            ],
            responsibilities: [
              "Designed and developed a comprehensive virtual tour using 360-degree camera and 3D Vista Software",
            ],
          },
          {
            role: "Teaching Assistant",
            company: "Faculty of Industrian Technology",
            duration: "Jan 2023 - May 2023",
            logo: "https://upload.wikimedia.org/wikipedia/id/thumb/d/df/UAJY_LOGOGRAM.svg/1200px-UAJY_LOGOGRAM.svg.png",
            photos: ["/images/teaching1.jpg", "/images/teaching2.jpg"],
            tools: [
              { name: "Excel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4Xruvlj08qwI8q_oXc5luswwWjxgsIfDRg&s" },
              { name: "Zoom", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAOV2-NTJnpWkts5hYLWNHFoLJRNm-c4JJQ&s" },
            ],
            responsibilities: [
              "Recapping students' scores: Accurately recording and maintaining 120 students' scores",
              "Creating teaching materials: Assisting in the development of engaging teaching content",
            ],
          },
        ],
      },
      id: {
        title: "Pengalaman Kerja",
        experiences: [
          {
            role: "Staf Mahasiswa - Administrator",
            company: "KPBB (Kantor Pelatihan Budaya dan Bahasa) UAJY",
            duration: "Mei 2023 - Agustus 2024",
            logo: "https://upload.wikimedia.org/wikipedia/id/thumb/d/df/UAJY_LOGOGRAM.svg/1200px-UAJY_LOGOGRAM.svg.png",
            photos: ["/images/admin1.png", "/images/admin2.jpg", "/images/admin3.jpg"],
            tools: [
              { name: "Excel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4Xruvlj08qwI8q_oXc5luswwWjxgsIfDRg&s" },
              { name: "Google Sheets", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/1489px-Google_Sheets_2020_Logo.svg.png" },
            ],
            responsibilities: [
              "Mengumpulkan data peserta kursus bahasa secara efisien",
              "Memberikan layanan pelanggan dan informasi yang luar biasa",
            ],
          },
          {
            role: "Magang Layanan Lapangan",
            company: "PT Pertamina Patra Niaga - Balikpapan",
            duration: "Sep 2023 - Jan 2024",
            logo: "https://www.shutterstock.com/image-vector/pertamina-icon-logo-art-famous-260nw-2286688511.jpg",
            photos: ["/images/intern1.jpg", "/images/intern2.jpg"],
            tools: [
              { name: "360-degree Camera", icon: "https://cdn-icons-png.flaticon.com/512/6439/6439607.png" },
              { name: "3D Vista Software", icon: "https://i2.wp.com/www.3dvista.com/wp-content/uploads/2020/07/logo_3dvista_white.png?fit=790%2C282&ssl=1" },
            ],
            responsibilities: [
              "Merancang dan mengembangkan tur virtual komprehensif menggunakan kamera 360 derajat dan perangkat lunak 3D Vista",
            ],
          },
          {
            role: "Asisten Pengajar",
            company: "Fakultas Teknologi Industri",
            duration: "Jan 2023 - Mei 2023",
            logo: "https://upload.wikimedia.org/wikipedia/id/thumb/d/df/UAJY_LOGOGRAM.svg/1200px-UAJY_LOGOGRAM.svg.png",
            photos: ["/images/teaching1.jpg", "/images/teaching2.jpg"],
            tools: [
              { name: "Excel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4Xruvlj08qwI8q_oXc5luswwWjxgsIfDRg&s" },
              { name: "Zoom", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAOV2-NTJnpWkts5hYLWNHFoLJRNm-c4JJQ&s" },
            ],
            responsibilities: [
              "Mencatat nilai mahasiswa: Memastikan pencatatan nilai 120 mahasiswa dengan akurat",
              "Membuat bahan ajar: Membantu dalam pengembangan konten pengajaran yang menarik",
            ],
          },
        ],
      },
    };

  const localizedContent = content[language];

  const handleCardClick = (experience: ExperienceType) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="min-h-screen py-24 pt-32 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-300 mb-12 animate-slide-up text-center">
          {localizedContent.title}
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {localizedContent.experiences.map((experience, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 group cursor-pointer"
              onClick={() => handleCardClick(experience)}
            >
              <div className="relative">
                <img
                  src={experience.photos[0]}
                  alt={`${experience.role}`}
                  className="w-full h-48 object-cover"
                />
                <img
                  src={experience.logo}
                  alt="Company Logo"
                  className="absolute top-4 right-4 w-12 h-12 object-contain bg-white p-1 rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  {experience.role}
                </h3>
                <p className="text-purple-700 dark:text-purple-500 mb-4">
                  {experience.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal 
          selectedExperience={selectedExperience} 
          closeModal={closeModal}
        />
      )}
    </section>
  );
};

export default Experience;