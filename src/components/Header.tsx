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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
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
              <Link key={item.name} href={item.href} className="text-text hover:text-primary transition-colors duration-300 font-medium">
                {item.name}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu">
            <div className={`w-6 h-0.5 bg-text transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-text transition-all duration-300 mt-1 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-text transition-all duration-300 mt-1 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-text hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary inline-block" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
