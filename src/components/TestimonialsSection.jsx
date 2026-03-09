
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      service: 'Instalación de Aire Acondicionado',
      rating: 5,
      comment: 'Excelente trabajo en la instalación de mi aire acondicionado. Danilo es muy profesional y cumplidor. Recomendado 100%'
    },
    {
      name: 'Carlos Mendoza',
      service: 'Reparación de Refrigerador',
      rating: 5,
      comment: 'Reparó mi refrigerador en menos de una hora. Muy eficiente y de confianza. Volvería a contratarlo sin dudarlo'
    },
    {
      name: 'Patricia Rodríguez',
      service: 'Instalación de Paneles Solares',
      rating: 5,
      comment: 'Instaló mis paneles solares con gran profesionalismo. Explica todo el proceso y da garantía en sus trabajos'
    },
    {
      name: 'Roberto Silva',
      service: 'Reparación de Lavadora',
      rating: 5,
      comment: 'Técnico muy capacitado, resolvió el problema de mi lavadora de forma rápida y profesional'
    },
    {
      name: 'Alejandra Flores',
      service: 'Mantención Preventiva',
      rating: 5,
      comment: 'Servicio de mantención excelente. Danilo es puntual, profesional y muy amable. Recomendado'
    }
  ];

  return (
    <section className="py-16 bg-[#2C3E50]" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonios
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Lo que dicen nuestros clientes satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#34495E] rounded-xl p-8 shadow-lg border border-[#2C3E50] hover:border-[#00BCD4] hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00BCD4] text-[#00BCD4]" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Client Info */}
              <div className="border-t border-[#2C3E50] pt-4">
                <p className="text-white font-semibold mb-1">
                  {testimonial.name}
                </p>
                <p className="text-[#00BCD4] text-sm">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
