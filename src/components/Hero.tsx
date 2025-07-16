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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight mt-8 sm:mt-0">
              <span className="block">Transforming</span>
              <span className="block text-secondary">Workplace Safety</span>
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
              Bridging the gap between regulatory compliance and real-world workplace safety through
              <span className="text-secondary font-semibold"> AI-powered insights</span>,
              <span className="text-secondary font-semibold"> multimedia training</span>, and
              <span className="text-secondary font-semibold"> adaptive safety ecosystems</span>.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
              <a
                href="#about"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Discover Our Vision
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                Get Started
              </a>
            </div>
          </div>

          {/* Key Statistics */}
          <div
            className={`mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className="glass-effect p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">AI-Powered</div>
              <div className="text-sm sm:text-base lg:text-lg">Intelligent Analytics</div>
            </div>
            <div className="glass-effect p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">Compliance</div>
              <div className="text-sm sm:text-base lg:text-lg">Automation</div>
            </div>
            <div className="glass-effect p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2">Dynamic</div>
              <div className="text-sm sm:text-base lg:text-lg">Safety Ecosystem</div>
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
