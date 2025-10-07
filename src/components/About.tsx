"use client";

import { motion, useInView, Variants } from 'framer-motion';
import { 
  Code, Palette, Rocket, Zap, GraduationCap, MapPin, Plane, Heart,
  FileCode, FileText, Braces, SquareStack as ReactIcon, Server as NodeIcon, 
  Wind as TailwindIcon, Layers as ReduxIcon, 
  Database, Github, Calendar, Briefcase, Award, TrendingUp, Cpu
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// Custom Next.js icon component
const NextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 180 180" fill="none">
    <path d="M90.0002 0C69.9902 0 49.9902 3.3 32.2402 12.24L41.0002 30.81C55.3202 23.64 71.8802 20.01 88.8002 20.01C105.72 20.01 122.28 23.64 136.6 30.81L145.36 12.24C127.61 3.3 107.61 0 87.6002 0H90.0002Z" fill="white"/>
    <path d="M32.2402 12.24L41.0002 30.81C55.3202 23.64 71.8802 20.01 88.8002 20.01C105.72 20.01 122.28 23.64 136.6 30.81L145.36 12.24C127.61 3.3 107.61 0 87.6002 0H90.0002C69.9902 0 49.9902 3.3 32.2402 12.24Z" fill="url(#paint0_linear_1_8)"/>
    <path d="M145.36 167.76C163.11 158.82 178.5 144.99 188.97 127.98L169.38 119.58C161.46 132.45 150.21 143.07 136.6 150.21C122.28 157.38 105.72 161.01 88.8002 161.01C71.8802 161.01 55.3202 157.38 41.0002 150.21C27.3902 143.07 16.1402 132.45 8.2202 119.58L-11.3698 127.98C-1.8998 144.99 13.4902 158.82 31.2402 167.76C49.6902 177.06 69.9902 180.06 90.0002 180.06C110.01 180.06 130.31 177.06 148.76 167.76H145.36Z" fill="url(#paint1_linear_1_8)"/>
    <path d="M8.2202 119.58C16.1402 132.45 27.3902 143.07 41.0002 150.21C55.3202 157.38 71.8802 161.01 88.8002 161.01C105.72 161.01 122.28 157.38 136.6 150.21C150.21 143.07 161.46 132.45 169.38 119.58L188.97 127.98C178.5 144.99 163.11 158.82 145.36 167.76C126.91 177.06 106.61 180.06 86.6002 180.06C66.5902 180.06 46.2902 177.06 27.8402 167.76C10.0902 158.82 -5.2998 144.99 -15.7698 127.98L8.2202 119.58Z" fill="url(#paint2_linear_1_8)"/>
    <path d="M188.97 127.98L169.38 119.58C161.46 132.45 150.21 143.07 136.6 150.21C122.28 157.38 105.72 161.01 88.8002 161.01C71.8802 161.01 55.3202 157.38 41.0002 150.21C27.3902 143.07 16.1402 132.45 8.2202 119.58L-11.3698 127.98C-1.8998 144.99 13.4902 158.82 31.2402 167.76C49.6902 177.06 69.9902 180.06 90.0002 180.06C110.01 180.06 130.31 177.06 148.76 167.76H145.36C163.11 158.82 178.5 144.99 188.97 127.98Z" fill="url(#paint3_linear_1_8)"/>
    <path d="M41.0002 30.81L32.2402 12.24C14.4902 21.18 0.3602 34.98 -8.9398 52.02L10.6502 60.42C18.5702 47.55 29.8202 36.93 41.0002 30.81Z" fill="url(#paint4_linear_1_8)"/>
    <path d="M10.6502 60.42C18.5702 47.55 29.8202 36.93 41.0002 30.81L32.2402 12.24C14.4902 21.18 0.3602 34.98 -8.9398 52.02L10.6502 60.42Z" fill="url(#paint5_linear_1_8)"/>
    <path d="M136.6 30.81C147.78 36.93 159.03 47.55 166.95 60.42L186.54 52.02C177.24 34.98 163.11 21.18 145.36 12.24L136.6 30.81Z" fill="url(#paint6_linear_1_8)"/>
    <path d="M166.95 60.42C159.03 47.55 147.78 36.93 136.6 30.81L145.36 12.24C163.11 21.18 177.24 34.98 186.54 52.02L166.95 60.42Z" fill="url(#paint7_linear_1_8)"/>
    <path d="M90.0002 40.02C56.9102 40.02 30.0002 66.93 30.0002 100.02C30.0002 133.11 56.9102 160.02 90.0002 160.02C123.09 160.02 150 133.11 150 100.02C150 66.93 123.09 40.02 90.0002 40.02ZM90.0002 140.01C67.9102 140.01 50.0102 122.11 50.0102 100.02C50.0102 77.93 67.9102 60.03 90.0002 60.03C112.09 60.03 129.99 77.93 129.99 100.02C129.99 122.11 112.09 140.01 90.0002 140.01Z" fill="white"/>
    <path d="M90.0002 40.02C56.9102 40.02 30.0002 66.93 30.0002 100.02C30.0002 133.11 56.9102 160.02 90.0002 160.02C123.09 160.02 150 133.11 150 100.02C150 66.93 123.09 40.02 90.0002 40.02ZM90.0002 140.01C67.9102 140.01 50.0102 122.11 50.0102 100.02C50.0102 77.93 67.9102 60.03 90.0002 60.03C112.09 60.03 129.99 77.93 129.99 100.02C129.99 122.11 112.09 140.01 90.0002 140.01Z" fill="url(#paint8_linear_1_8)"/>
    <defs>
      <linearGradient id="paint0_linear_1_8" x1="90.0002" y1="0" x2="90.0002" y2="30.81" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1_8" x1="90.0002" y1="119.58" x2="90.0002" y2="180.06" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0"/>
        <stop offset="1" stopColor="white"/>
      </linearGradient>
      <linearGradient id="paint2_linear_1_8" x1="88.8002" y1="119.58" x2="88.8002" y2="180.06" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0"/>
        <stop offset="1" stopColor="white"/>
      </linearGradient>
      <linearGradient id="paint3_linear_1_8" x1="90.0002" y1="119.58" x2="90.0002" y2="180.06" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0"/>
        <stop offset="1" stopColor="white"/>
      </linearGradient>
      <linearGradient id="paint4_linear_1_8" x1="21.6202" y1="12.24" x2="21.6202" y2="60.42" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint5_linear_1_8" x1="21.6202" y1="12.24" x2="21.6202" y2="60.42" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint6_linear_1_8" x1="161.58" y1="12.24" x2="161.58" y2="60.42" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint7_linear_1_8" x1="161.58" y1="12.24" x2="161.58" y2="60.42" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint8_linear_1_8" x1="90.0002" y1="40.02" x2="90.0002" y2="160.02" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

// Custom TypeScript icon component
const TSIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"/>
  </svg>
);

