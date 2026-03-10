
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2C3E50] shadow-lg py-2' : 'bg-[#2C3E50]/95 py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')} 
            className="group"
          >
            <Logo 
              className="transform group-hover:scale-105 transition-transform duration-300" 
              imageClassName={isScrolled ? "h-10 md:h-16" : "h-12 md:h-24"}
              textClassName={isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-white hover:text-[#00BCD4] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/56974962358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00BCD4] transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>
            <Button 
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-[#00BCD4] hover:bg-[#0097A7] text-white font-semibold px-6 transition-colors duration-300"
            >
              Solicitar Servicio
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:text-[#00BCD4] transition-colors"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-[#34495E] pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-white hover:text-[#00BCD4] transition-colors duration-300 font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/56974962358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-[#00BCD4] transition-colors duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp (+56 9 7496-2358)</span>
            </a>
            <Button 
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="w-full bg-[#00BCD4] hover:bg-[#0097A7] text-white font-semibold py-6 text-lg transition-colors duration-300"
            >
              Solicitar Servicio
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
