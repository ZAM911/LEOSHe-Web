"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Background with industrial safety image and gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90"></div>
      </div>
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 py-8 sm:py-0">
        <div className="text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Founder's Vision Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <span className="text-sm font-medium">🇬🇧 UK Innovator Founder • Vision 2030 Aligned</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block">Transforming Safety Culture</span>
              <span className="block text-secondary">Through Ethical Innovation</span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
              Pioneering the future of <span className="text-secondary font-semibold">digital HSE solutions</span> with
              <span className="text-secondary font-semibold"> AI-powered analytics</span>, scalable training platforms, and
              <span className="text-secondary font-semibold"> measurable safety outcomes</span> for Vision 2030 compliance.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center px-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
              <a
                href="#platform"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Start Your Safety Audit
              </a>
              <a
                href="#innovation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                Download Innovation Brief
              </a>
            </div>
          </div>

          {/* Enhanced Key Statistics */}
          <div
            className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className="glass-effect p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">30%</div>
              <div className="text-lg font-medium">Incident Reduction</div>
            </div>
            <div className="glass-effect p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">AI-Powered</div>
              <div className="text-lg font-medium">Risk Analytics</div>
            </div>
            <div className="glass-effect p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-lg font-medium">Corporate Clients (Q1 2026)</div>
            </div>
            <div className="glass-effect p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">Vision 2030</div>
              <div className="text-lg font-medium">Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
