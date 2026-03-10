import React from 'react';
import { Wrench, Settings, Zap, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const verticales = [
    {
      icon: Wrench,
      titulo: 'Reparaciones',
      descripcion:
        'Detectamos la falla, explicamos causa y costo antes de intervenir, y reparamos con seguridad y garantía. Sin sorpresas.',
      imagen:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      ejemplos: ['Refrigeradores', 'Lavadoras y secadoras', 'Aire acondicionado'],
      cta: 'Solicitar reparación',
      waText: 'Hola, quiero solicitar una reparación técnica.',
    },
    {
      icon: Settings,
      titulo: 'Mantención',
      descripcion:
        'Mantenemos tus equipos en buen estado para prevenir fallas, reducir costos futuros y extender su vida útil.',
      imagen:
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
      ejemplos: ['Limpieza y ajuste', 'Chequeo eléctrico', 'Revisión preventiva de equipos'],
      cta: 'Agendar mantención',
      waText: 'Hola, quiero agendar una mantención preventiva.',
    },
    {
      icon: Zap,
      titulo: 'Instalación',
      descripcion:
        'Instalamos, probamos y dejamos todo operativo, con explicación clara de uso y recomendaciones de cuidado.',
      imagen:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
      ejemplos: ['Aire acondicionado', 'Paneles solares', 'Instalaciones eléctricas menores'],
      cta: 'Cotizar instalación',
      waText: 'Hola, quiero cotizar una instalación técnica.',
    },
  ];

  return (
    <section className="py-16 bg-[#2C3E50] relative overflow-hidden" id="servicios">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Servicios</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Soluciones claras en Linares y Talca para hogares y negocios: eliges el servicio, te explicamos en simple y
            resolvemos con respaldo técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {verticales.map((item, index) => {
            const Icon = item.icon;
            const waLink = `https://wa.me/56974962358?text=${encodeURIComponent(item.waText)}`;

            return (
              <article
                key={index}
                className="bg-[#34495E] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#2C3E50] hover:border-[#00BCD4]"
              >
                <img src={item.imagen} alt={item.titulo} className="w-full h-52 object-cover" loading="lazy" />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#2C3E50] w-11 h-11 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00BCD4]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">{item.titulo}</h3>
                  </div>

                  <p className="text-gray-300 mb-5 leading-relaxed">{item.descripcion}</p>

                  <ul className="space-y-2 mb-6 text-gray-200 text-sm">
                    {item.ejemplos.map((ejemplo, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00BCD4] mt-1">•</span>
                        <span>{ejemplo}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00BCD4] hover:bg-[#0097A7] text-white px-5 py-3 rounded-full font-semibold transition-all"
                  >
                    {item.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
