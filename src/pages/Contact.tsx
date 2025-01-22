import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';

type Language = 'en' | 'id';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Use language from the store instead of passing it as a prop
  const language = useLanguageStore(state => state.language);
  // const setLanguage = useLanguageStore(state => state.setLanguage);

  const content: Record<Language, { 
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
    emailAddress: string;
    phoneNumber: string;
    linkedinProfile: string;
    locationDetails: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  }> = {
    en: {
      title: "Get in Touch",
      subtitle: "Let's start a conversation",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      location: "Location",
      emailAddress: "risyacaroline@gmail.com",
      phoneNumber: "082255615257",
      linkedinProfile: "carolinerisyab",
      locationDetails: "BalikPapan, Indonesia",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
      },
    },
    id: {
      title: "Hubungi Kami",
      subtitle: "Mari mulai percakapan",
      email: "Surel",
      phone: "Telepon",
      linkedin: "LinkedIn",
      location: "Lokasi",
      emailAddress: "risyacaroline@gmail.com",
      phoneNumber: "082255615257",
      linkedinProfile: "carolinerisyab",
      locationDetails: "BalikPapan, Indonesia",
      form: {
        name: "Nama",
        email: "Surel",
        message: "Pesan",
        submit: "Kirim Pesan",
      },
    },
  };

  const localizedContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const ContactCard = ({ icon: Icon, title, content, href, className = '' }: { 
    icon: React.ElementType; 
    title: string; 
    content: string; 
    href?: string; 
    className?: string;
  }) => (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-xl bg-white p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-800/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center gap-3 sm:gap-4">
        <div className="rounded-full bg-purple-100 p-2 sm:p-3 transition-colors duration-300 group-hover:bg-purple-200">
          <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-purple-700" />
        </div>
        <div>
          <h3 className="font-semibold text-purple-900 text-sm sm:text-base">{title}</h3>
          <p className="text-purple-700 text-xs sm:text-sm">{content}</p>
        </div>
      </div>
    </a>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-900 mb-2 sm:mb-4 animate-fade-in">
            {localizedContent.title}
          </h2>
          <p className="text-purple-600 text-sm sm:text-base lg:text-lg animate-fade-in animation-delay-200">
            {localizedContent.subtitle}
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
            <ContactCard
              icon={Mail}
              title={localizedContent.email}
              content={localizedContent.emailAddress}
              href={`mailto:${localizedContent.emailAddress}`}
            />
            <ContactCard
              icon={Phone}
              title={localizedContent.phone}
              content={localizedContent.phoneNumber}
              href={`tel:${localizedContent.phoneNumber}`}
            />
            <ContactCard
              icon={Linkedin}
              title={localizedContent.linkedin}
              content={localizedContent.linkedinProfile}
              href="https://www.linkedin.com/in/carolinerisyab"
            />
            <ContactCard
              icon={MapPin}
              title={localizedContent.location}
              content={localizedContent.locationDetails}
            />
          </div>

          <div className="rounded-xl bg-white p-4 sm:p-6 lg:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-900">
                    {localizedContent.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-purple-200 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-900">
                    {localizedContent.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-purple-200 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-900">
                    {localizedContent.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-purple-200 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-purple-600 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl disabled:opacity-70"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      {localizedContent.form.submit}
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
