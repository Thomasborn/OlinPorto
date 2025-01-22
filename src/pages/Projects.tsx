import React from 'react';
import { ExternalLink, Layout, ShoppingCart } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';

function Projects() {
  const { language } = useLanguageStore();

  const content = {
    en: {
      title: "Projects",
      projects: [
        {
          title: "UI Design Project",
          description: "Developed a user interface focusing on usability and user experience principles.",
          tags: ["UI/UX", "Design Principles", "User Research"]
        },
        {
          title: "POS & Inventory System",
          description:
            "Designed and developed a web-based Point of Sale (POS) and inventory management system with features like product categorization, transaction management, and stock reporting.",
          tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CI 4", "Bootstrap"]
        }
      ]
    },
    id: {
      title: "Proyek",
      projects: [
        {
          title: "Proyek Desain UI",
          description: "Mengembangkan antarmuka pengguna dengan fokus pada prinsip kegunaan dan pengalaman pengguna.",
          tags: ["UI/UX", "Prinsip Desain", "Riset Pengguna"]
        },
        {
          title: "Sistem POS & Inventaris",
          description:
            "Merancang dan mengembangkan sistem Point of Sale (POS) berbasis web dan manajemen inventaris dengan fitur seperti kategorisasi produk, manajemen transaksi, dan pelaporan stok.",
          tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "CI 4", "Bootstrap"]
        }
      ]
    }
  };

  const projects = content[language].projects;

  return (
    <section className="min-h-screen py-24 pt-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-900 mb-12 animate-slide-up">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${index === 0
                      ? "images/ui.png"
                      : "images/ka.png"
                    })`
                  }}
                />
                <div className="absolute inset-0 bg-purple-900/30 group-hover:bg-purple-900/40 transition-colors" />
                <div className="absolute top-4 left-4">
                  {index === 0 ? (
                    <Layout className="w-12 h-12 text-purple-600" />
                  ) : (
                    <ShoppingCart className="w-12 h-12 text-purple-600" />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
