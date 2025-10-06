'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'rozena@example.com',
      link: 'mailto:rozena@example.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      color: 'from-green-400 to-green-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-sky-400'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s create something amazing together. I&apos;m always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Let&apos;s Talk
            </motion.h3>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{method.title}</h4>
                  <p className="text-gray-300 text-sm">{method.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 mt-8"
            >
              <h4 className="text-white font-semibold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 border border-purple-500/10 hover:border-purple-400/30`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-green-300 text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-green-200">Thank you for your message. I&apos;ll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-purple-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;