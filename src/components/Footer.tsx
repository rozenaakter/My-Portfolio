'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, ArrowUp, Send } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '💻'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: '📷'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Scroll to Top Button - আগের মতো */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/30 transition-all duration-300 z-20"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Part 1: Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Rozena Akter
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Passionate full-stack developer creating amazing digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="space-y-2">
              <p className="text-gray-300 text-sm font-medium">Follow me:</p>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 border border-purple-500/10 hover:border-purple-400"
                    title={social.name}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Part 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white/80">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 3 }}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-2 text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Part 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white/80">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-300 mt-0.5" />
                <span className="text-sm">your.email@example.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-300 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-300 mt-0.5" />
                <span className="text-sm">Your City, Country</span>
              </div>
            </div>
          </motion.div>

          {/* Part 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white/80">Newsletter</h4>
            <p className="text-gray-300 text-sm">
              Get updates on my latest projects.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-center"
              >
                <p className="text-green-300 text-sm">
                  ✅ Subscribed!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-slate-800/50 border border-purple-500/10 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 text-white placeholder-gray-400 text-sm transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-2 px-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
                >
                  <Send className="w-3 h-3" />
                  <span>Subscribe</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-purple-500/10 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-300 text-sm">
              <span>&copy; {currentYear} Rozena Akter. All rights reserved.</span>
            </div>
            
            {/* Back to Top Text */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-purple-300 transition-colors duration-300 text-sm font-medium flex items-center space-x-1"
            >
              {/* <span>Back to Top</span> */}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;