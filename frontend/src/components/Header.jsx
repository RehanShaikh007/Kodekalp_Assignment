import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-purple-700 shadow-md p-2">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex items-center">
            <img
              className="w-[5em] sm:w-[7em] mx-3"
              src="/logo.webp"
              alt="logo"
            />
            <span className="text-blue-500">Kode</span>
            <span className="text-purple-600">Kalp</span>
          </h1>
        </Link>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          className={`flex-col sm:flex-row flex sm:flex gap-4 sm:items-center ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <Link to="/">
            <li className="text-gray-300 hover:text-white font-medium text-lg p-2">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="text-gray-300 hover:text-white font-medium text-lg p-2">
              About
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
