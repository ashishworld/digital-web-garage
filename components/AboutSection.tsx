import { FiAward, FiUsers, FiClock, FiDollarSign, FiCheckCircle, FiTarget, FiTrendingUp } from "react-icons/fi";

export default function AboutSection() {
  const features = [
    {
      icon: FiAward,
      title: "Award Winning",
      description: "Recognized excellence in digital innovation and client satisfaction",
    },
    {
      icon: FiUsers,
      title: "Expert Team",
      description: "Skilled professionals with 10+ years of industry experience",
    },
    {
      icon: FiClock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
    },
    {
      icon: FiTarget,
      title: "Result Driven",
      description: "Focused on delivering measurable business outcomes",
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified Quality Management",
    "Google Partner for Digital Marketing Excellence",
    "Microsoft Certified Azure Solutions Provider",
    "Shopify Plus Partner for E-commerce Solutions",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              🏆 About Digital Web Garage
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Ideas into 
              <span className="text-primary-600">Digital Reality</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Since 2014, Digital Web Garage has been at the forefront of digital innovation, 
              helping businesses transform their ideas into powerful digital solutions. We specialize 
              in web development, mobile applications, e-commerce platforms, and comprehensive 
              digital marketing strategies.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our mission is to empower businesses with cutting-edge technology solutions that 
              drive growth, enhance user experience, and deliver measurable results. We pride 
              ourselves on being a trusted technology partner for companies worldwide.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <FiTrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-gray-700 font-medium">98% Client Satisfaction Rate</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

