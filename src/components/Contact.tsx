"use client";

import { useEffect, useState, useRef } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    projectType: "consultation",
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with your preferred form handling service
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      details: "info@leoshe.com",
      description: "Send us an email for detailed inquiries",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      details: "+971 XX XXX XXXX",
      description: "Speak directly with our experts",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: "UAE",
      description: "Schedule a meeting at our office",
    },
  ];

  const projectTypes = [
    { value: "consultation", label: "Initial Consultation" },
    { value: "development", label: "Platform Development" },
    { value: "customization", label: "Custom Solution" },
    { value: "support", label: "Support & Maintenance" },
    { value: "partnership", label: "Partnership Opportunity" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-4 sm:mb-6 px-4">
              Get In <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto px-4">
              Ready to transform your HSE management? Contact us today to discuss your project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-6 sm:mb-8">Let's Start a Conversation</h3>

              <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8 leading-relaxed">
                Ready to transform your workplace safety approach? Whether you're looking to implement intelligent risk mitigation, automate
                compliance processes, or create adaptive training programs, our team is here to help you build a safer future.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-background rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="text-primary flex-shrink-0 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-heading mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1 text-sm sm:text-base">{info.details}</p>
                      <p className="text-xs sm:text-sm text-muted">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-4 sm:p-6 text-white">
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose LEOSHe?</h4>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Global leader in digital HSE solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Technology-driven risk mitigation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">AI-powered intelligent analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Adaptive training ecosystems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-heading mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-heading mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-heading mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-heading mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-heading mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base">
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-heading mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="Tell us about your project requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
