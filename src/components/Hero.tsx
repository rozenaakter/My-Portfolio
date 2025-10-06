"use client";

import { motion, Variants, useMotionValue, useTransform } from 'framer-motion';
import { Award, Briefcase, Users, Star, MessageCircle, Hand, Sparkles } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  life: number;
}

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isInSection, setIsInSection] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [5, -5]);
  const rotateY = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1200], [-5, 5]);

  const backgroundCircles = useMemo(() => {
    return [...Array(20)].map((_, i) => {
      const size = Math.random() * 150 + 30;
      const colors = [
        'bg-purple-500/20',
        'bg-indigo-500/20',
        'bg-purple-400/15',
        'bg-indigo-400/15',
        'bg-purple-600/10',
        'bg-indigo-600/10'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const hasGlow = Math.random() > 0.7;
      
      return {
        id: i,
        size,
        color,
        hasGlow,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 15 + 15,
        yMovement: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        xMovement: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        scaleMovement: [1, Math.random() * 0.5 + 0.8, Math.random() * 0.5 + 0.8, 1],
        opacityMovement: [0.2, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3, 0.2]
      };
    });
  }, []);

  const smallCircles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      width: Math.random() * 20 + 5,
      height: Math.random() * 20 + 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 5,
      yMovement: [0, Math.random() * 100 - 50],
      xMovement: [0, Math.random() * 100 - 50]
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isInSection) return;

    const interval = setInterval(() => {
      setParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + Math.cos(p.angle) * p.speed,
            y: p.y + Math.sin(p.angle) * p.speed,
            life: p.life - 1
          }))
          .filter(p => p.life > 0);

        const newParticles = Array.from({ length: 3 }, (_, i) => ({
          id: Date.now() + i + Math.random(),
          x: cursorPosition.x,
          y: cursorPosition.y,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 3 + 1,
          life: 60
        }));

        return [...updated, ...newParticles].slice(-50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isInSection, cursorPosition]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 text-white pt-16 relative overflow-hidden"
      onMouseEnter={() => setIsInSection(true)}
      onMouseLeave={() => setIsInSection(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }}
    >
      {/* Particle Effect from Cursor */}
      {isInSection && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {particles.map((particle) => {
            const opacity = particle.life / 60;
            const size = 2;
            
            return (
              <div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: particle.x,
                  top: particle.y,
                  width: size,
                  height: size,
                  opacity: opacity,
                  backgroundColor: Math.random() > 0.5 ? '#a855f7' : '#ec4899',
                  boxShadow: `0 0 4px ${Math.random() > 0.5 ? '#a855f7' : '#ec4899'}`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
        </div>
      )}

      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {backgroundCircles.map((circle) => (
          <motion.div
            key={circle.id}
            className={`absolute rounded-full ${circle.color} ${circle.hasGlow ? 'shadow-lg shadow-purple-500/30' : ''}`}
            style={{
              width: circle.size,
              height: circle.size,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
            }}
            animate={{
              y: circle.yMovement,
              x: circle.xMovement,
              scale: circle.scaleMovement,
              opacity: circle.opacityMovement,
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {smallCircles.map((circle) => (
          <motion.div
            key={`small-${circle.id}`}
            className="absolute rounded-full bg-purple-400/10"
            style={{
              width: circle.width,
              height: circle.height,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
            }}
            animate={{
              y: circle.yMovement,
              x: circle.xMovement,
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="space-y-6 bg-gradient-to-br from-gray-800/40 via-purple-900/20 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent relative"
                  variants={itemVariants}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Negotiation Expert
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </motion.h2>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed text-lg font-light"
                variants={itemVariants}
              >
                I specialize in negotiating the best possible outcomes for my clients. 
                My approach combines technical expertise with strategic thinking to ensure 
                every project delivers maximum value.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-start space-x-4 group cursor-pointer p-3 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mt-1 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-sm font-bold text-white">✓</span>
                  </motion.div>
                  <div>
                    <p className="font-semibold text-purple-300 text-lg mb-1">Client Satisfaction</p>
                    <p className="text-gray-400 text-sm">
                      My clients consistently report high levels of satisfaction with the 
                      quality and timeliness of my work.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4 group cursor-pointer p-3 rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mt-1 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-sm font-bold text-white">✓</span>
                  </motion.div>
                  <div>
                    <p className="font-semibold text-indigo-300 text-lg mb-1">Value Delivery</p>
                    <p className="text-gray-400 text-sm">
                      I focus on understanding your business needs and delivering solutions 
                      that provide real value and competitive advantage.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4 group cursor-pointer p-3 rounded-xl hover:bg-pink-500/10 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mt-1 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-sm font-bold text-white">✓</span>
                  </motion.div>
                  <div>
                    <p className="font-semibold text-pink-300 text-lg mb-1">Long-term Partnerships</p>
                    <p className="text-gray-400 text-sm">
                      I believe in building lasting relationships with clients based on trust, 
                      transparency, and mutual success.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4 pt-6"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Sparkles size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">View My Work</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-transparent border-2 border-purple-500 text-purple-300 px-8 py-3.5 rounded-full font-semibold hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Let's Talk</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.div 
              variants={imageVariants}
              className="relative mx-auto w-64 h-64 rounded-full overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                border: '4px solid transparent',
                backgroundImage: 'linear-gradient(gray-900, gray-900), linear-gradient(135deg, #a855f7, #6366f1, #ec4899, #8b5cf6)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 0 60px rgba(168, 85, 247, 0.5), 0 0 100px rgba(99, 102, 241, 0.4), 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(168, 85, 247, 0.2)',
              }}
            >
              <img 
                src="/roze.jpeg" 
                alt="Your Name" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
              
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-400/50 transition-all duration-300"></div>
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
              >
                <motion.div 
                  className="flex items-center space-x-2 text-2xl font-bold text-white"
                  initial={{ y: 20 }}
                  animate={{ y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Hello</span>
                  <Hand 
                    className="text-yellow-400" 
                    size={24}
                    style={{ transform: 'rotate(20deg)' }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Name
                </span>
              </h1>
              <p className="text-xl text-purple-300">Full Stack Developer</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-md mx-auto"
            >
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 text-center border border-gray-700 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgb(168, 85, 247)',
                  boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase className="text-purple-400" size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 text-center border border-gray-700 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgb(99, 102, 241)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="text-indigo-400" size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold">30+</h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 text-center border border-gray-700 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgb(168, 85, 247)',
                  boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star className="text-purple-400" size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 text-center border border-gray-700 cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgb(99, 102, 241)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="text-indigo-400" size={28} />
                </motion.div>
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}