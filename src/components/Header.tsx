"use client";

import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Mobile menu animation variants
  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1]
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Mobile search animation variants
  const mobileSearchVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Menu item animation
  const menuItemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        ease: [0.42, 0, 0.58, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* বাম দিকে লোগো ও নাম */}
          <div className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              className="relative w-12 h-12"
            >
              {/* অ্যানিমেটেড গ্রেডিয়েন্ট বর্ডার */}
              <motion.div 
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background: "linear-gradient(45deg, #a855f7, #6366f1, #ec4899, #8b5cf6)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* ইনার ব্যাকগ্রাউন্ড */}
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/roze.jpeg" 
                    alt="Rozena Akter" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                    style={{
                      filter: "saturate(1.2) contrast(1.1)", // ইমেজ কোয়ালিটি উন্নত করার জন্য
                      imageRendering: "crisp-edges", // ইমেজ রেন্ডারিং উন্নত করার জন্য
                    }}
                  />
                </div>
              </motion.div>
              
              {/* গ্লো ইফেক্ট */}
              <motion.div 
                className="absolute inset-0 rounded-full opacity-70 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.8) 0%, rgba(99, 102, 241, 0) 70%)",
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Rozena Akter
            </span>
          </div>

          {/* মাঝখানে নেভিগেশন বার (ডেস্কটপ ভার্শন) */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Service','Projects', 'Blog','Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-purple-300 transition-colors duration-300 font-medium group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* ডান দিকে সার্চ বার ও বাটন */}
          <div className="flex items-center space-x-4">
            {/* সার্চ বার */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-purple-500 w-40 transition-all duration-300 focus:w-56 border border-gray-700"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>

            {/* মোবাইলে সার্চ আইকন */}
            <motion.button 
              onClick={toggleSearch}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-300 p-2 rounded-full hover:bg-gray-800/50 transition-colors"
            >
              <Search size={20} />
            </motion.button>

            {/* Hire Me বাটন */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-gray-900 px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Hire Me
            </motion.button>

            {/* মোবাইল মেনু টগল বাটন */}
            <motion.button 
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-300 p-2 rounded-full hover:bg-gray-800/50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* মোবাইল মেনু - AnimatePresence দিয়ে smooth exit */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <motion.nav 
                className="flex flex-col space-y-1 p-4"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      ease: [0.42, 0, 0.58, 1]
                    }
                  }
                }}
              >
                {['Home', 'About', 'Service', 'Projects', 'Blog', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    variants={menuItemVariants}
                    className="relative text-gray-300 hover:text-purple-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-700/30 group"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-20"></span>
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* মোবাইল সার্চ বার - AnimatePresence দিয়ে smooth exit */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              key="mobile-search"
              variants={mobileSearchVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                />
                <Search className="absolute left-3 top-3 text-gray-500" size={18} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}