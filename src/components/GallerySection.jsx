
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1535116759413-75a497be0db4',
      title: 'Instalación de Aire Acondicionado',
      description: 'Instalación profesional de sistema de climatización'
    },
    {
      url: 'https://images.unsplash.com/photo-1699974783477-74e9ab7546a4',
      title: 'Mantención de AC',
      description: 'Servicio de mantención y limpieza de equipos'
    },
    {
      url: 'https://images.unsplash.com/photo-1503445664549-440975e7aaf8',
      title: 'Paneles Solares',
      description: 'Instalación de sistema de energía solar'
    },
    {
      url: 'https://images.unsplash.com/photo-1660330589505-9a433a742a7b',
      title: 'Instalación Solar',
      description: 'Montaje profesional de paneles fotovoltaicos'
    },
    {
      url: 'https://images.unsplash.com/photo-1676210132787-7ed33de174d6',
      title: 'Reparación de Electrodomésticos',
      description: 'Diagnóstico y reparación de equipos del hogar'
    },
    {
      url: 'https://images.unsplash.com/photo-1676210134188-4c05dd172f89',
      title: 'Servicio Técnico',
      description: 'Reparación especializada de electrodomésticos'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
      title: 'Trabajo Eléctrico',
      description: 'Instalaciones y reparaciones eléctricas'
    },
    {
      url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a',
      title: 'Técnico en Acción',
      description: 'Servicio profesional a domicilio'
    }
  ];

  return (
    <section className="py-16 bg-[#ECF0F1]" id="galeria">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-[#2C3E50]/70 text-lg max-w-2xl mx-auto">
            Algunos de nuestros trabajos realizados con éxito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80 bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-[#2C3E50]/60 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="border-l-4 border-[#00BCD4] pl-4">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
