import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Blog dropdown
  const [isBuildersDropdownOpen, setIsBuildersDropdownOpen] = useState(false); // State for Builders dropdown

  // Menu Item
  const MenuItem = [
    {
      text: "Roadmap",
      to: "/roadmap",
    },
    {
      text: "For builders",
      to: "#",
    },
    {
      text: "Resources",
      to: "#",
    },
  ];

  // Blog Post Links
  const resources = [
    { text: "Blog posts", to: "/blogposts" },
    //{ text: "Initial", to: "/initial" },
    //{ text: "Transactions", to: "/transactions" },
    //{ text: "State", to: "/state" },
    //{ text: "Assets", to: "/assets" },
    //{ text: "Privacy", to: "/privacyPost" },
    { text: "Videos", to: "https://www.youtube.com/playlist?list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg" },
    { text: "Research", to: "#" },
  ];

  // Builders Links
  const buildersLinks = [
    { text: "GitHub", to: "https://github.com/0xPolygonMiden" },
    { text: "Explorer", to: "https://testnet.midenscan.com/" },
    { text: "Docs", to: "https://docs.polygon.technology/miden/" },
    { text: "Miden VM Playground", to: "https://0xpolygonmiden.github.io/examples/" },
  ];

  return (
    <section className="py-3 z-30 fixed w-full left-0 backdrop-blur-sm bg-navbarBg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-[40px] h-[40px] md:w-[40px] md:h-[40px] xlg:w-[70px] lg:h-[70px]">
            <Link to="/">
              <img className="w-full h-full object-contain" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-x-10 items-center">
            <ul className="flex gap-x-5 xl:gap-x-10 items-center">
              {MenuItem.map((item, index) => (
                <li key={index} className="relative">
                  {item.text === "Resources" ? (
                    <>
                      <button
                        className="text-[16px] xlg:text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        {item.text}
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute top-full left-0 w-40 bg-white shadow-lg mt-1">
                          {resources.map((post, postIndex) => (
                            <li key={postIndex}>
                              <Link
                                className="block px-4 py-2 text-black"
                                to={post.to}
                                onClick={() => {
                                  setIsDropdownOpen(false);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {post.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.text === "For builders" ? (
                    <>
                      <button
                        className="text-[16px] xlg:text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                        onClick={() => setIsBuildersDropdownOpen(!isBuildersDropdownOpen)}
                      >
                        {item.text}
                      </button>
                      {isBuildersDropdownOpen && (
                        <ul className="absolute top-full left-0 w-40 bg-white shadow-lg mt-1">
                          {buildersLinks.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                className="block px-4 py-2 text-black"
                                href={link.to}
                                target="_blank" // Open link in a new tab
                                rel="noopener noreferrer"
                                onClick={() => {
                                  setIsBuildersDropdownOpen(false);
                                  setIsMenuOpen(false);
                                }}
                              >
                                {link.text}
                              </a>
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
                            {resources.map((post, postIndex) => (
                              <li key={postIndex}>
                                <Link
                                  className="block text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                                  to={post.to}
                                  onClick={() => {
                                    setIsDropdownOpen(false);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  {post.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : item.text === "For builders" ? (
                      <>
                        <button
                          className="text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                          onClick={() => setIsBuildersDropdownOpen(!isBuildersDropdownOpen)}
                        >
                          {item.text}
                        </button>
                        {isBuildersDropdownOpen && (
                          <ul className="mt-2">
                            {buildersLinks.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a
                                  className="block text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                                  href={link.to}
                                  target="_blank" // Open link in a new tab
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    setIsBuildersDropdownOpen(false);
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  {link.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        className="text-[18px] font-medium leading-[30px] capitalize text-primaryBlack"
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
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
