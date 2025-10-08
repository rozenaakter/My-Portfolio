"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      let currentSection = 'home';
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionBottom - 100) {
          currentSection = element.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Service', id: 'service' },
    { name: 'Projects', id: 'protfolio' },
    { name: 'Blog', id: 'blog' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

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

  // Active indicator animation
  const activeIndicatorVariants: Variants = {
    inactive: {
      scale: 0,
      opacity: 0
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
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
                      filter: "saturate(1.2) contrast(1.1)",
                      imageRendering: "crisp-edges",
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
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-medium transition-all duration-300 group px-3 py-2 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-purple-300 bg-white/5 shadow-lg shadow-purple-500/20' 
                    : 'text-gray-300 hover:text-purple-300 hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                
                {/* Active Indicator */}
                <motion.span 
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"
                  variants={activeIndicatorVariants}
                  initial="inactive"
                  animate={activeSection === item.id ? "active" : "inactive"}
                />
                
                {/* Hover Underline */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'w-3/4' 
                    : 'w-0 group-hover:w-3/4'
                }`}></span>
              </motion.a>
            ))}
          </nav>

          {/* ডান দিকে বাটন */}
          <div className="flex items-center space-x-4">
            {/* Hire Me বাটন */}
            <motion.a
  href="#contact"
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 10px 30px -5px rgba(168, 85, 247, 0.5)"
  }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 relative overflow-hidden inline-block cursor-pointer"
>
  <span className="relative z-10">Hire Me</span>
  <motion.div 
    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
    initial={{ x: "-100%" }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.3 }}
  />
</motion.a>

            {/* মোবাইল মেনু টগল বাটন */}
            <motion.button 
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-300 p-2 rounded-full hover:bg-gray-800/50 transition-colors relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              
              {/* Active Dot Indicator */}
              {navItems.some(item => activeSection === item.id) && (
                <motion.span 
                  className="absolute top-1 right-1 w-2 h-2 bg-purple-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* মোবাইল মেনু */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden mt-4 bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
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
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    variants={menuItemVariants}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative py-3 px-4 rounded-lg transition-all duration-300 group flex items-center justify-between ${
                      activeSection === item.id 
                        ? 'text-purple-300 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-l-4 border-purple-400' 
                        : 'text-gray-300 hover:text-purple-300 hover:bg-gray-700/30'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">{item.name}</span>
                    
                    {/* Active Indicator for Mobile */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: activeSection === item.id ? 1 : 0 }}
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                    
                    {/* Hover Effect */}
                    <span className={`absolute bottom-2 left-4 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'w-20' 
                        : 'w-0 group-hover:w-20'
                    }`}></span>
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}