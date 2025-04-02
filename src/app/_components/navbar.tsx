"use client";

import { UserAvatar } from "@/components/user-avatar";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-20 flex flex-wrap items-center justify-between bg-gray-800 p-4 text-white shadow-lg">
      {/* Logo and title */}
      <div className="flex items-center">
        <Link href="/" className="hover:text-blue-400">
          <h1 className="text-xl font-bold md:text-2xl">Ankit Nayan</h1>
        </Link>
      </div>

      {/* Blog link - visible on all screens */}
      <div className="flex items-center justify-start gap-x-2">
        <Link
          href={"/blogs"}
          className="my-2 block w-[80px] rounded-lg bg-gray-900 p-1 text-center text-lg font-[600] hover:text-blue-500 md:mx-4 md:my-0 md:inline-block"
        >
          Blogs
        </Link>
        <UserAvatar />
      </div>

      {/* Mobile menu button */}
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center rounded px-3 py-2 text-white hover:bg-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`order-4 w-full md:flex md:w-auto md:items-center ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col space-y-2 pt-2 md:flex-row md:space-x-6 md:space-y-0 md:pt-0">
          <Link href="/#about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/#skills" className="hover:text-blue-400">
            Skills
          </Link>
          <Link href="/#experience" className="hover:text-blue-400">
            Experience
          </Link>
          <Link href="/#projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link href="/#coding" className="hover:text-blue-400">
            Coding Platforms
          </Link>
          <Link href="/#contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
