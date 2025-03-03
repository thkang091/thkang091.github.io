"use client"
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import CountUp from "react-countup";
import Image from 'next/image';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/thkang091" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/taehoon-kang" },
];

const Social = () => {
  return (
    <div className="flex gap-4">
      {socials.map((item, index) => (
        <motion.a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center text-2xl bg-gradient-to-r from-[#854CE6] to-[#6e9bf0] text-white hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

const stats = [
  { num: 4, text: "Internships Experiences" },
  { num: 1, text: "Research Experiences" }
];

const Stats = () => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
      ref={(element) => {
        if (element) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setInView(true);
              }
            },
            { threshold: 0.1 }
          );
          observer.observe(element);
        }
      }}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="text-center"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
        >
          <motion.div
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + index * 0.1 }}
          >
            <CountUp
              end={item.num}
              duration={2.5}
              delay={0.5}
              className="text-4xl md:text-5xl font-bold"
            />
            {item.num >= 1000 && <span className="text-4xl md:text-5xl font-bold">+</span>}
          </motion.div>
          <p className="mt-2 text-sm md:text-base text-gray-300">{item.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [30, -30]);
  const rotateY = useTransform(x, [-300, 300], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="w-full lg:w-2/5 max-w-md mx-auto lg:mx-0 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        className="w-full aspect-square relative cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY
        }}
      >
        {/* Front of the card (photo) */}
        <motion.div 
          className="absolute w-full h-full rounded-full overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src="/assets/photo2.png"
            alt="Taehoon Kang"
            layout="fill"
            objectFit="cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.7 }}
          />
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg font-semibold mb-2">Times Square, NYC</p>
            <p className="text-sm">Click to flip!</p>
          </motion.div>
          
          {/* Decorative elements */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="#854CE6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M 0,0 L 100,100 M 100,0 L 0,100"
              stroke="#6e9bf0"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
          
          {/* Interactive elements */}
          <motion.div
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#854CE6" }}
          >
            NYC
          </motion.div>
          <motion.div
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white cursor-pointer"
            whileHover={{ scale: 1.1, backgroundColor: "#6e9bf0" }}
          >
            2023
          </motion.div>
        </motion.div>

        {/* Back of the card (emoji) */}
        <motion.div 
          className="absolute w-full h-full rounded-full bg-gradient-to-br from-[#854CE6] to-[#6e9bf0] p-1"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
            <motion.span 
              className="text-8xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              👨‍💻
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const typedRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["Full-Stack Software Engineer", "Web Developer", "Machine Learning Engineer", "UX/UI Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#1a1a1a] overflow-hidden relative">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center lg:text-left w-full lg:w-3/5">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]">Taehoon Kang</span>
            </motion.h1>
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I&apos;m a <span ref={typedRef} className="text-transparent bg-clip-text bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]"></span>
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Junior Year Computer Science Major @ UMN-Twin Cities
            </motion.p>
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Social />
            </motion.div>
            <motion.a
              href="https://drive.google.com/file/d/1Vy8GVwj5kGTc7rSPLj2pFHg2rTmQw_rn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#854CE6] to-[#6e9bf0] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#854CE6]/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.span 
                className="flex items-center gap-2"
                initial={false}
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                View Resume
                <FiExternalLink className="text-xl" />
              </motion.span>
            </motion.a>
            <Stats />
          </div>
          <FlipCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
