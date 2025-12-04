"use client";

import { UserAvatar } from "@/components/user-avatar";
import { Menu, X, Code2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#coding", label: "Coding" },
    { href: "/#contact", label: "Contact" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 text-white bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo and title */}
      <motion.div
        className="flex items-center gap-2 flex-shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <Link href="/" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <Code2 className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ankit Nayan
          </h1>
        </Link>
      </motion.div>

      {/* Desktop Navigation - Left aligned */}
      <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 ml-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {link.href === "/blogs" ? (
              <Link
                href={link.href}
                className="px-3 xl:px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-xs xl:text-sm font-semibold hover:from-blue-600/30 hover:to-purple-600/30 transition-all"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Right side - Avatar and Mobile menu */}
      <div className="flex items-center gap-2 sm:gap-4">
        <UserAvatar />
        
        {/* Mobile menu button */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden flex items-center rounded-lg px-2 sm:px-3 py-2 text-white hover:bg-gray-800/50 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 lg:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
          >
            <div className="flex flex-col space-y-1 pt-2 pb-4 px-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.href === "/blogs" ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-center font-semibold hover:from-blue-600/30 hover:to-purple-600/30 transition-all"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-all rounded-lg"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
