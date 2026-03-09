import React from 'react';
import { AirVent, Sun, Wrench, Settings, Zap } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    icon: AirVent,
    title: 'Reparación de Aire Acondicionado',
    description: 'Instalación, mantención y reparación de sistemas de aire acondicionado residenciales y comerciales.'
  }, {
    icon: Sun,
    title: 'Instalación de Paneles Solares',
    description: 'Instalación profesional de paneles solares para ahorro energético y sustentabilidad.'
  }, {
    icon: Wrench,
    title: 'Reparación de Electrodomésticos',
    description: 'Reparación de refrigeradores, lavadoras, secadoras y otros electrodomésticos del hogar.'
  }, {
    icon: Settings,
    title: 'Mantención Preventiva',
    description: 'Servicio de mantención preventiva para prolongar la vida útil de tus equipos.'
  }, {
    icon: Zap,
    title: 'Instalaciones Menores',
    description: 'Instalaciones eléctricas menores, conexiones y reparaciones de sistemas eléctricos.'
  }];
  return <section className="py-16 bg-[#2C3E50] relative overflow-hidden" id="servicios">
      {/* Background Image Accent */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1601190921388-c2ae2f7c5278)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis Servicios
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ofrezco  una amplia gama de servicios profesionales para el hogar y la empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="bg-[#34495E] rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#2C3E50] hover:border-[#00BCD4] group">
                <div className="bg-[#2C3E50] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00BCD4]/20 transition-colors">
                  <Icon className="w-8 h-8 text-[#00BCD4]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default ServicesSection;
