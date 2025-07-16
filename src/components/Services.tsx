"use client";

import { useEffect, useState, useRef } from "react";

const Services = () => {
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

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Real-World Media Library",
      description: "Comprehensive collection of workplace safety photos and videos showcasing safe and unsafe practices for practical analysis.",
      features: ["Unsafe practice documentation", "Best practice examples", "Industry-specific scenarios", "Real workplace footage"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Risk Assessments & Method Statements",
      description: "Comprehensive risk assessments and detailed method statements tailored for various operational environments.",
      features: ["Environment-specific assessments", "Detailed safety procedures", "Customizable templates", "Compliance documentation"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Training & Educational Resources",
      description: "Industry-standard and customized training presentations with YouTube-based video lectures delivering expert-driven insights.",
      features: ["Professional training presentations", "Video lecture series", "Expert-driven content", "Interactive learning modules"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "HSE Management Systems",
      description:
        "Complete HSE management system drafts, procedures, forms and formats for structured documentation and seamless policy implementation.",
      features: ["Management system drafts", "Standardized procedures", "Documentation templates", "Audit-ready formats"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "AI-Powered Analytics",
      description: "Advanced predictive analytics and AI-driven insights for proactive safety management and continuous improvement.",
      features: ["Predictive safety analytics", "Incident prevention insights", "Performance benchmarking", "Real-time monitoring"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Customized Solutions",
      description: "Tailored HSE solutions designed to meet evolving industry demands with cloud scalability and mobile compatibility.",
      features: ["Industry-specific customization", "Cloud-based platform", "Mobile compatibility", "Scalable architecture"],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-4 sm:mb-6 px-4">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto px-4">
              Bridging regulatory compliance with real-world workplace safety through innovative digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 p-6 sm:p-8 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-primary group-hover:text-secondary transition-colors duration-300 mb-4 sm:mb-6">{service.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold text-heading mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-muted mb-4 sm:mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm text-text">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                  <button className="text-primary hover:text-secondary font-semibold transition-colors duration-300 flex items-center space-x-2 group text-sm sm:text-base">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Services with Images */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-heading mb-4">
                Industry <span className="text-accent">Applications</span>
              </h3>
              <p className="text-lg text-muted max-w-2xl mx-auto">Real-world safety solutions across multiple industries</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Oil & Gas Industry */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img src="/oil-gas-operations.jpg" alt="Oil and gas industry safety operations" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-3">Oil & Gas Operations</h4>
                    <p className="text-lg mb-4">Comprehensive HSE management for high-risk petroleum operations</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">Risk Assessment</span>
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">Safety Procedures</span>
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">Emergency Response</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                <h4 className="text-2xl font-bold text-heading mb-4">Petroleum Industry Excellence</h4>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  Specialized safety protocols and risk management systems designed for the unique challenges of oil and gas operations, including
                  offshore platforms, refineries, and pipeline management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Hazardous material handling protocols</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Environmental protection measures</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Process safety management</span>
                  </li>
                </ul>
              </div>

              {/* Construction Industry */}
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <h4 className="text-2xl font-bold text-heading mb-4">Construction Safety Innovation</h4>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  Advanced safety management solutions for construction sites, covering everything from high-rise buildings to infrastructure projects
                  with comprehensive risk mitigation strategies.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Fall protection systems</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Equipment safety protocols</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Site-specific risk assessments</span>
                  </li>
                </ul>
              </div>

              <div className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Construction site safety management"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-3">Construction Excellence</h4>
                    <p className="text-lg mb-4">Building safer construction environments through technology</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">Site Safety</span>
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">Worker Training</span>
                      <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">Equipment Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
