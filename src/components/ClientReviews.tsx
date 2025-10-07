"use client";

import { motion, useInView, Variants } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect, useMemo } from 'react';

// Helper function to generate deterministic pseudo-random values
const deterministicRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Helper function to round to a specific number of decimal places
const roundToDecimals = (value: number, decimals: number = 4) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

// Generate bubble properties with consistent values
const generateBubbleProperties = (index: number, sizeRange: [number, number] = [30, 80]) => {
  const seed = index * 100;
  const size = roundToDecimals(deterministicRandom(seed) * (sizeRange[1] - sizeRange[0]) + sizeRange[0]);
  const top = roundToDecimals(deterministicRandom(seed + 1) * 100);
  const left = roundToDecimals(deterministicRandom(seed + 2) * 100);
  const duration = roundToDecimals(deterministicRandom(seed + 3) * 10 + 8);
  const delay = roundToDecimals(deterministicRandom(seed + 4) * 5);
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
    duration,
    delay
  };
};

// Memoized Bubble component
const Bubble = ({ index, sizeRange, seedOffset = 0 }: { 
  index: number; 
  sizeRange?: [number, number];
  seedOffset?: number;
}) => {
  const bubbleProps = generateBubbleProperties(index + seedOffset, sizeRange);
  
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-rose-200/60 to-orange-200/60 backdrop-blur-sm border border-white/30"
      style={{
        width: bubbleProps.width,
        height: bubbleProps.height,
        top: bubbleProps.top,
        left: bubbleProps.left,
      }}
      animate={{
        y: [0, -roundToDecimals(deterministicRandom(index * 20 + seedOffset) * 200 - 100), 0],
        x: [0, roundToDecimals(deterministicRandom(index * 21 + seedOffset) * 80 - 40), 0],
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: bubbleProps.duration,
        repeat: Infinity,
        delay: bubbleProps.delay,
        ease: [0.42, 0, 0.58, 1]
      }}
    />
  );
};

