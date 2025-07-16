"use client";

import { useEffect, useState, useRef } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const features = [
    {
      title: "Core Platform",
      description: "Essential HSE management capabilities",
      items: [
        { name: "Real-World Media Library", description: "Extensive collection of workplace safety photos and videos" },
        { name: "Risk Assessment Tools", description: "Comprehensive assessments for various environments" },
        { name: "Method Statements", description: "Detailed safety procedures and documentation" },
        { name: "HSE Management Systems", description: "Complete system drafts and procedures" },
      ],
    },
    {
      title: "Training & Education",
      description: "Expert-driven learning resources",
      items: [
        { name: "Training Presentations", description: "Industry-standard educational materials" },
        { name: "Video Lectures", description: "YouTube-based expert insights and guidance" },
        { name: "Interactive Learning", description: "Engaging educational modules" },
        { name: "Best Practice Guides", description: "Proven safety methodologies" },
      ],
    },
    {
      title: "Advanced Analytics",
      description: "AI-powered insights and monitoring",
      items: [
        { name: "Predictive Analytics", description: "AI-driven safety predictions and insights" },
        { name: "Performance Monitoring", description: "Real-time safety performance tracking" },
        { name: "Incident Prevention", description: "Proactive safety management tools" },
        { name: "Benchmarking", description: "Industry standard comparisons" },
      ],
    },
    {
      title: "Platform Features",
      description: "Modern technology and accessibility",
      items: [
        { name: "Cloud-Based Platform", description: "Scalable and secure cloud infrastructure" },
        { name: "Mobile Compatibility", description: "Seamless access across all devices" },
        { name: "Customizable Solutions", description: "Tailored to industry-specific needs" },
        { name: "Multi-Industry Support", description: "Oil & Gas, Construction, Aviation coverage" },
      ],
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6 px-4">
              Platform <span className="text-secondary">Features</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto px-4">
              Advanced features designed to revolutionize workplace safety with AI-powered insights and adaptive learning
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex flex-wrap justify-center mb-4 sm:mb-6 md:mb-8 border-b border-border overflow-x-auto px-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-2 sm:px-3 md:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 border-b-2 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                    activeTab === index ? "border-primary text-primary" : "border-transparent text-muted hover:text-primary"
                  }`}>
                  {feature.title}
                </button>
              ))}
            </div>

            <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="bg-background rounded-2xl p-4 sm:p-6 md:p-8 mx-4 sm:mx-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-heading mb-2 sm:mb-3 md:mb-4">{features[activeTab].title}</h3>
                <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8">{features[activeTab].description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {features[activeTab].items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-base sm:text-lg font-semibold text-heading mb-2">{item.name}</h4>
                      <p className="text-sm sm:text-base text-muted">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Platform Showcase */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-8 sm:mb-12 px-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-heading mb-3 sm:mb-4">
                Platform in <span className="text-secondary">Action</span>
              </h3>
              <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
                See how LEOSHe transforms workplace safety across different scenarios
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src="/interactive-training.jpg"
                  alt="Safety training in progress"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Interactive Training</h4>
                  <p className="text-xs sm:text-sm opacity-90">Real-world scenarios with AI-powered feedback</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src="/smart-analytics.jpg"
                  alt="Risk assessment documentation"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Smart Analytics</h4>
                  <p className="text-xs sm:text-sm opacity-90">Data-driven insights for proactive safety</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 sm:col-span-2 lg:col-span-1">
                <img
                  src="/mobile-access.jpg"
                  alt="Mobile platform access"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Mobile Access</h4>
                  <p className="text-xs sm:text-sm opacity-90">Safety management on-the-go</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          <div
            className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-500 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-6 sm:p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">Global</div>
                  <div className="text-sm sm:text-lg opacity-90">Leader Vision</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">Smart</div>
                  <div className="text-sm sm:text-lg opacity-90">Risk Mitigation</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">Adaptive</div>
                  <div className="text-sm sm:text-lg opacity-90">Training Systems</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">AI</div>
                  <div className="text-sm sm:text-lg opacity-90">Powered Insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
