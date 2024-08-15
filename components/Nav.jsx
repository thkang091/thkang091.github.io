"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const currentIndex = links.findIndex(link => link.path === pathname);
    setActiveIndex(currentIndex);
  }, [pathname]);

  return (
    <nav className="hidden xl:flex space-x-8 relative">
      {activeIndex !== null && (
        <motion.div
          className="absolute bottom-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          layoutId="underline"
          initial={false}
          animate={{
            width: '60px',
            x: `calc(${activeIndex * 100}% + ${activeIndex * 2}rem)`
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30
          }}
        />
      )}
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname
              ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              : "text-gray-700"
          } capitalize font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition-all duration-300 relative py-2`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(links.findIndex(l => l.path === pathname))}
        >
          <motion.span
            initial={{ y: 0 }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {link.name}
          </motion.span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;