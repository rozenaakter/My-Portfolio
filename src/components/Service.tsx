// components/Service.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Settings,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
    features: ["React/Next.js", "TypeScript", "Tailwind CSS"],
    colors: {
      primary: "#3B82F6",
      secondary: "#8B5CF6",
      light: "#EEF2FF"
    }
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with a focus on user experience.",
    features: ["React Native", "Flutter", "Progressive Web Apps"],
    colors: {
      primary: "#10B981",
      secondary: "#06B6D4",
      light: "#ECFDF5"
    }
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces and experiences.",
    features: ["Figma", "User Research", "Prototyping"],
    colors: {
      primary: "#F59E0B",
      secondary: "#EF4444",
      light: "#FFFBEB"
    }
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and managing efficient and secure database systems.",
    features: ["SQL/NoSQL", "Data Modeling", "Performance Optimization"],
    colors: {
      primary: "#8B5CF6",
      secondary: "#EC4899",
      light: "#F5F3FF"
    }
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Implementing scalable cloud infrastructure and services.",
    features: ["AWS", "Azure", "Serverless Architecture"],
    colors: {
      primary: "#06B6D4",
      secondary: "#3B82F6",
      light: "#ECFEFF"
    }
  },
  {
    icon: Settings,
    title: "DevOps",
    description: "Streamlining development and operations with automation and CI/CD pipelines.",
    features: ["Docker", "Kubernetes", "CI/CD Pipelines"],
    colors: {
      primary: "#EF4444",
      secondary: "#F59E0B",
      light: "#FEF2F2"
    }
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Enhancing application speed and efficiency through advanced techniques.",
    features: ["Code Splitting", "Lazy Loading", "Caching Strategies"],
    colors: {
      primary: "#F59E0B",
      secondary: "#10B981",
      light: "#FFFBEB"
    }
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Protecting applications with robust security measures and best practices.",
    features: ["Authentication", "Data Encryption", "Vulnerability Testing"],
    colors: {
      primary: "#8B5CF6",
      secondary: "#3B82F6",
      light: "#F5F3FF"
    }
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    description: "Driving growth through data-driven insights and search optimization.",
    features: ["Google Analytics", "SEO Optimization", "Conversion Tracking"],
    colors: {
      primary: "#10B981",
      secondary: "#8B5CF6",
      light: "#ECFDF5"
    }
  }
];

const Service = () => {
  return (
    <section id="service" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help you build, launch, and grow your digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              style={{
                background: `linear-gradient(135deg, ${service.colors.light} 0%, rgba(255,255,255,0) 100%)`
              }}
            >
              {/* Decorative top border */}
              <div 
                className="h-1 w-full"
                style={{ 
                  background: `linear-gradient(90deg, ${service.colors.primary} 0%, ${service.colors.secondary} 100%)` 
                }}
              ></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="p-3 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.colors.primary} 0%, ${service.colors.secondary} 100%)` 
                    }}
                    whileHover={{ 
                      rotate: 15,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold ml-4 text-gray-800 dark:text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.span 
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${service.colors.light}80`,
                          color: service.colors.primary
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: service.colors.primary,
                          color: "white"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
                <motion.button 
                  className="font-medium flex items-center"
                  style={{ color: service.colors.primary }}
                  whileHover={{ 
                    x: 5,
                    color: service.colors.secondary
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Decorative background shape */}
              <motion.div 
                className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10"
                style={{ 
                  background: `linear-gradient(135deg, ${service.colors.primary} 0%, ${service.colors.secondary} 100%)` 
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-3 font-medium rounded-full shadow-lg text-white"
            style={{ 
              background: `linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)` 
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;