export default function ClientR2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Enable animations only when in view
  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      review: "Working with Rozena & its experience was an absolute pleasure! The attention to detail and creative solutions provided exceeded our expectations. Our website now perfectly represents our brand and has significantly increased our conversion rates.",
      rating: 5,
      gradient: "from-rose-400 to-pink-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Founder, Digital Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      review: "Exceptional work! The project was delivered on time and the quality was outstanding. Communication was smooth throughout the entire process. Highly recommended for any web development needs.",
      rating: 5,
      gradient: "from-orange-400 to-red-500"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Marketing Director, BrandCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      review: "Incredible talent and professionalism! Our e-commerce platform is now fast, beautiful, and user-friendly. The conversion rate has increased significantly since the launch.",
      rating: 5,
      gradient: "from-amber-400 to-yellow-500"
    },
    {
      id: 4,
      name: "David Kim",
      designation: "CTO, InnovateLabs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      review: "A true professional with amazing skills! The application built for us is robust, scalable, and maintainable. The code quality is exceptional and well-documented.",
      rating: 5,
      gradient: "from-red-400 to-rose-500"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      designation: "Product Manager, AppVenture",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      review: "Best developer we have worked with! Creative, responsive, and delivers beyond expectations. Our mobile app is now a huge success in the market thanks to their expertise.",
      rating: 5,
      gradient: "from-orange-400 to-amber-500"
    },
    {
      id: 6,
      name: "Robert Taylor",
      designation: "Marketing Head, GrowthCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      review: "The website redesign transformed our online presence completely. User engagement has increased by 200% and our bounce rate decreased significantly. Truly outstanding work!",
      rating: 5,
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      id: 7,
      name: "Jennifer Lee",
      designation: "Creative Director, DesignStudio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      review: "Working with this developer was a game-changer for our business. The attention to detail and creative problem-solving skills are unmatched. Highly recommended!",
      rating: 5,
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      id: 8,
      name: "Daniel Wilson",
      designation: "Operations Manager, TechFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      review: "The custom dashboard developed for our team has streamlined our operations immensely. The intuitive design and powerful features have saved us countless hours.",
      rating: 5,
      gradient: "from-emerald-400 to-green-500"
    },
    {
      id: 9,
      name: "Sophia Martinez",
      designation: "Brand Manager, Lifestyle Co",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      review: "Our brands digital transformation was seamless thanks to this developer's expertise. The new website perfectly captures our essence and has received rave reviews from customers.",
      rating: 5,
      gradient: "from-violet-400 to-purple-500"
    },
    {
      id: 10,
      name: "James Thompson",
      designation: "Founder, StartupHub",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      review: "From concept to launch, the entire process was smooth and professional. The final product exceeded our expectations and has become a cornerstone of our business success.",
      rating: 5,
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!shouldAnimate) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [shouldAnimate, reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Function to get 4 reviews for grid display (always the first 4 reviews)
  const getGridReviews = () => {
    // Always return the first 4 reviews, regardless of slider state
    return reviews.slice(0, 4);
  };

  // Memoize bubbles to prevent unnecessary recalculations
  const backgroundBubbles = useMemo(() => {
    return shouldAnimate && !isMobile ? 
      Array.from({ length: 8 }).map((_, i) => <Bubble key={i} index={i} />) : 
      null;
  }, [shouldAnimate, isMobile]);

  const titleBubbles = useMemo(() => {
    return shouldAnimate && !isMobile ? 
      Array.from({ length: 6 }).map((_, i) => (
        <Bubble key={i} index={i} sizeRange={[20, 40]} seedOffset={100} />
      )) : 
      null;
  }, [shouldAnimate, isMobile]);

  const cardBubbles = useMemo(() => {
    return shouldAnimate ? 
      Array.from({ length: isMobile ? 3 : 5 }).map((_, i) => (
        <Bubble key={i} index={i} sizeRange={[15, 30]} seedOffset={200} />
      )) : 
      null;
  }, [shouldAnimate, isMobile]);

  const buttonBubbles = useMemo(() => {
    return shouldAnimate ? 
      Array.from({ length: isMobile ? 2 : 4 }).map((_, i) => (
        <Bubble key={i} index={i} sizeRange={[6, 12]} seedOffset={300} />
      )) : 
      null;
  }, [shouldAnimate, isMobile]);

  const subtitleBubbles = useMemo(() => {
    return shouldAnimate && !isMobile ? 
      Array.from({ length: 5 }).map((_, i) => (
        <Bubble key={i} index={i} sizeRange={[15, 35]} seedOffset={400} />
      )) : 
      null;
  }, [shouldAnimate, isMobile]);

  const gridCardBubbles = useMemo(() => {
    return shouldAnimate ? 
      Array.from({ length: isMobile ? 2 : 4 }).map((_, i) => (
        <Bubble key={i} index={i} sizeRange={[10, 25]} seedOffset={500} />
      )) : 
      null;
  }, [shouldAnimate, isMobile]);

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
      className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 text-gray-900 py-12 md:py-16 px-4 relative overflow-hidden"
      id="reviews"
    >
      {/* Background Decorative Elements with Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated bubbles */}
        {shouldAnimate && (
          <>
            <motion.div
              className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-rose-300/55 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1]
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-amber-300/25 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
                x: [0, -15, 0],
                y: [0, 15, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1]
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-orange-300/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 30, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1]
              }}
            />
          </>
        )}
        
        {/* Small floating bubbles */}
        {backgroundBubbles}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial={isMobile ? "visible" : "hidden"}
          animate={isInView ? "visible" : (isMobile ? "visible" : "hidden")}
        >
          {/* Section Title */}
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <motion.div className="inline-block relative">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Client Reviews
                </span>
              </motion.h2>
              
              {/* Floating bubbles around title */}
              {titleBubbles}
            </motion.div>
            
            <motion.div
              className="h-1 w-24 md:w-32 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: isMobile ? 96 : 128 } : { width: 0 }}
              transition={{ duration: 0.8, delay: isMobile ? 0 : 0.5 }}
            />
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
              What my clients say about working with me
            </p>
          </motion.div>

          {/* Slider Container */}
          <motion.div className="relative mb-8" variants={itemVariants}>
            <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    {/* Card with optimized padding */}
                    <motion.div
                      className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-6 lg:p-8 border border-rose-100 shadow-xl relative overflow-hidden group h-full flex flex-col"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      {/* Floating bubbles inside card */}
                      {cardBubbles}
                      
                      <motion.div className="absolute top-4 right-4 opacity-5">
                        <Quote size={48} className="text-orange-500" />
                      </motion.div>

                      <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 items-center flex-grow">
                        {/* Image with optimized size */}
                        <div className="flex flex-col items-center gap-2 md:w-1/3">
                          <motion.div
                            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-transparent bg-gradient-to-br ${review.gradient} p-1 shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          >
                            <div className="w-full h-full rounded-full overflow-hidden bg-white">
                              <Image
                                src={review.image}
                                alt={review.name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </motion.div>

                          <div className="text-center">
                            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                              {review.name}
                            </h3>
                            <p
                              className={`text-xs md:text-sm bg-gradient-to-r ${review.gradient} bg-clip-text text-transparent font-semibold`}
                            >
                              {review.designation}
                            </p>
                          </div>

                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="fill-yellow-400 text-yellow-400"
                                size={16}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Review Text */}
                        <div className="md:w-2/3 text-center md:text-left">
                          <motion.p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                            &ldquo;{review.review}&rdquo;
                          </motion.p>
                          <motion.div
                            className={`h-1 w-16 md:w-24 bg-gradient-to-r ${review.gradient} rounded-full mt-3 mx-auto md:mx-0`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 md:-mx-16 pointer-events-none">
              <motion.button
                onClick={prevSlide}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all pointer-events-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Bubble effect inside button */}
                {buttonBubbles}
                <ChevronLeft className="text-white" size={20} />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all pointer-events-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Bubble effect inside button */}
                {buttonBubbles}
                <ChevronRight className="text-white" size={20} />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? "w-8 h-2 md:w-12 md:h-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500"
                      : "w-2 h-2 md:w-3 md:h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Grid Section */}
          <motion.div variants={itemVariants}>
            <div className="inline-block relative mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                More Reviews
              </h3>
              
              {/* Floating bubbles around subtitle */}
              {subtitleBubbles}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {getGridReviews().map((review, index) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  className="bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 border border-rose-100 shadow-lg relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {/* Floating bubbles inside grid card */}
                  {gridCardBubbles}
                  
                  {/* Background gradient overlay on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  <motion.div className="absolute top-3 right-3 opacity-5">
                    <Quote size={48} className="text-orange-500" />
                  </motion.div>

                  <div className="flex flex-col items-center text-center relative z-10">
                    {/* Image with enhanced hover effect */}
                    <motion.div
                      className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-br ${review.gradient} p-1 shadow-md mb-3 md:mb-4`}
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 8,
                        borderColor: review.gradient.split(' ')[1]
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={review.image}
                          alt={review.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    <div className="mb-2 md:mb-3">
                      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 group-hover:text-rose-600 transition-colors">
                        {review.name}
                      </h3>
                      <p
                        className={`text-xs bg-gradient-to-r ${review.gradient} bg-clip-text text-transparent font-semibold`}
                      >
                        {review.designation}
                      </p>
                    </div>

                    <div className="flex gap-1 mb-2 md:mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-yellow-400 text-yellow-400"
                          size={14}
                        />
                      ))}
                    </div>

                    <motion.p className="text-gray-700 text-xs md:text-sm leading-relaxed italic group-hover:text-gray-900 transition-colors">
                      &ldquo;{review.review}&rdquo;
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}