import { FiCode, FiSmartphone, FiDatabase, FiCloud } from "react-icons/fi";

export default function TechStackSection() {
  const techCategories = [
    {
      icon: FiCode,
      title: "Frontend Technologies",
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-700" },
        { name: "Next.js", color: "bg-gray-100 text-gray-700" },
        { name: "Vue.js", color: "bg-green-100 text-green-700" },
        { name: "Angular", color: "bg-red-100 text-red-700" },
        { name: "TypeScript", color: "bg-blue-100 text-blue-700" },
        { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
      ],
    },
    {
      icon: FiSmartphone,
      title: "Mobile Development",
      technologies: [
        { name: "React Native", color: "bg-blue-100 text-blue-700" },
        { name: "Flutter", color: "bg-blue-100 text-blue-700" },
        { name: "iOS (Swift)", color: "bg-gray-100 text-gray-700" },
        { name: "Android (Kotlin)", color: "bg-green-100 text-green-700" },
        { name: "Ionic", color: "bg-blue-100 text-blue-700" },
        { name: "Xamarin", color: "bg-purple-100 text-purple-700" },
      ],
    },
    {
      icon: FiDatabase,
      title: "Backend & Database",
      technologies: [
        { name: "Node.js", color: "bg-green-100 text-green-700" },
        { name: "Python", color: "bg-yellow-100 text-yellow-700" },
        { name: "PHP", color: "bg-purple-100 text-purple-700" },
        { name: "MongoDB", color: "bg-green-100 text-green-700" },
        { name: "PostgreSQL", color: "bg-blue-100 text-blue-700" },
        { name: "MySQL", color: "bg-orange-100 text-orange-700" },
      ],
    },
    {
      icon: FiCloud,
      title: "Cloud & DevOps",
      technologies: [
        { name: "AWS", color: "bg-orange-100 text-orange-700" },
        { name: "Azure", color: "bg-blue-100 text-blue-700" },
        { name: "Google Cloud", color: "bg-red-100 text-red-700" },
        { name: "Docker", color: "bg-blue-100 text-blue-700" },
        { name: "Kubernetes", color: "bg-blue-100 text-blue-700" },
        { name: "Vercel", color: "bg-gray-100 text-gray-700" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            🚀 Our Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technologies We Master
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We leverage the latest and most reliable technologies to build scalable, 
            secure, and high-performance digital solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                <category.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${tech.color} hover:scale-105 transition-transform cursor-default`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Technology?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always learning and adapting to new technologies. 
              Let's discuss your specific requirements!
            </p>
            <a
              href="#quote"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}