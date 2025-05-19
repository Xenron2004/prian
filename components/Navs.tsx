// main navbar
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import logo from "../public/images/PRIAN LOGO 6[1] 1.png";
import logo from "../public/prianLogo.png";
import Logo from "../public/images/DigiLogo.png";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
// import { useRouter } from "next/router";

const Navbar = () => {
  // const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State for navbar visibility
  const [lastScrollTop, setLastScrollTop] = useState(0); // Track last scroll position

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     const targetId = e.currentTarget.getAttribute("href").substring(1);
  //     const targetElement = document.getElementById(targetId);
  //     if (targetElement) {
  //       window.scrollTo({
  //         top: targetElement.offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset; // Get current scroll position

      // Hide navbar when scrolling down, show it when scrolling up
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        setIsNavbarVisible(false); // Scroll down
      } else {
        setIsNavbarVisible(true); // Scroll up
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className=" w-full flex items-center  justify-center">
      <div
        className={`w-full flex  h-[84px]  items-center justify-center px-4 sm:px-6 lg:px-8  fixed top-0   z-50 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0  bg-white " : "-translate-y-[84px]"
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              width={150}
              height={72}
              alt="Reevij Solutions Logo"
            />
          </Link>

          {/* Links for large screens */}
          <div className="hidden lg:flex text- items-center justify-between gap-5">
            <Link
              href="/"
              className="font-medium  transition hover:text-primary duration-300 ease-in-out text-[#212b36] text-base leading-tight"
            >
              Home
            </Link>
            <Link
              onClick={handleClick}
              href="#services"
              className="font-medium text-[#212b36] transition hover:text-primary duration-300 ease-in-out  text-base leading-tight"
            >
              Services
            </Link>
            <Link
              onClick={handleClick}
              href="#projects"
              className="font-medium transition hover:text-primary duration-300 ease-in-out font-inter text-[#212b36] text-base leading-tight"
            >
              Projects
            </Link>

            <Link
              onClick={handleClick}
              href="#abouts"
              className="font-medium transition hover:text-primary duration-300 ease-in-out font-inter text-[#212b36] text-base leading-tight"
            >
              About
            </Link>
          </div>

          {/* Buttons for large screens */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            <Link href="https://cal.com/prian-digitech/30min">
              <button className="flex items-center border-2 font-inter font-medium justify-center text-white bg-[#FF743F] h-[50px] w-[160px] uppercase rounded-full">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="lg:hidden flex  justify-between items-center">
            <button onClick={toggleMenu} className="text-black">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden absolute top-0 left-0 right-0 bottom-0 bg-white  flex-col items-start justify-start gap-8  transition-all h-screen ease-in-out duration-500`}
        >
          {/* Logo and Close Button */}
          <div className=" flex absolute w-full top-0 p-6 justify-between items-center">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo}
                  width={100}
                  height={80}
                  alt="Reevij Solutions Logo"
                />
              </Link>
            </div>
            <div>
              <button onClick={toggleMenu} className="text-black">
                <IoCloseSharp size={24} className="text-black" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="flex items-start p-6 top-[100px] flex-col w-full h-auto gap-6 justify-start relative "
            onClick={toggleMenu}
          >
            <div>
              <Link
                onClick={handleClick}
                href="/"
                className="text-[#212b36] font-inter font-medium text-[17px]"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="#services"
                onClick={handleClick}
                className="text-[#212b36] font-inter font-medium text-[17px]"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClick}
                href="#projects"
                className="text-[#212b36] font-inter font-medium text-[17px]"
              >
                Projects
              </Link>
            </div>

            <div>
              <Link
                onClick={handleClick}
                href="#abouts"
                className="text-[#212b36] font-inter font-medium text-[17px]"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col w-full p-6  gap-4 justify-center items-start relative mt-[56px]">
            <button
              onClick={() => {
                window.location.href = "contact"; // Replace with your desired path
              }}
              className="md:max-w-[216px] text-white bg-[#ff743F] font-inter h-[45px]  font-medium flex items-center justify-center  w-full py-4 px-6 rounded-3xl"
            >
              CONTACT US
            </button>

            <button
              onClick={() => {
                window.location.href = "https://cal.com/prian-digitech/30min"; // Replace with your desired path
              }}
              className="md:max-w-[216px] flex items-center border-2 font-inter font-medium border-[#616266] justify-center text-[#212b36] h-[45px] w-full rounded-full"
            >
              Free Strategy Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
