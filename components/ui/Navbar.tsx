"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export function Navbar({ transparent = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full ${
        transparent
          ? "bg-transparent backdrop-blur-none"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Main container - responsive width */}
      <div className="mx-auto flex items-center justify-between h-[50.16px] mt-[17px] px-4 sm:px-6 lg:px-[80px] max-w-[1280px]">
        {/* Logo - same as desktop */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center w-[157.14px] h-[50.16px] gap-[8px]">
            <div className="relative w-[50.16px] h-[50.16px]">
              <Image
                src="/images/PRIAN LOGO 6[1] 1.png"
                alt="Logo Part 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[98.98px] h-[30.70px]">
              <Image
                src="/images/logo.svg"
                alt="Logo Part 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - unchanged */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/clients" className="text-gray-600 hover:text-gray-900">
            Clients
          </Link>
          <Link
            href="/contact"
            className="bg-[#FF743F] text-white px-6 py-2 rounded-full hover:bg-[#FF743F]/90 transition"
          >
            LET&apos;S TALK
          </Link>
        </div>

        {/* Mobile Menu Button - only visible on mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu - only on mobile */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm py-4 px-6 w-full">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/clients"
                className="text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>
              <Link
                href="/contact"
                className="bg-[#FF743F] text-white px-6 py-2 rounded-full hover:bg-[#FF743F]/90 transition text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                LET&apos;S TALK
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
