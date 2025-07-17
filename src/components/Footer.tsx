import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About & Vision", href: "#about" },
    { name: "Platform Innovation", href: "#platform" },
    { name: "Solutions", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "HSE Compliance Management",
    "Training & Education Hub",
    "Risk Assessment Tools",
    "Document Management",
    "AI-Powered Analytics",
    "Multi-User Platform",
  ];

  const industries = ["Oil & Gas", "Construction", "Aviation", "Manufacturing", "Mining", "Energy"];

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="#home" className="flex items-center space-x-2 mb-6">
                <Image src="/logo.png" alt="LEOSHe Logo" width={180} height={40} className="h-10 w-auto brightness-0 invert" />
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                UK Innovator Founder backed digital HSE platform transforming workplace safety through ethical innovation and Vision 2030 alignment.
              </p>

              <div className="mb-6">
                <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium">🇬🇧 UK Innovator Founder • Vision 2030</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-secondary transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-bold mb-6">Industries</h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry}>
                    <span className="text-gray-300 text-sm">{industry}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="font-semibold mb-3">Get Started Today</h5>
                <Link
                  href="#contact"
                  className="inline-flex items-center bg-secondary hover:bg-accent text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="border-t border-white/20 py-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-300">Recognized certifications and partnerships</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white/10 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-white font-bold text-xs">ISO 45001</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-white font-bold text-xs">NEBOSH</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-white font-bold text-xs">IOSH</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
              <span className="text-white font-bold text-xs">UK Gov</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© {currentYear} LEOSHe. All rights reserved.</div>

            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>

            <div className="text-gray-300 text-sm">Made with ❤️ for workplace safety</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
