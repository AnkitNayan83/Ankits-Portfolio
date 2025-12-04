"use client";

import { UserAvatar } from "@/components/user-avatar";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-800 bg-gray-900/95 px-4 py-3 text-white shadow-lg backdrop-blur-md transition-all duration-300 sm:px-6 md:px-8 md:py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo and title */}
      <motion.div
        className="flex flex-shrink-0 items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 transition-colors hover:text-blue-400"
        >
          <Code2 className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />
          <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent sm:text-xl md:text-2xl">
            Ankit Nayan
          </h1>
        </Link>
      </motion.div>

      {/* Desktop Navigation - Left aligned */}
      <div className="ml-6 hidden flex-1 items-center gap-1 lg:flex xl:gap-2">
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
                className="rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-2 text-xs font-semibold transition-all hover:from-blue-600/30 hover:to-purple-600/30 xl:px-4 xl:text-sm"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-xs font-medium text-gray-300 transition-all hover:bg-gray-800/50 hover:text-blue-400 xl:px-4 xl:text-sm"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
          className="flex items-center rounded-lg px-2 py-2 text-white transition-colors hover:bg-gray-800/50 sm:px-3 lg:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
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
            className="absolute left-0 right-0 top-full overflow-hidden border-b border-gray-800 bg-gray-900/95 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col space-y-1 px-4 pb-4 pt-2">
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
                      className="block rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3 text-center font-semibold transition-all hover:from-blue-600/30 hover:to-purple-600/30"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-4 py-3 text-gray-300 transition-all hover:bg-gray-800/50 hover:text-blue-400"
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
