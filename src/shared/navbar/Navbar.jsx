import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  // This Is My Menu Item
  const MenuItem = [
    {
      text: "For builders",
      to: "#",
    },
    {
      text: "Blog posts",
      to: "#",
    },
  ];

  // Additional Blog Post Links
  const blogPosts = [
    { text: "Assets", to: "/assets" },
    { text: "Initial", to: "/initial" },
    { text: "Privacy", to: "/privacy" },
    { text: "State", to: "/state" },
    { text: "Transactions", to: "/transactions" },
  ];

  return (
    <section className="py-3 z-30 fixed w-full left-0 backdrop-blur-sm bg-navbarBg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo with responsive width */}
          <div className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] xlg:w-[70px] lg:h-[70px]">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-x-10 items-center">
            <ul className="flex gap-x-5 xl:gap-x-10 items-center">
              {MenuItem.map((item, index) => (
                <li key={index} className="relative">
                  {item.text === "Blog posts" ? (
                    <>
                      <button
                        className="text-[16px] xlg:text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        {item.text}
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute top-full left-0 w-40 bg-white shadow-lg mt-1">
                          {blogPosts.map((post, postIndex) => (
                            <li key={postIndex}>
                              <Link
                                className="block px-4 py-2 text-black"
                                to={post.to} // Use the route from blogPosts
                                onClick={() => {
                                  setIsDropdownOpen(false); // Close dropdown on click
                                  setIsMenuOpen(false); // Close mobile menu if open
                                }}
                              >
                                {post.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      className="text-[16px] xlg:text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                      to={item.to}
                    >
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="bg-navbarBg lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FiX className="w-8 h-8 text-primaryBlack" />
              ) : (
                <FiMenu className="w-8 h-8 text-primaryBlack" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-navbarBg backdrop-blur-sm p-4">
              <ul className="flex flex-col gap-y-4 items-center">
                {MenuItem.map((item, index) => (
                  <li key={index}>
                    {item.text === "Blog posts" ? (
                      <>
                        <button
                          className="text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          {item.text}
                        </button>
                        {isDropdownOpen && (
                          <ul className="mt-2">
                            {blogPosts.map((post, postIndex) => (
                              <li key={postIndex}>
                                <Link
                                  className="block text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                                  to={post.to}
                                  onClick={() => {
                                    setIsDropdownOpen(false); // Close dropdown on click
                                    setIsMenuOpen(false); // Close menu on click
                                  }}
                                >
                                  {post.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        className="text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                      >
                        {item.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
