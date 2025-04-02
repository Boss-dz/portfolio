"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed text-white top-0 left-0 w-full  bg-[#7226FF]/30 backdrop-blur-md shadow-md z-50 font-mono text-xl uppercase">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="#hero" className="font-bold text-2xl hover:text-[#f9c7fe]">
          Home
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-xl uppercase">
          <Fade cascade={true} damping={0.3} triggerOnce={true}>
            <Link href="#about" className="hover:text-[#f9c7fe]">
              About
            </Link>
            <Link href="#edit" className="hover:text-[#f9c7fe]">
              Edit
            </Link>
            <Link href="#testimonials" className="hover:text-[#f9c7fe]">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-[#f9c7fe]">
              Contact
            </Link>
          </Fade>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#7226FF]/30 backdrop-blur-lg shadow-lg">
          <Link
            href="#about"
            className="hover:text-amber-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#edit"
            className="hover:text-amber-700"
            onClick={() => setIsOpen(false)}
          >
            Edit
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-amber-700"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:text-amber-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
