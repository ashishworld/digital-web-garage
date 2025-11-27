import {
  FiGlobe,
  FiSmartphone,
  FiSearch,
  FiShield,
  FiBarChart2,
  FiShoppingBag,
  FiUsers,
  FiPenTool,
  FiCloud,
  FiCode,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

export default function ServicesSection() {
  const services = [
    {
      icon: FiGlobe,
      title: "Web Development",
      description: "Custom responsive websites built with React, Next.js, and modern frameworks for optimal performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: FiSmartphone,
      title: "Mobile App Development",
      description: "Native iOS & Android apps and cross-platform solutions using React Native and Flutter.",
      features: ["iOS & Android", "Cross-Platform", "App Store Ready"],
    },
    {
      icon: FiSearch,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility with proven SEO strategies and comprehensive digital marketing.",
      features: ["Keyword Research", "Content Strategy", "Social Media"],
    },
    {
      icon: FiShoppingBag,
      title: "E-Commerce Solutions",
      description: "Complete online store development with Shopify, WooCommerce, and custom solutions.",
      features: ["Payment Gateway", "Inventory Management", "Mobile Commerce"],
    },
    {
      icon: FiPenTool,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers with intuitive interfaces.",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: FiCloud,
      title: "Cloud Hosting & DevOps",
      description: "Scalable cloud infrastructure and DevOps solutions for reliable application deployment.",
      features: ["AWS/Azure", "CI/CD Pipeline", "24/7 Monitoring"],
    },
    {
      icon: FiBarChart2,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and reporting dashboards.",
      features: ["Business Intelligence", "Custom Reports", "Real-time Analytics"],
    },
    {
      icon: FiShield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation to protect your digital assets.",
      features: ["Security Audit", "Penetration Testing", "Compliance"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Custom IT Solutions for Your Successful Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
                Learn More
                <FiArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

