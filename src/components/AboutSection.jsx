
import React from 'react';
import { CheckCircle, Award, Shield } from 'lucide-react';
import aboutDanilo from '@/assets/about-danilo.jpg';

const AboutSection = () => {
  const badges = [
    { icon: Award, text: 'Acreditado' },
    { icon: Shield, text: 'Garantizado' },
    { icon: CheckCircle, text: 'Profesional' }
  ];

  return (
    <section className="py-16 bg-white" id="sobre-mi">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutDanilo}
              alt="Técnico profesional Danilo Oliva Ortega"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover object-top border-4 border-[#ECF0F1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/50 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              Sobre Mí
            </h2>
            <p className="text-[#2C3E50]/80 text-lg leading-relaxed mb-8">
              Técnico en Automatización y Control acreditado con experiencia en mantención y reparación de electrodomésticos a domicilio. Especializado en aire acondicionado, paneles solares, equipos con motores eléctricos e instalaciones menores. Todos mis trabajos están garantizados y realizados con profesionalismo y confianza.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#ECF0F1] border border-[#BDC3C7] rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-[#00BCD4] hover:shadow-md transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-[#00BCD4] mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[#2C3E50] font-semibold">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
