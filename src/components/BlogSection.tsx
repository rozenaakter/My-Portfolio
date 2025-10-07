"use client";

import { motion, useInView, Variants } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14, including App Router, Server Components, and more.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      date: "May 15, 2024",
      readTime: "5 min read",
      author: "Rozena Akter",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Mastering React Hooks in 2024",
      excerpt: "A comprehensive guide to React Hooks, including custom hooks and best practices for modern React development.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      date: "May 10, 2024",
      readTime: "8 min read",
      author: "Rozena Akter",
      category: "React"
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to create robust and scalable REST APIs using Node.js, Express, and MongoDB.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      date: "May 5, 2024",
      readTime: "10 min read",
      author: "Rozena Akter",
      category: "Backend"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      id="blog"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section title */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Latest Blog Posts
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in web development
            </p>
          </motion.div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                whileHover={{ y: -10 }}
              >
                {/* Post image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600} // width প্রপার্টি যোগ করা হয়েছে
                    height={400} // height প্রপার্টি যোগ করা হয়েছে
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-500" />
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-blue-600 font-medium text-sm flex items-center gap-1"
                    >
                      Read More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all button */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              View All Posts
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}