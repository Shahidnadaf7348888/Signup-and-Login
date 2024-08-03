// src/components/About.js
import React from 'react';
import img2 from '../images/04.jpg'

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <p className="mt-4 text-lg text-gray-900">
            I am a dedicated professional committed to providing exceptional service. My mission is to deliver high-quality products that meet the needs of my clients.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src={img2}
            alt="About me"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800">My Expertise in Web Development</h3>
          <p className="mt-4 text-lg text-gray-600">
            Web development is my passion. I specialize in creating dynamic and responsive websites that provide excellent user experiences. I am proficient in modern web technologies, including HTML, CSS, JavaScript, React, and more.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            I believe in the power of the web to transform businesses and connect people. My approach is to build websites that are not only visually appealing but also highly functional and optimized for performance.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Whether you need a simple landing page or a complex web application, I have the skills and experience to deliver outstanding results. I stay up-to-date with the latest industry trends and best practices to ensure that my clients receive the best possible solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
