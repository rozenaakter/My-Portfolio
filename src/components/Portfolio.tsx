"use client";

import { motion, useInView, Variants } from 'framer-motion'; // ← Variants ইমপোর্ট করা হয়েছে
import { ExternalLink} from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const categories = ["All Categories", "Blog", "E-commerce", "Edu", "Personal", "Newspaper"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      category: "E-commerce",
      gradient: "from-indigo-700 to-yellow-500"
    },
    {
      id: 2,
      title: "Tech Blog",
      description: "A modern tech blog with markdown support, comment system, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
      tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      liveUrl: "https://example.com",
      category: "Blog",
      gradient: "from-indigo-700 to-yellow-500"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description: "An interactive learning platform with course management, video streaming, and progress tracking.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
      tags: ["React", "GraphQL", "Node.js", "MySQL"],
      liveUrl: "https://example.com",
      category: "Edu",
      gradient: "from-indigo-700 to-yellow-500"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website with modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      tags: ["React", "Framer Motion", "TypeScript", "Netlify"],
      liveUrl: "https://example.com",
      category: "Personal",
      gradient: "from-indigo-700 to-yellow-500"
    },
    {
      id: 5,
      title: "News Portal",
      description: "A comprehensive news portal with real-time updates, category filtering, and user comments.",
      image: "https://images.unsplash.com/photo-1551836027-d99d4a7b65d0?w=800&h=500&fit=crop",
      tags: ["Next.js", "Redux", "Firebase", "Material UI"],
      liveUrl: "https://example.com",
      category: "Newspaper",
      gradient: "from-indigo-700 to-yellow-500"
    },
    {
      id: 6,
      title: "Online Store",
      description: "A modern online store with product filtering, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
      tags: ["Vue.js", "Express", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      category: "E-commerce",
      gradient: "from-indigo-700 to-yellow-500"
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All Categories" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants: Variants = { // ← টাইপ ডিক্লেয়ারেশন যোগ করা হয়েছে
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = { // ← টাইপ ডিক্লেয়ারেশন যোগ করা হয়েছে
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] // ← "easeOut" এর পরিবর্তে কিউবিক-বেজিয়ার অ্যারে
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-indigo-300 via-yellow-100 to-indigo-450 relative overflow-hidden"
      id="protfolio"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-indigo-800/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] // ← "easeInOut" এর পরিবর্তে কিউবিক-বেজিয়ার অ্যারে
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-800/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] // ← "easeInOut" এর পরিবর্তে কিউবিক-বেজিয়ার অ্যারে
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section title */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.03 }}
            >
              <span className="bg-gradient-to-r from-indigo-800 to-yellow-600 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-yellow-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <p className="text-gray-700 text-lg font-semibold mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </motion.div>

          {/* Category buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-indigo-600 to-yellow-600 text-white shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-300 rounded-xl overflow-hidden shadow-lg border border-gray-700 group"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} // ← কিউবিক-বেজিয়ার অ্যারে যোগ
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800} // width প্রপার্টি যোগ করা হয়েছে
                    height={500} // height প্রপার্টি যোগ করা হয়েছে
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Overlay with live demo link only */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-full shadow-md hover:bg-gray-800 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="text-white" size={18} />
                      <span className="text-white font-medium">Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 ">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Live demo link at the bottom */}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600 flex items-center gap-1 text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-yellow-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}