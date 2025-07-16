"use client";

import { useEffect, useState, useRef } from "react";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
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

  const developmentMilestones = [
    {
      phase: "Project Initiation",
      percentage: 15,
      amount: 1200,
      description: "Contract signing and project planning phase",
      deliverables: ["Project scope definition", "Technical requirements", "Timeline establishment"],
    },
    {
      phase: "Design Approval",
      percentage: 15,
      amount: 1200,
      description: "UI/UX design and architecture approval",
      deliverables: ["Complete UI/UX design", "System architecture", "Database design"],
    },
    {
      phase: "MVP Completion",
      percentage: 40,
      amount: 3200,
      description: "Core platform development and MVP delivery",
      deliverables: ["Core platform features", "User authentication", "Basic HSE modules"],
    },
    {
      phase: "Testing Phase",
      percentage: 15,
      amount: 1200,
      description: "Comprehensive testing and quality assurance",
      deliverables: ["System testing", "Security audits", "Performance optimization"],
    },
    {
      phase: "Final Deployment",
      percentage: 15,
      amount: 1200,
      description: "Production deployment and go-live",
      deliverables: ["Production deployment", "Training materials", "Support documentation"],
    },
  ];

  const subscriptionPlans = [
    {
      name: "Individual",
      price: { monthly: 29, annual: 290 },
      description: "Perfect for individual professionals",
      features: ["Personal HSE dashboard", "Basic training modules", "Document storage (10GB)", "Mobile app access", "Email support"],
      recommended: false,
    },
    {
      name: "Team",
      price: { monthly: 99, annual: 990 },
      description: "Ideal for small to medium teams",
      features: [
        "Team collaboration tools",
        "Advanced analytics",
        "Document storage (100GB)",
        "Role-based permissions",
        "Priority support",
        "Custom reporting",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: { monthly: 299, annual: 2990 },
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited users",
        "AI-powered insights",
        "Document storage (1TB+)",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label options",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              Investment & <span className="text-secondary">Pricing</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Transparent pricing structure for development investment and ongoing platform access
            </p>
          </div>

          {/* Development Investment */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-heading text-center mb-12">
              Development Investment: <span className="text-secondary">8,000 AED</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {developmentMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">{milestone.percentage}%</span>
                    </div>
                    <h4 className="text-lg font-bold text-heading mb-2">{milestone.phase}</h4>
                    <div className="text-2xl font-bold text-secondary mb-2">{milestone.amount} AED</div>
                  </div>

                  <p className="text-sm text-muted mb-4 text-center">{milestone.description}</p>

                  <div className="space-y-2">
                    {milestone.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-text">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span>{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-muted mb-4">
                <strong>Development Timeline:</strong> 15-16 weeks from contract signing to full deployment
              </p>
              <p className="text-sm text-muted">*Cloud hosting costs and third-party API subscriptions are client's responsibility</p>
            </div>
          </div>

          {/* Subscription Plans */}
          <div>
            <h3 className="text-3xl font-bold text-heading text-center mb-8">Subscription Plans</h3>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-lg p-1 shadow-md">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    !isAnnual ? "bg-primary text-white" : "text-primary"
                  }`}>
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${isAnnual ? "bg-primary text-white" : "text-primary"}`}>
                  Annual <span className="text-xs text-secondary">(Save 17%)</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    plan.recommended ? "ring-2 ring-secondary" : ""
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">Recommended</span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-heading mb-2">{plan.name}</h4>
                    <p className="text-muted mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                      <span className="text-muted">/{isAnnual ? "year" : "month"}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.recommended ? "btn-secondary" : "bg-gray-100 text-text hover:bg-gray-200"
                    }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
