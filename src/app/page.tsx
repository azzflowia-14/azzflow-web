"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Zap, MessageCircle, Clock, TrendingUp, Settings, CheckCircle, Instagram, Send } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappUrl = "https://wa.me/5493407510895";

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="AzzFlow"
              width={220}
              height={85}
              className="h-20 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-electric transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-electric transition-colors">Servicios</a>
            <a href="#nosotros" className="text-gray-700 hover:text-electric transition-colors">Nosotros</a>
            <a href="#beneficios" className="text-gray-700 hover:text-electric transition-colors">Beneficios</a>
            <a href="#contacto" className="text-gray-700 hover:text-electric transition-colors">Contacto</a>
          </nav>
          <Button
            className="bg-electric hover:bg-blue-700 text-white"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              Automatizamos tu negocio
              <span className="block text-electric">con Inteligencia Artificial</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Chatbots que venden por WhatsApp 24/7, automatización de procesos y asistentes virtuales inteligentes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-electric hover:bg-blue-700 text-white px-8 py-4 text-lg animate-slide-up"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablá con nosotros en WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-electric text-electric hover:bg-electric hover:text-white px-8 py-4 text-lg animate-slide-up"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver servicios
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-bounce-gentle">
            <Bot className="w-24 h-24 text-electric mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-slide-up">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 animate-slide-up">
              Soluciones inteligentes para transformar tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:border-electric transition-all duration-300 hover:shadow-lg animate-slide-in-left">
              <CardHeader className="text-center">
                <Bot className="w-16 h-16 text-electric mx-auto mb-4" />
                <CardTitle className="text-2xl text-black">🤖 Chatbots personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center">
                  Atienden clientes y venden por WhatsApp 24/7. Respuestas automáticas inteligentes que convierten visitantes en ventas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-electric transition-all duration-300 hover:shadow-lg animate-slide-up">
              <CardHeader className="text-center">
                <Zap className="w-16 h-16 text-electric mx-auto mb-4" />
                <CardTitle className="text-2xl text-black">⚡ Automatización de procesos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center">
                  Elimina tareas repetitivas, ahorra tiempo y dinero. Workflows inteligentes que optimizan tu operación.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-electric transition-all duration-300 hover:shadow-lg animate-slide-in-right">
              <CardHeader className="text-center">
                <MessageCircle className="w-16 h-16 text-electric mx-auto mb-4" />
                <CardTitle className="text-2xl text-black">💬 Asistentes virtuales inteligentes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-600 text-center">
                  Responden consultas frecuentes y mejoran la atención. IA que entiende y resuelve las necesidades de tus clientes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 animate-slide-up">
              Sobre AzzFlow
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-slide-up">
              <strong>AzzFlow es tu socio tecnológico.</strong> Creamos soluciones con IA que transforman tu negocio,
              mejoran la atención a clientes y optimizan tus procesos digitales. Nos especializamos en hacer que
              la tecnología compleja sea simple y efectiva para tu empresa.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-slide-in-left">
                <Settings className="w-12 h-12 text-electric mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Tecnología Simple</h3>
                <p className="text-gray-600">Soluciones complejas, interfaz simple</p>
              </div>
              <div className="animate-slide-up">
                <CheckCircle className="w-12 h-12 text-electric mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Resultados Garantizados</h3>
                <p className="text-gray-600">Implementación exitosa y soporte continuo</p>
              </div>
              <div className="animate-slide-in-right">
                <TrendingUp className="w-12 h-12 text-electric mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Crecimiento Sostenible</h3>
                <p className="text-gray-600">Escalamos contigo a medida que creces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-slide-up">
              ¿Por qué elegir AzzFlow?
            </h2>
            <p className="text-xl text-gray-600 animate-slide-up">
              Beneficios inmediatos para tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-in-left">
              <div className="bg-electric/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-electric" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Más ventas con atención 24/7</h3>
              <p className="text-gray-600">Tu negocio nunca duerme. Atiende y vende las 24 horas del día.</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-electric/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-electric" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Ahorro de tiempo en tareas repetitivas</h3>
              <p className="text-gray-600">Automatiza procesos manuales y enfócate en lo importante.</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-electric/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-electric" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Escalabilidad para tu negocio</h3>
              <p className="text-gray-600">Crece sin límites con sistemas que se adaptan a tu tamaño.</p>
            </div>
            <div className="text-center animate-slide-in-right">
              <div className="bg-electric/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-electric" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Implementación rápida y soporte local</h3>
              <p className="text-gray-600">Resultados en días, no meses. Soporte en tu idioma y horario.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-slide-up">
                ¿Listo para automatizar tu negocio?
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Hablamos y analizamos tu caso específico
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* WhatsApp CTA */}
              <div className="text-center animate-slide-in-left">
                <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Conversemos por WhatsApp
                </h3>
                <p className="text-gray-600 mb-6">
                  La forma más rápida de comenzar. Te respondemos al instante y analizamos tu caso.
                </p>
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </div>

              {/* Contact Form */}
              <div className="animate-slide-in-right">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-black">O envianos un mensaje</CardTitle>
                    <CardDescription className="text-gray-600">
                      Completá el formulario y te contactamos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre completo" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          placeholder="Contanos sobre tu negocio y qué te gustaría automatizar..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-electric hover:bg-blue-700 text-white"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Image
                src="/logo.png"
                alt="AzzFlow"
                width={180}
                height={70}
                className="h-14 w-auto filter invert opacity-90"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Automatización inteligente para tu negocio
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://instagram.com/azz.flow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 AzzFlow. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
