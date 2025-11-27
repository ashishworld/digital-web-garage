import { FiStar } from "react-icons/fi";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      company: "E-commerce Platform",
      content:
        "Digital Web Garage transformed our outdated website into a modern, high-converting e-commerce platform. Our sales increased by 150% within 3 months of launch. Their attention to detail and technical expertise is unmatched.",
      rating: 5,
      project: "E-commerce Development",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      company: "Digital Marketing Agency",
      content:
        "We partnered with Digital Web Garage for our SEO and digital marketing needs. Within 6 months, we achieved #1 rankings for 15+ keywords and saw a 200% increase in organic traffic. Outstanding results!",
      rating: 5,
      project: "SEO & Digital Marketing",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthTech Innovations",
      company: "Healthcare Technology",
      content:
        "The mobile app they developed for our healthcare platform exceeded all expectations. The user experience is seamless, and the backend integration is flawless. They truly understand modern app development.",
      rating: 5,
      project: "Mobile App Development",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold mb-2">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say About Our Digital Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
              </div>
              
              {/* Project type badge */}
              <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-4">
                {testimonial.project}
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-primary-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

