"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]">
                Taehoon
              </h1>
            </Link>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
              >
                <motion.span
                  className={`relative text-lg font-medium ${
                    link.path === pathname
                      ? "text-[#854CE6]"
                      : "text-white hover:text-[#854CE6]"
                  } transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  {link.path === pathname && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#854CE6] to-[#6e9bf0]"
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </nav>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-[#854CE6] to-[#6e9bf0] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(133, 76, 230, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-64 bg-[#1a1a1a] bg-opacity-95 backdrop-blur-md z-40 p-6"
              >
                <div className="flex flex-col space-y-4 mt-16">
                  {links.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`text-white text-lg ${
                        pathname === link.path ? "text-[#854CE6] font-bold" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/contact" className="mt-4">
                    <motion.button
                      className="bg-gradient-to-r from-[#854CE6] to-[#6e9bf0] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 w-full"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(133, 76, 230, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get in Touch
                    </motion.button>
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;