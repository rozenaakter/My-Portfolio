// components/BlogSection.tsx
"use client";

import { Calendar, Clock, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn advanced techniques for creating maintainable React applications with component architecture and state management.",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "React",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends shaping the future of web development in 2024 and beyond.",
      date: "April 28, 2024",
      readTime: "6 min read",
      category: "Web Dev",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      excerpt: "Unlock the full potential of utility-first CSS with these advanced Tailwind techniques and best practices.",
      date: "April 12, 2024",
      readTime: "10 min read",
      category: "CSS",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Next.js 14 Features Deep Dive",
      excerpt: "Discover the powerful new features in Next.js 14 including server actions, improved caching, and enhanced performance.",
      date: "March 30, 2024",
      readTime: "12 min read",
      category: "Next.js",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "TypeScript Best Practices",
      excerpt: "Essential TypeScript patterns and techniques for writing type-safe, maintainable code in large applications.",
      date: "March 18, 2024",
      readTime: "9 min read",
      category: "TypeScript",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Modern State Management",
      excerpt: "Comparing Zustand, Jotai, and Redux Toolkit - choosing the right state management solution for your project.",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "State Mgmt",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Thoughts, tutorials, and insights about modern web development
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 ease-out group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              {/* Enhanced Image with multiple hover effects */}
              <div className="relative h-56 overflow-hidden">
                {/* Background gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-purple-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                
                {/* Image with zoom and slight rotation effect */}
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Category badge with enhanced hover effect */}
                <div className="absolute top-4 right-4 z-20 transition-all duration-300 group-hover:scale-110">
                  <span className="bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md group-hover:bg-white group-hover:text-indigo-600 transition-colors duration-300">
                    {post.category}
                  </span>
                </div>
                
                {/* Decorative elements that appear on hover */}
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>

              {/* Content with enhanced hover effects */}
              <div className="p-6 relative">
                {/* Subtle background effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl -z-10"></div>
                
                {/* Date and reading time with hover effect */}
                <div className="flex items-center text-gray-500 text-sm mb-4 transition-colors duration-300 group-hover:text-indigo-600">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1 transition-transform duration-300 group-hover:scale-110" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 transition-transform duration-300 group-hover:scale-110" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title with enhanced hover effect */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1">
                  {post.title}
                </h3>
                
                {/* Excerpt with fade effect on hover */}
                <p className="text-gray-600 mb-6 line-clamp-3 transition-all duration-500 group-hover:text-gray-800">
                  {post.excerpt}
                </p>
                
                {/* Enhanced Read Article Button */}
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg overflow-hidden relative group/btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button background with animated gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center w-full justify-center">
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">Read Article</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-all duration-500 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
                  </span>
                  
                  {/* Shimmer effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </motion.a>
              </div>
              
              {/* Corner decoration that appears on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500 transform rotate-45 translate-x-4 translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform flex items-center mx-auto group">
            View All Blog Posts
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;