// Custom Bootstrap icon component
const BootstrapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.002 1.5H5.998A2.503 2.503 0 0 0 3.5 4v16c0 1.379 1.122 2.5 2.498 2.5h12.004A2.503 2.503  ​0 0 0 20.5 20V4c0-1.379-1.122-2.5-2.498-2.5zM11 16.5c0 .276-.224.5-.5.5H7.5v-9H10c1.379 0 2.5 1.121 2.5 2.5 0 .829-.448 1.5-1 1.5.552 0 1 .671 1 1.5 0 1.379-1.121 2.5-2.5 2.5zm.5-6c0 .827-.673 1.5-1.5 1.5H8.5V9H10c.827 0 1.5.673 1.5 1.5zm0 3c0 .827-.673 1.5-1.5 1.5H8.5V12H10c.827 0 1.5.673 1.5 1.5zm4.5 3.5h-2.5c-1.379 0-2.5-1.121-2.5-2.5 0-.829.448-1.5 1-1.5-.552 0-1-.671-1-1.5 0-1.379 1.121-2.5 2.5-2.5H15.5v9zm-1.5-6h-1v1.5h1c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zm0 3h-1V15h1c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5z"/>
  </svg>
);

export default function About() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const skills = [
    { icon: Code, title: "Full Stack Development", desc: "Expert in modern web technologies", color: "from-purple-500 to-pink-500" },
    { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful user experiences", color: "from-cyan-500 to-blue-500" },
    { icon: Rocket, title: "Fast Performance", desc: "Optimized and lightning fast", color: "from-orange-500 to-red-500" },
    { icon: Zap, title: "Modern Tech Stack", desc: "Always using latest technologies", color: "from-green-500 to-emerald-500" },
    { icon: Braces, title: "Problem Solving", desc: "Creative & efficient solutions", color: "from-yellow-500 to-amber-500" },
    { icon: Database, title: "API Integration", desc: "RESTful & GraphQL APIs", color: "from-indigo-500 to-purple-500" },
    { icon: Github, title: "Version Control", desc: "Git & collaboration tools", color: "from-gray-600 to-gray-800" }
  ];

  const personal = [
    { icon: GraduationCap, label: "Education", value: "M.Sc in CSE", color: "from-blue-500 to-indigo-500" },
    { icon: MapPin, label: "Location", value: "Dhaka", color: "from-pink-500 to-rose-500" },
    { icon: Plane, label: "Traveling", color: "from-purple-500 to-violet-500" },
    { icon: Code, label: "Open Source", color: "from-green-500 to-teal-500" }
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Frontend Developer",
      company: "NextGen Solutions",
      description: "Driving technical innovation and mentoring the next generation of developers.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      achievements: ["Technical strategy", "Team mentorship", "Innovation initiatives"]
    },
    {
      year: "2021 - 2023",
      title: "Junior Frontend Developer",
      company: "Digital Innovations Inc.",
      description: "Developed complex web applications and worked with modern state management solutions.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      achievements: ["Led frontend for 3 major projects", "Implemented Redux state management", "Mentored junior developers"]
    },
    {
      year: "2020 - 2021",
      title: "Junior Developer",
      company: "Tech Solutions Ltd.",
      description: "Started my journey building responsive websites and learning modern JavaScript frameworks.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      achievements: ["Built 10+ responsive websites", "Learned React & Vue.js", "Collaborated with design teams"]
    },
  ];

  const techStack = [
    { icon: FileCode, title: "HTML5", desc: "Semantic markup & structure", color: "from-orange-500 to-red-500" },
    { icon: FileText, title: "CSS3", desc: "Styling & responsive design", color: "from-blue-500 to-cyan-500" },
    { icon: Braces, title: "JavaScript", desc: "Interactive web experiences", color: "from-yellow-500 to-amber-500" },
    { icon: ReactIcon, title: "React", desc: "Component-based UI library", color: "from-cyan-500 to-blue-500" },
    { icon: NextIcon, title: "Next.js", desc: "React framework for production", color: "from-gray-800 to-gray-900" },
    { icon: NodeIcon, title: "Node.js", desc: "Server-side JavaScript runtime", color: "from-green-500 to-emerald-500" },
    { icon: TSIcon, title: "TypeScript", desc: "Typed JavaScript superset", color: "from-blue-600 to-indigo-600" },
    { icon: TailwindIcon, title: "Tailwind CSS", desc: "Utility-first CSS framework", color: "from-cyan-400 to-teal-500" },
    { icon: BootstrapIcon, title: "Bootstrap", desc: "Popular CSS framework", color: "from-purple-500 to-indigo-500" },
    { icon: ReduxIcon, title: "Redux", desc: "Predictable state container", color: "from-purple-500 to-pink-500" },
    { icon: Database, title: "Zustand", desc: "Minimalist state management", color: "from-indigo-500 to-purple-500" },
    { icon: Github, title: "GitHub", desc: "Version control & collaboration", color: "from-gray-700 to-gray-900" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1,
        delayChildren: isMobile ? 0 : 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: isMobile ? 0 : 30, opacity: isMobile ? 1 : 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0 : 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white py-12 md:py-20 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1]
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1]
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial={isMobile ? "visible" : "hidden"}
          animate={isInView ? "visible" : (isMobile ? "visible" : "hidden")}
        >
          {/* Section Title */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.div 
              className="h-1 w-24 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: isMobile ? 96 : 128 } : { width: 0 }}
              transition={{ duration: 0.8, delay: isMobile ? 0 : 0.5 }}
            />
            <p className="text-gray-300 mt-6 text-base md:text-lg max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Left Side - Story, Education & Experience */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              {/* My Journey Section */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-purple-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/20 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                  I&apos;m a passionate <span className="text-purple-400 font-semibold">Fontend Developer</span> with over 5 years of experience in creating stunning web applications. My journey started with a curiosity about how websites work, and it has evolved into a career I absolutely love.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                  I specialize in building <span className="text-cyan-400 font-semibold">modern, responsive, and user-friendly</span> applications using the latest technologies. Every project is an opportunity to learn something new and push the boundaries of what&apos;s possible.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </motion.div>

              {/* Education & Interests Section */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-indigo-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-5 text-white flex items-center gap-2">
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
                        transition={{ delay: isMobile ? 0 : (1.5 + index * 0.1) }}
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <motion.div
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
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

              {/* Experience Timeline Section */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-cyan-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="text-cyan-400" size={24} />
                    Professional Journey
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-300 text-sm">
                    <Calendar size={16} />
                    <span>2020 - Present</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <motion.div
                        key={exp.year}
                        className="group relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: isMobile ? 0 : (2 + index * 0.1) }}
                      >
                        {/* Timeline line */}
                        {index < experiences.length - 1 && (
                          <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}

                        <div className="flex gap-4">
                          {/* Icon with gradient */}
                          <motion.div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                              <Icon className="text-white" size={20} />
                            </div>
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 bg-gray-800/30 rounded-xl p-4 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-gray-800/50">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                                {exp.title}
                              </h4>
                              <span className="text-cyan-400 font-semibold text-sm bg-cyan-500/10 px-3 py-1 rounded-full">
                                {exp.year}
                              </span>
                            </div>
                            <p className="text-purple-300 font-medium text-sm mb-2">{exp.company}</p>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{exp.description}</p>
                            
                            {/* Achievements */}
                            <div className="flex flex-wrap gap-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <motion.span
                                  key={achievementIndex}
                                  className="text-xs bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-600/50 group-hover:border-cyan-500/30 transition-all"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {achievement}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Hover glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 blur-sm transition-opacity duration-300`}
                        />
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
              {/* Enhanced Tech Stack Section */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-indigo-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Centered Tech Stack Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Tech Stack</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={tech.title}
                        className="group relative"
                        whileHover={{ y: -5 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20,
                          duration: 0.3
                        }}
                      >
                        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl p-4 border border-gray-700/50 h-full flex flex-col items-center text-center overflow-hidden">
                          {/* Background overlay on hover */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl`}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Icon with gradient border */}
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} p-0.5 mb-3 flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                              <Icon />
                            </div>
                          </motion.div>
                          
                          <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-purple-300 transition-colors">
                            {tech.title}
                          </h4>
                          <p className="text-gray-400 text-xs leading-tight">
                            {tech.desc}
                          </p>
                          
                          {/* Glow effect on hover */}
                          <motion.div
                            className={`absolute inset-0 rounded-xl border border-${tech.color.split('-')[1]}-500/30 opacity-0 group-hover:opacity-100`}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Skills Grid with Percentage Bars */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/50 via-purple-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Core Skills</h3>
                <div className="space-y-5">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    const percentages = [95, 90, 88, 92, 85, 87, 90];
                    return (
                      <motion.div
                        key={skill.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: isMobile ? 0 : (1.8 + index * 0.1) }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="text-white" size={16} />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-white text-sm md:text-base group-hover:text-purple-400 transition-colors">
                                {skill.title}
                              </h4>
                              <span className="text-xs md:text-sm font-semibold text-purple-400">{percentages[index]}%</span>
                            </div>
                            <p className="text-gray-400 text-xs mb-2">{skill.desc}</p>
                            <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${percentages[index]}%` } : { width: 0 }}
                                transition={{ 
                                  delay: isMobile ? 0 : (2 + index * 0.1),
                                  duration: isMobile ? 0 : 1,
                                  ease: [0.25, 0.1, 0.25, 1]
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
            className="text-center mt-8 md:mt-12"
            variants={itemVariants}
          >
            <motion.button
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg relative overflow-hidden group text-sm md:text-base"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 15,
                duration: 0.3
              }}
            >
              <span className="relative z-10">Let&apos;s Work Together</span>
              
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"
                initial={{ x: "-100%" }}
                animate={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-500/20 blur-md"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  transition: { 
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 1
                  }
                }}
              />
              
              {/* Subtle particle effects */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white/80 rounded-full"
                    style={{
                      top: `${50 + 30 * Math.sin((i * 90) * Math.PI / 180)}%`,
                      left: `${50 + 30 * Math.cos((i * 90) * Math.PI / 180)}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      transition: {
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}