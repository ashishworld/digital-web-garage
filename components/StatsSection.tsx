"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    { number: 200, suffix: "+", label: "Projects Completed", description: "Successfully delivered" },
    { number: 150, suffix: "+", label: "Happy Clients", description: "Worldwide" },
    { number: 10, suffix: "+", label: "Years Experience", description: "In the industry" },
    { number: 24, suffix: "/7", label: "Support Available", description: "Round the clock" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of businesses 
            achieve their digital transformation goals.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <CountUpAnimation 
                    target={stat.number} 
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <div className="text-lg md:text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-100">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Counter animation component
function CountUpAnimation({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count}{suffix}</span>;
}

