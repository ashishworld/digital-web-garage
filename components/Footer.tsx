"use client";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">
              Digital Web Garage
            </h3>
            <p className="mb-6 text-lg leading-relaxed">
              Transforming businesses through innovative digital solutions. We specialize in 
              web development, mobile apps, e-commerce, and digital marketing to help you 
              achieve your business goals.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
            
            {/* Certifications */}
            <div className="text-sm text-gray-400">
              <p>🏆 Google Partner • Microsoft Certified • Shopify Plus Partner</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors flex items-center">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary-400 transition-colors flex items-center">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary-400 transition-colors flex items-center">
                  → Our Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary-400 transition-colors flex items-center">
                  → Contact Us
                </Link>
              </li>
              <li>
                <Link href="#quote" className="hover:text-primary-400 transition-colors flex items-center">
                  → Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0 text-primary-400" />
                <div>
                  <p className="font-medium text-white">Office Address</p>
                  <span>123 Business District, Tech City, TC 12345</span>
                </div>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 flex-shrink-0 text-primary-400" />
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <a
                    href="mailto:info@digitalwebgarage.com"
                    className="hover:text-primary-400 transition-colors"
                  >
                    info@digitalwebgarage.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 flex-shrink-0 text-primary-400" />
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-primary-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Digital Web Garage. All Rights Reserved.</p>
              <p className="text-sm text-gray-400 mt-1">
                Crafted with ❤️ for digital excellence
              </p>
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FiArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

