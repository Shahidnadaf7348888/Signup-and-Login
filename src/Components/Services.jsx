// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">My Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            I offer a variety of web development services to help you achieve your business goals.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800">Web Development</h3>
            <p className="mt-4 text-lg text-gray-600">
              Building responsive and dynamic websites using modern web technologies like HTML, CSS, JavaScript, and React.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800">UI/UX Design</h3>
            <p className="mt-4 text-lg text-gray-600">
              Designing user-friendly interfaces with a focus on user experience and accessibility.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800">SEO Optimization</h3>
            <p className="mt-4 text-lg text-gray-600">
              Improving search engine rankings through best practices and modern SEO techniques.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-800">Content Management</h3>
            <p className="mt-4 text-lg text-gray-600">
              Providing solutions for easy content management and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
