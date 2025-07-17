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
      title: "Offshore Platform Safety Transformation",
      description: "Major energy corporation achieved zero incidents over 24 months using LEOSHe's predictive analytics and VR training modules.",
      image: "/offshore-platform.jpg",
      category: "Oil & Gas",
      client: "Global Energy Corp",
      timeline: "18 months",
      results: ["0 incidents in 24 months", "45% reduction in near-misses", "98% training completion rate", "$2.3M cost savings"],
      testimonial: {
        quote: "LEOSHe's platform transformed our safety culture. The predictive analytics helped us prevent incidents before they occurred.",
        author: "Sarah Mitchell",
        position: "HSE Director",
        company: "Global Energy Corp",
      },
    },
    {
      title: "Aviation Safety Excellence Program",
      description:
        "International airline implemented LEOSHe's comprehensive training and monitoring system, achieving industry-leading safety metrics.",
      image: "/aviation-safety.jpg",
      category: "Aviation",
      client: "Sky International Airlines",
      timeline: "12 months",
      results: [
        "50% reduction in safety incidents",
        "85% improvement in crew response time",
        "100% regulatory compliance",
        "Enhanced passenger confidence",
      ],
      testimonial: {
        quote: "The immersive VR training modules revolutionized our safety preparation. Our crews are more confident and better prepared.",
        author: "Captain James Rodriguez",
        position: "Chief Pilot & Safety Officer",
        company: "Sky International Airlines",
      },
    },
    {
      title: "Mega Infrastructure Project Success",
      description:
        "$500M infrastructure project completed ahead of schedule with zero lost-time incidents using LEOSHe's integrated safety platform.",
      image: "/construction-infrastructure.jpg",
      category: "Construction",
      client: "MegaBuild Construction",
      timeline: "24 months",
      results: ["Zero lost-time incidents", "30% faster safety documentation", "15% project time savings", "Award-winning safety record"],
      testimonial: {
        quote: "LEOSHe's platform enabled us to maintain the highest safety standards while accelerating project delivery. Exceptional results.",
        author: "Dr. Ahmed Al-Rashid",
        position: "Project Director",
        company: "MegaBuild Construction",
      },
    },
  ];

  return (
    <section id="case-studies" ref={sectionRef} className="section-padding bg-gradient-to-br from-background to-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-6 px-4">
              Success <span className="text-secondary">Stories</span> & Case Studies
            </h2>
            <p className="text-xl text-muted max-w-4xl mx-auto px-4 leading-relaxed">
              Proven results from industry leaders who transformed their safety outcomes with LEOSHe's innovative platform
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Content */}
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
                  } ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">{study.category}</span>
                    <span className="text-muted font-medium">{study.timeline} timeline</span>
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-heading mb-4">{study.title}</h3>
                  <div className="text-lg font-semibold text-primary mb-4">Client: {study.client}</div>
                  <p className="text-lg text-muted mb-8 leading-relaxed">{study.description}</p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-heading mb-4">Measurable Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 bg-secondary/10 rounded-lg p-3">
                          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-text font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border-l-4 border-primary">
                    <blockquote className="text-lg italic text-text mb-4 leading-relaxed">"{study.testimonial.quote}"</blockquote>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {study.testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-heading">{study.testimonial.author}</div>
                        <div className="text-muted">{study.testimonial.position}</div>
                        <div className="text-sm text-primary font-medium">{study.testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-hover transition-colors duration-300 flex items-center space-x-2">
                      <span>Download Full Case Study</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
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
