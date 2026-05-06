import React from "react";
import logo from "../../src/assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/service", label: "Service" },
    { path: "/company", label: "Company" },
    { path: "/career", label: "Career" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <header className="bg-[#232536] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 h-[80px] flex items-center justify-between">
        
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="flex items-center gap-[32px]">

          <ul className="flex items-center gap-[32px]">
            {navLinks.map((item) => (
              <li key={item.path} className="relative h-[80px] flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-[16px] transition duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[#FFFFFF99] hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute -top-[31px] left-0 w-full h-[3px] bg-[#FFA155]"></span>
                      )}

                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="text-[#FFD3AF] text-[16px] font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Clone project
            <span>→</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;