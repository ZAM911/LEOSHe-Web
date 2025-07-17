"use client";

import { useEffect, useState, useRef } from "react";

const PlatformInnovation = () => {
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

  const roadmapItems = [
    {
      quarter: "Q3 2025",
      title: "Beta Launch",
      description: "Platform beta with core HSE modules",
      status: "In Progress",
    },
    {
      quarter: "Q4 2025",
      title: "AI Analytics",
      description: "Advanced predictive analytics engine",
      status: "Development",
    },
    {
      quarter: "Q1 2026",
      title: "50+ Corporate Clients",
      description: "Target client milestone achievement",
      status: "Target",
    },
    {
      quarter: "Q2 2026",
      title: "Global Expansion",
      description: "International market penetration",
      status: "Planned",
    },
  ];

  const platformFeatures = [
    {
      icon: "🤖",
      title: "AI-Powered Risk Analytics",
      description: "Machine learning algorithms analyze workplace data to predict and prevent incidents before they occur.",
      tech: "TensorFlow, Python, Cloud Computing",
    },
    {
      icon: "📊",
      title: "Real-Time Compliance Dashboard",
      description: "Dynamic monitoring system providing instant compliance status across all safety protocols.",
      tech: "React, D3.js, WebSocket APIs",
    },
    {
      icon: "🎯",
      title: "Immersive VR Training Modules",
      description: "Virtual reality simulations for high-risk scenario training without real-world exposure.",
      tech: "Unity, WebXR, 3D Modeling",
    },
    {
      icon: "🔗",
      title: "Blockchain Audit Trail",
      description: "Immutable record keeping for compliance documentation and incident reporting.",
      tech: "Ethereum, Smart Contracts, IPFS",
    },
  ];

  return (
    <section id="platform" ref={sectionRef} className="section-padding bg-gradient-to-br from-background to-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-6">
              <span className="text-primary font-semibold">💡 Innovation Hub</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-6">
              Platform <span className="text-secondary">Innovation</span>
            </h2>
            <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology stack powering the future of workplace safety with scalable, AI-driven solutions that deliver measurable impact
            </p>
          </div>

          {/* Platform Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-heading mb-4">{feature.title}</h3>
                <p className="text-text mb-4 leading-relaxed">{feature.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-muted font-medium">Technology Stack:</div>
                  <div className="text-sm text-primary font-semibold">{feature.tech}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Innovation Roadmap */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-heading mb-4">Innovation Roadmap</h3>
              <p className="text-lg text-muted max-w-2xl mx-auto">Strategic milestones driving our platform evolution and market penetration</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmapItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-bl-full"></div>
                  <div className="text-2xl font-bold text-primary mb-2">{item.quarter}</div>
                  <h4 className="font-semibold text-heading mb-2">{item.title}</h4>
                  <p className="text-muted text-sm mb-3">{item.description}</p>
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Progress"
                        ? "bg-secondary/20 text-secondary"
                        : item.status === "Development"
                        ? "bg-primary/20 text-primary"
                        : item.status === "Target"
                        ? "bg-accent/20 text-accent"
                        : "bg-gray-200 text-gray-600"
                    }`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Potential */}
          <div
            className={`mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className="text-center">
              <h3 className="font-serif text-3xl font-bold text-heading mb-6">Market Potential & Revenue Streams</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">$12B+</div>
                  <div className="text-muted">Global HSE Software Market</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15%</div>
                  <div className="text-muted">Annual Market Growth Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-muted">Target Corporate Clients (Q1 2026)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformInnovation;
