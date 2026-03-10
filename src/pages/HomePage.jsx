import React from 'react';
import { Helmet } from 'react-helmet';
import AboutSection from '@/components/AboutSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import GallerySection from '@/components/GallerySection.jsx';
import TestimonialsSection from '@/components/TestimonialsSection.jsx';
import ServiceRequestForm from '@/components/ServiceRequestForm.jsx';
import heroBg from '@/assets/hero-bg-domix.jpg';

const HomePage = () => {
  return <>
      <Helmet>
        <title>Servicio técnico en Linares y Talca | DOMI X Danilo Oliva</title>
        <meta name="description" content="Servicio técnico a domicilio en Linares y Talca: reparación, mantención e instalación de electrodomésticos, aire acondicionado y paneles solares. Atención rápida, precios claros y garantía real." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-16" id="inicio">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 12%',
        backgroundAttachment: 'scroll'
      }}>
          {/* Branding Overlays */}
          <div className="absolute inset-0 bg-[#00BCD4]/26 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/70 via-[#2C3E50]/55 to-[#2C3E50]/72"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Servicio técnico a domicilio en Linares y Talca,<br />
            <span className="text-[#00BCD4]">rápido y con garantía real</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 md:mb-12 max-w-4xl mx-auto drop-shadow-md px-2">
            Reparación, mantención e instalación de electrodomésticos, aire acondicionado y paneles solares.
            Atención clara, precios transparentes y respaldo técnico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/56974962358?text=Hola%2C%20quiero%20solicitar%20una%20visita%20t%C3%A9cnica" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-[#00BCD4] hover:bg-[#0097A7] text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              Solicitar visita
            </a>
            <a href="https://wa.me/56974962358?text=Hola%2C%20quiero%20pedir%20un%20diagn%C3%B3stico%20t%C3%A9cnico" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 border border-white text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              Pedir diagnóstico
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce cursor-pointer" onClick={() => document.querySelector('#sobre-mi')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            <svg className="w-8 h-8 text-white opacity-80 hover:opacity-100 hover:text-[#00BCD4] transition-all" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Service Request Form */}
      <ServiceRequestForm />
    </>;
};
export default HomePage;
