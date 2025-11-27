import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question or want to discuss your project? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMapPin className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">Your Address Here</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:info@digitalwebgarage.com"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              info@digitalwebgarage.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiPhone className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <a
              href="tel:+1234567890"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <FiClock className="w-5 h-5" />
            <span>Available 24/7 for your support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

