"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About & Vision", href: "#about" },
    { name: "Solutions", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LEOSHe Logo" width={180} height={40} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-secondary"
                }`}>
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled ? "bg-primary text-white hover:bg-hover shadow-lg" : "bg-white text-primary hover:bg-gray-100"
              }`}>
              Book Your Discovery Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu">
            <div
              className={`w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"} ${
                isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
              }`}></div>
            <div
              className={`w-6 h-0.5 transition-all duration-300 mt-1 ${isScrolled ? "bg-gray-700" : "bg-white"} ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}></div>
            <div
              className={`w-6 h-0.5 transition-all duration-300 mt-1 ${isScrolled ? "bg-gray-700" : "bg-white"} ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-lg rounded-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <div className="px-4">
              <Link
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                onClick={() => setIsMobileMenuOpen(false)}>
                Book Your Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
