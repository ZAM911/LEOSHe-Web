"use client";

import { useEffect, useState, useRef } from "react";

const CaseStudies = () => {
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

  const caseStudies = [
    {
      title: "Transforming Aviation Safety Standards",
      description: "How LEOSHe helped a major airline reduce safety incidents by 40% through comprehensive training and real-time monitoring.",
      image: "/aviation-safety.jpg",
      category: "Aviation",
      results: ["40% reduction in incidents", "Enhanced crew training", "Real-time risk monitoring"],
    },
    {
      title: "Oil & Gas Excellence Initiative",
      description: "Implementation of advanced HSE management across offshore platforms, resulting in zero incidents over 18 months.",
      image: "/offshore-platform.jpg",
      category: "Oil & Gas",
      results: ["Zero incidents record", "Streamlined compliance", "Improved emergency response"],
    },
    {
      title: "Construction Site Revolution",
      description: "Major infrastructure project achieved outstanding safety performance through LEOSHe's integrated platform solutions.",
      image: "/construction-infrastructure.jpg",
      category: "Construction",
      results: ["60% faster compliance", "Enhanced worker safety", "Digital transformation"],
    },
  ];

  return (
    <section id="case-studies" ref={sectionRef} className="section-padding bg-gradient-to-br from-background to-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6 px-4">
              Success <span className="text-secondary">Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto px-4">
              Real results from organizations that have transformed their safety culture with LEOSHe
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center px-4 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Content */}
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
                  } ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block bg-primary text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-4 sm:mb-6">{study.title}</h3>
                  <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8 leading-relaxed">{study.description}</p>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-heading mb-3 sm:mb-4">Key Results:</h4>
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-text font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <button className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center space-x-2 text-sm sm:text-base">
                      <span>Read Full Case Study</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`transition-all duration-1000 delay-500 ${
                    isVisible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10"
                  } ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-700 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Safety Culture?</h3>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                Join leading organizations worldwide in revolutionizing workplace safety
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-primary px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  Start Your Journey
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-sm sm:text-base">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
