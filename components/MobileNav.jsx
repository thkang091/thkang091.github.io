"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="xl:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 bg-purple-700 rounded-md"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-5 flex flex-col justify-between"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-full h-0.5 bg-white rounded-full"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: i === 1 
                  ? { opacity: 0 } 
                  : { rotate: i === 0 ? 45 : -45, y: i === 0 ? 8 : -8 }
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-purple-800 z-40 p-6"
          >
            <div className="flex flex-col space-y-4 mt-16">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-white text-lg ${
                    pathname === link.path ? "font-bold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;