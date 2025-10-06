"use client";

import { motion, useInView } from 'framer-motion';
import { Code, Palette, Rocket, Zap, GraduationCap, MapPin, BookOpen, Plane, Heart } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { icon: Code, title: "Full Stack Development", desc: "Expert in modern web technologies", color: "from-purple-500 to-pink-500" },
    { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful user experiences", color: "from-cyan-500 to-blue-500" },
    { icon: Rocket, title: "Fast Performance", desc: "Optimized and lightning fast", color: "from-orange-500 to-red-500" },
    { icon: Zap, title: "Modern Tech Stack", desc: "Always using latest technologies", color: "from-green-500 to-emerald-500" }
  ];

  const personal = [
    { icon: GraduationCap, label: "Education", value: "M.Sc in CSE", color: "from-blue-500 to-indigo-500" },
    { icon: MapPin, label: "Location", value: "Dhaka", color: "from-pink-500 to-rose-500" },
    // { icon: BookOpen, label: "Reading", color: "from-cyan-500 to-blue-500" },
    { icon: Plane, label: "Traveling", color: "from-purple-500 to-violet-500" },
    { icon: Code, label: "Open Source", color: "from-green-500 to-teal-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white py-20 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div 
              className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Story */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-purple-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with over 5 years of experience in creating stunning web applications. My journey started with a curiosity about how websites work, and it has evolved into a career I absolutely love.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I specialize in building <span className="text-cyan-400 font-semibold">modern, responsive, and user-friendly</span> applications using the latest technologies. Every project is an opportunity to learn something new and push the boundaries of what's possible.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </motion.div>

              {/* Education & Interests Section */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-indigo-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-5 text-white flex items-center gap-2">
                  <Heart className="text-pink-400" size={24} />
                  Education & Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {personal.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <motion.div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="text-white" size={20} />
                          </motion.div>
                          <div>
                            <p className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                              {item.label}
                            </p>
                            {item.value && (
                              <p className="text-gray-400 text-xs mt-1">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Tech Stack & Skills */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Tech Stack */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-indigo-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:bg-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Skills Grid with Percentage Bars */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-purple-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Core Skills</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    const percentages = [95, 90, 88, 92];
                    return (
                      <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 1.8 + index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-white" size={20} />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                {skill.title}
                              </h4>
                              <span className="text-sm font-semibold text-purple-400">{percentages[index]}%</span>
                            </div>
                            <p className="text-gray-400 text-xs mb-2">{skill.desc}</p>
                            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${percentages[index]}%` } : { width: 0 }}
                                transition={{ 
                                  delay: 2 + index * 0.1,
                                  duration: 1,
                                  ease: "easeOut"
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Work Together</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}