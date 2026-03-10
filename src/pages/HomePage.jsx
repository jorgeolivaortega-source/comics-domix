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
        <title>DOMI X | Danilo Oliva - Servicios de Mantención y Reparación</title>
        <meta name="description" content="Técnico en Automatización y Control acreditado. Servicios profesionales de mantención y reparación de electrodomésticos, aire acondicionado, paneles solares e instalaciones menores en Linares, Región del Maule." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-12" id="inicio">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundAttachment: 'fixed'
      }}>
          {/* Branding Overlays */}
          <div className="absolute inset-0 bg-[#00BCD4]/26 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/70 via-[#2C3E50]/55 to-[#2C3E50]/72"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Servicio técnico en Linares,<br />
            <span className="text-[#00BCD4]">rápido y sin enredos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto drop-shadow-md">
            Te explicamos todo en simple, llegamos a tiempo y dejamos tu equipo
            funcionando con respaldo real.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/56974962358?text=Hola%2C%20quiero%20solicitar%20una%20visita%20t%C3%A9cnica" target="_blank" rel="noopener noreferrer" className="bg-[#00BCD4] hover:bg-[#0097A7] text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              Solicitar visita
            </a>
            <a href="https://wa.me/56974962358?text=Hola%2C%20quiero%20hablar%20por%20WhatsApp" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white text-white px-12 py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
              Hablar por WhatsApp
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
