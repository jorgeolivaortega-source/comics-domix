import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import AboutSection from '@/components/AboutSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import GallerySection from '@/components/GallerySection.jsx';
import TestimonialsSection from '@/components/TestimonialsSection.jsx';
import ServiceRequestForm from '@/components/ServiceRequestForm.jsx';
const HomePage = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <Helmet>
        <title>DOMI X | Danilo Oliva - Servicios de Mantención y Reparación</title>
        <meta name="description" content="Técnico en Automatización y Control acreditado. Servicios profesionales de mantención y reparación de electrodomésticos, aire acondicionado, paneles solares e instalaciones menores en Linares, Región del Maule." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" id="inicio">
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1621750072333-c972efe8ebbd)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#2C3E50]/85"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Servicios Profesionales de<br />
            Mantención y Reparación de<br />
            <span className="text-[#00BCD4]">Electrodomésticos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto drop-shadow-md">
            Técnico en Automatización y Control Acreditado<br />
            Todos nuestros trabajos están garantizados
          </p>
          <Button onClick={scrollToContact} className="bg-[#00BCD4] hover:bg-[#0097A7] text-white px-12 py-6 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
            Solicitar Servicio
          </Button>
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
