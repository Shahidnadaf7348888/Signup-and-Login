import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="#" className="text-orange-500 text-xl font-semibold  hover:text-white">Brand</a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-gray-400 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto md:pl-16 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow md:space-x-16">
            <NavLink to='' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mx-2">Home</NavLink>
            <NavLink to='About' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mx-2">About</NavLink>
            <NavLink to='Services' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mx-2">Services</NavLink>
            <NavLink to='Contact' className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange-500 mx-2">Contact</NavLink>
          </div>
          <div className="flex items-center mt-4 lg:mt-0">
            <input
              className="w-full lg:w-auto px-5 py-1 text-gray-700 bg-gray-200 rounded focus:outline-none focus:shadow-outline mx-2"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-orange-500 text-white hover:text-orange-500 hover:bg-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
