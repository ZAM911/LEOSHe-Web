"use client";

import { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-6 px-4">
              About <span className="text-secondary">LEOSHe</span> & Our Vision
            </h2>
            <p className="text-xl text-muted max-w-4xl mx-auto px-4 leading-relaxed">
              A UK Innovator Founder visa backed digital HSE platform transforming workplace safety through ethical innovation and Vision 2030
              alignment
            </p>
          </div>

          {/* Founder's Vision Section */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center bg-primary/20 rounded-full px-6 py-3">
                  <span className="text-primary font-semibold">🇬🇧 UK Innovator Founder • Vision 2030 Aligned</span>
                </div>
              </div>
              <h3 className="font-serif text-3xl font-bold text-center text-heading mb-6">Founder's Vision</h3>
              <blockquote className="text-center text-xl italic text-text leading-relaxed max-w-4xl mx-auto">
                "To revolutionize workplace safety through ethical innovation, leveraging cutting-edge technology to create measurable impact in
                high-risk industries. Our platform bridges the critical gap between regulatory compliance and real-world safety outcomes, aligning
                with Vision 2030's commitment to innovation and economic diversification."
              </blockquote>
              <div className="text-center mt-6">
                <div className="text-lg font-semibold text-primary">Backed by UK Innovator Founder Visa</div>
                <div className="text-muted">Recognized for exceptional innovation potential in digital HSE solutions</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} px-4`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-heading mb-4 sm:mb-6">Our Vision & Mission</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-secondary">
                  <h4 className="text-lg sm:text-xl font-bold text-heading mb-2 sm:mb-3">Vision Statement</h4>
                  <p className="text-base sm:text-lg text-text leading-relaxed italic">
                    "To become the global leader in digital HSE solutions, transforming workplace safety through technology-driven risk mitigation,
                    compliance automation, and intelligent safety benchmarking."
                  </p>
                </div>

                <p className="text-base sm:text-lg text-text leading-relaxed">
                  LEOSHe is a cutting-edge digital HSE solutions platform, serving as a one-stop shop for individuals and organizations across
                  operations, oil & gas, construction, aviation, and other industries. As an interactive solutions hub, LEOSHe provides standardized
                  and customized HSE tools, ensuring seamless compliance, workforce safety, and risk mitigation.
                </p>

                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-lg sm:text-xl font-bold text-heading mb-2 sm:mb-3">Key Objectives</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-text">Improve safety standards in high-risk industries</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-text">Enable real-time compliance tracking and reporting</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-text">Reduce workplace incidents through predictive analytics and immersive learning</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-text">Foster a culture of continuous safety improvement with AI-driven insights</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-heading">Technology-Driven Risk Mitigation</h4>
                      <p className="text-muted">Advanced AI and analytics for proactive safety management</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-heading">Compliance Automation</h4>
                      <p className="text-muted">Streamlined regulatory compliance with intelligent monitoring</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-heading">Intelligent Safety Benchmarking</h4>
                      <p className="text-muted">Data-driven insights for continuous safety improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/about-safety-team.jpg"
                    alt="Safety professionals discussing workplace safety measures"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-4">Platform Capabilities</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary">Global</div>
                        <div className="text-sm">HSE Standards</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary">AI</div>
                        <div className="text-sm">Powered Analytics</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary">Multi</div>
                        <div className="text-sm">Industry Support</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                        <div className="text-2xl font-bold text-secondary">Cloud</div>
                        <div className="text-sm">Based Platform</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 animate-float"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-20 animate-float"
                  style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
