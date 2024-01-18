import { useState } from "react";
import logo from "../assets/logo.png";
import { MdLanguage } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-xl container mx-auto max-w-screen-2xl flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-14 inline-block items-center"
              />
              <span>XYZ</span>
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300 text-primary font-semibold "
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              <MdLanguage className="mr-2" />
              <span>Language </span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div>

          {/* Burger on mobile */}
          <div className="md:hidden h-6">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300 "
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <IoMenu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-28 pb-5 bg-secondary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            onClick={toggleMenu}
            className="block hover:text-gray-300 text-white font-semibold text-lg"
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavBar;
