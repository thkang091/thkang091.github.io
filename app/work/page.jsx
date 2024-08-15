"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Gopher Tunnel",
    title: "3D Map Application",
    description:
      "Collaborated with 30+ team members to develop user-friendly 3D map applications for the University of Minnesota's tunnels, serving over 8M users and 50+ campus buildings.",
    stack: ["TypeScript", "React Native", "ExpressJS", "MYSQL", "Google Cloud Platform", "Neo4j"],
    image: "/assets/projects/gophertunnel.jpeg",
    github: "https://github.com/gopher-tunnels",
  },
  {
    num: "02",
    category: "McNamara Official Website",
    title: "University Building Showcase",
    description:
      "Designed and developed the official website for McNamara Alumni Center, showcasing its unique architecture and event spaces.",
    stack: ["PHP", "JavaScript", "CSS", "WordPress", "MySQL", "Bootstrap", "jQuery"],
    video: "/assets/projects/mcnamara.mp4",
    live: "https://mac-events.org/",
  },
  {
    num: "03",
    category: "Budget-Tracker",
    title: "Financial Management & Planning Platform",
    description:
      "Developed a solo full-stack web app offering a Financial Overview, Budgets, saving goals, extensive user statistics, multi-currency support, and export options, all with a focus on privacy.",
    stack: ["Javascript","React", "Tailwind CSS", "Firebase", "Google Cloud Platform"],
    image: "/assets/projects/bt.png",
    live: "https://budgettracking-73e00.web.app/",
    github: "https://github.com/thkang091/Budget-Tracker",
  },
  {
    num: "04",
    category: "KCSO Official Website",
    title: "Club Website",
    description:
      "Led a team to develop a full-stack club website for the Korean Computer Scientist Organization, creating a communication hub for 40+ members with optimized server-side logic and database schemas.",
    stack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/kcso.png",
    github: "https://github.com/thkang091/KCSO-Official-Website",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  const goToSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-screen"
            >
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <motion.div
                    className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.num}
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white">{project.category}</h2>
                  <h3 className="text-2xl font-semibold text-purple-300">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium text-purple-200 bg-purple-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  {project.live && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.live}
                            className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center group transition-all duration-300 hover:bg-purple-500"
                          >
                            <BsArrowUpRight className="text-white text-xl group-hover:scale-110 transition-all duration-300" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {project.github && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={project.github}
                            className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center group transition-all duration-300 hover:bg-purple-500"
                          >
                            <BsGithub className="text-white text-xl group-hover:scale-110 transition-all duration-300" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
              <div className="relative">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  modules={[Navigation, Pagination, Autoplay]}
                  onSwiper={setSwiper}
                  onSlideChange={handleSlideChange}
                  className="h-[460px] rounded-lg overflow-hidden"
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-full group">
                        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                        {project.video ? (
                          <video
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <Image
                            src={project.image}
                            layout="fill"
                            objectFit="cover"
                            alt={project.title}
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-button-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2">
                  <BsChevronLeft className="text-white text-3xl" />
                </div>
                <div className="swiper-button-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2">
                  <BsChevronRight className="text-white text-3xl" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-12 flex justify-center">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                index === project.num - 1 ? 'bg-purple-500 scale-125' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;