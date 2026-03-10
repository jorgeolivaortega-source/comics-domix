
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Logo from './Logo.jsx';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 border-t border-[#34495E]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo className="scale-90 origin-left" />
            </div>
            <p className="text-gray-300 mb-4">
              Servicios de Mantención y Reparación de Electrodomésticos
            </p>
            <p className="text-[#00BCD4] text-sm font-medium">
              Todos nuestros trabajos están garantizados y realizados con profesionalismo
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00BCD4] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Linares y Talca, Región del Maule</p>
                  <p className="text-gray-400 text-sm">Zona de servicio: Linares, Talca y alrededores</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                <a 
                  href="https://wa.me/56974962358" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00BCD4] transition-colors"
                >
                  +56 9 7496-2358
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                <a 
                  href="mailto:domix.servicios@gmail.com"
                  className="text-gray-300 hover:text-[#00BCD4] transition-colors"
                >
                  domix.servicios@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#34495E] p-3 rounded-full hover:bg-[#00BCD4] hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#34495E] p-3 rounded-full hover:bg-[#00BCD4] hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/danilo-oliva-ortega-b76225378/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#34495E] p-3 rounded-full hover:bg-[#00BCD4] hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/56974962358" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#34495E] p-3 rounded-full hover:bg-[#00BCD4] hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#34495E] mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DOMI X - Danilo Oliva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
