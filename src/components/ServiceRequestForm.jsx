
import React, { useState } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const ServiceRequestForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre_completo: '',
    telefono: '',
    correo: '',
    descripcion: '',
    tipo_servicio: ''
  });

  const serviceTypes = [
    'Aire Acondicionado',
    'Paneles Solares',
    'Electrodomésticos',
    'Instalación Menor',
    'Mantención',
    'Otro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await pb.collection('service_requests').create(formData, { $autoCancel: false });
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Solicitud enviada exitosamente. Danilo se contactará pronto.",
      });

      // Reset form
      setFormData({
        nombre_completo: '',
        telefono: '',
        correo: '',
        descripcion: '',
        tipo_servicio: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive"
      });
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
              Solicitar Servicio
            </h2>
            <p className="text-[#2C3E50]/70 text-lg">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#ECF0F1] rounded-2xl p-8 shadow-xl border border-[#BDC3C7]">
            <div className="space-y-6">
              {/* Nombre Completo */}
              <div>
                <label htmlFor="nombre_completo" className="block text-[#2C3E50] font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre_completo"
                  name="nombre_completo"
                  value={formData.nombre_completo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#BDC3C7] rounded-lg text-[#2C3E50] placeholder-gray-400 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-[#2C3E50] font-semibold mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#BDC3C7] rounded-lg text-[#2C3E50] placeholder-gray-400 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-all"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              {/* Correo */}
              <div>
                <label htmlFor="correo" className="block text-[#2C3E50] font-semibold mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#BDC3C7] rounded-lg text-[#2C3E50] placeholder-gray-400 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Tipo de Servicio */}
              <div>
                <label htmlFor="tipo_servicio" className="block text-[#2C3E50] font-semibold mb-2">
                  Tipo de Servicio *
                </label>
                <select
                  id="tipo_servicio"
                  name="tipo_servicio"
                  value={formData.tipo_servicio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#BDC3C7] rounded-lg text-[#2C3E50] focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Descripción */}
              <div>
                <label htmlFor="descripcion" className="block text-[#2C3E50] font-semibold mb-2">
                  Descripción del Problema *
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-[#BDC3C7] rounded-lg text-[#2C3E50] placeholder-gray-400 focus:outline-none focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4] transition-all resize-none"
                  placeholder="Describe el problema o servicio que necesitas..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00BCD4] hover:bg-[#0097A7] text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceRequestForm;
