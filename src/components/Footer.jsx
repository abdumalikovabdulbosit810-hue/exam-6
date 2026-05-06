import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

import FooterLogo from "../assets/Footer.svg";

const Footer = () => {
  return (
    <footer className="bg-white font-sans pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 pb-20 grid gap-10 lg:grid-cols-12">

        <div className="lg:col-span-5">
          <div className="mb-10 w-8 h-8">
            <img
              src={FooterLogo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-5xl font-bold text-[#1d2130] leading-tight mb-8">
            Let's make something special
          </h2>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#1d2130]">
              Let's talk! 🤙
            </h4>

            <div className="text-gray-600 space-y-1 border-b border-gray-100 pb-8 w-fit pr-20">
              <p>020 7993 2905</p>
              <p>hi@finsweet.com</p>
            </div>

            <p className="text-gray-500 text-sm pt-4">
              DLF Cybercity, Bhubaneswar,<br /> India, 123456
            </p>
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-3 pt-12">

          {/* LINKS */}
          <ul className="space-y-4 text-[#1d2130] font-bold">
            <li>
              <NavLink to="/" className="hover:text-blue-600 transition">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/service" className="hover:text-blue-600 transition">
                Service
              </NavLink>
            </li>

            <li>
              <NavLink to="/company" className="hover:text-blue-600 transition">
                Company
              </NavLink>
            </li>

            <li>
              <NavLink to="/career" className="hover:text-blue-600 transition">
                Career
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" className="hover:text-blue-600 transition">
                News
              </NavLink>
            </li>
          </ul>

          {/* SERVICE */}
          <div>
            <h5 className="font-bold text-gray-400 mb-6 uppercase tracking-wider text-xs">
              Service
            </h5>

            <ul className="space-y-3 text-gray-600 text-sm font-semibold">
              <li>
                <NavLink to="/service" className="hover:text-blue-600">
                  Technical support
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-blue-600">
                  Testing
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-blue-600">
                  Development
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-blue-600">
                  AWS/Azure
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-blue-600">
                  Consulting
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-blue-600">
                  Information Technology
                </NavLink>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="relative">
            <h5 className="font-bold text-gray-400 mb-6 uppercase tracking-wider text-xs">
              Resourses
            </h5>

            <ul className="space-y-3 text-gray-600 text-sm font-semibold">

              <li>
                <NavLink to="/company" className="hover:text-blue-600">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className="hover:text-blue-600">
                  Testimonial
                </NavLink>
              </li>

              <li>
                <NavLink to="/privacy" className="hover:text-blue-600">
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink to="/terms" className="hover:text-blue-600">
                  Terms of use
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className="hover:text-blue-600">
                  Blog
                </NavLink>
              </li>
            </ul>

            <NavLink
              to="/contact"
              className="absolute bottom-0 flex items-center gap-3 font-bold text-[#1d2130] cursor-pointer"
            >
              <div className="flex">
                <div className="w-4 h-4 bg-orange-200"></div>
                <div className="w-4 h-4 bg-blue-600"></div>
              </div>

              <span>Contact Us —&gt;</span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="bg-[#ffe6d2] py-6 px-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div className="flex items-center gap-8">
            <span className="font-black text-xl text-[#1d2130]">
              {`{Finsweet`}
            </span>

            <span className="text-gray-600 text-sm">
              ©2021 Finsweet
            </span>
          </div>

          <div className="flex gap-6 text-[#1d2130]">
            <FacebookIcon className="cursor-pointer hover:text-blue-600 transition-colors" />
            <TwitterIcon className="cursor-pointer hover:text-blue-400 transition-colors" />
            <InstagramIcon className="cursor-pointer hover:text-pink-600 transition-colors" />
            <LinkedInIcon className="cursor-pointer hover:text-blue-800 transition-colors" />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;