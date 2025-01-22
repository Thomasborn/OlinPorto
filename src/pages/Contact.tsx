import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';

function Contact() {
  const { language } = useLanguageStore();

  const content = {
    en: {
      title: "Get in Touch",
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
        submit: "Submit",
      },
    },
    id: {
      title: "Hubungi Kami",
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
        submit: "Kirim",
      },
    },
  };

  const localizedContent = content[language];

  return (
    <section className="min-h-screen py-24 pt-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-900 mb-12 animate-slide-up">
          {localizedContent.title}
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-all">
          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${localizedContent.emailAddress}`}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <Mail size={24} className="text-purple-700" />
              </div>
              <div>
                <p className="font-semibold text-purple-900">{localizedContent.email}</p>
                <p className="text-purple-700">{localizedContent.emailAddress}</p>
              </div>
            </a>
            <a
              href={`tel:${localizedContent.phoneNumber}`}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <Phone size={24} className="text-purple-700" />
              </div>
              <div>
                <p className="font-semibold text-purple-900">{localizedContent.phone}</p>
                <p className="text-purple-700">{localizedContent.phoneNumber}</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/carolinerisyab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <Linkedin size={24} className="text-purple-700" />
              </div>
              <div>
                <p className="font-semibold text-purple-900">{localizedContent.linkedin}</p>
                <p className="text-purple-700">{localizedContent.linkedinProfile}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition-colors group">
              <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                <MapPin size={24} className="text-purple-700" />
              </div>
              <div>
                <p className="font-semibold text-purple-900">{localizedContent.location}</p>
                <p className="text-purple-700">{localizedContent.locationDetails}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-purple-900"
              >
                {localizedContent.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-purple-900"
              >
                {localizedContent.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-purple-900"
              >
                {localizedContent.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-all"
            >
              {localizedContent.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
