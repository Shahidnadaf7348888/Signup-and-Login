import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-gray-400 text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-gray-200 mx-2">Contact</a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400 text-sm">
        Follow us on:
        <a href="#" className="mx-2 hover:text-gray-200">Facebook</a>
        <a href="#" className="mx-2 hover:text-gray-200">Twitter</a>
        <a href="#" className="mx-2 hover:text-gray-200">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
