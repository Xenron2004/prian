import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-start py-4 justify-center bg-dark">
      <div className="flex flex-wrap max-w-[1280px] items-start gap-8 w-11/12 py-8 justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-start justify-between">
          <Link href="/" className="flex items-center">
            <div 
              className="flex items-center" 
              style={{ 
                width: '157.14px', 
                height: '50.16px',
                gap: '8px'
              }}
            >
              <div 
                className="relative"
                style={{
                  width: '50.16px',
                  height: '50.16px'
                }}
              >
                <Image
                  src="/images/PRIAN LOGO 6[1] 1.png"
                  alt="Logo Part 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div 
                className="relative"
                style={{
                  width: '98.98px',
                  height: '30.70px'
                }}
              >
                <Image
                  src="/images/logo.svg" 
                  alt="Logo Part 2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-6 max-w-[700px] w-full items-start justify-between">
          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-headingText text-gray-900 font-semibold font-montserrat text-[18px] mb-3">
              Company
            </h3>
            <ul className="space-y-3 text-start font-montserrat text-gray-600">
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <IoMdMail size={16} className="text-[#E3AF45]" />
                  <div className="font-medium text-bodyText hover:text-headingText text-[15px]">
                    priandigitech@gmail.com
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <FaPhoneAlt size={16} className="text-[#E3AF45]" />
                  <div className="font-medium text-bodyText hover:text-headingText text-[15px]">
                    +91 7762975577
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-2 items-center justify-start">
                  <FaLocationDot size={16} className="text-[#E3AF45]" />
                  <div className="font-medium text-bodyText hover:text-headingText text-[15px]">
                    202, Santa Enclave,SBI Bank Gola road, Danapur, Patna-801503
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-between w-full gap-x-14">
            {/* Links */}
            <div className="flex flex-col gap-2">
              <h3 className="text-headingText text-gray-900 font-semibold font-montserrat text-[18px] text-start mb-3">
                Links
              </h3>
              <ul className="space-y-3 text-start text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clients"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    Clients
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-2">
              <h3 className="text-headingText text-gray-900 font-semibold font-montserrat text-[18px] text-start mb-3">
                Support
              </h3>
              <ul className="space-y-3 text-start text-gray-600">
                <li>
                  <Link
                    href="/help-center"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-bodyText transition duration-300 ease-in-out text-start font-medium text-mainBodytext text-[15px]"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2 max-w-[162px] w-full items-start">
          <h3 className="text-headingText text-gray-900 font-semibold font-montserrat text-[18px] text-start mb-3">
            Social Links
          </h3>
          <div className="flex flex-row gap-4 justify-between">
            <Link href="https://www.facebook.com" className="hover:scale-110 transition-transform">
              <FaFacebookF
                size={20}
                className="text-[#1877F2] hover:text-[#166FE5] duration-300 ease-in-out"
              />
            </Link>
            <Link href="https://youtube.com/" className="hover:scale-110 transition-transform">
              <FaYoutube
                size={20}
                className="text-[#FF0000] hover:text-[#CC0000] duration-300 ease-in-out"
              />
            </Link>
            <Link href="https://www.instagram.com/" className="hover:scale-110 transition-transform">
              <FaInstagram
                size={20}
                className="text-[#E4405F] hover:text-[#D42D5C] duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;