import React from 'react';
// import {img1} from '../images/03.jpg'
import img1 from '../images/01.jpg'; 

const Home = () => {
  return (
    <div className="  mx-auto px-4 py-8">
      {/* Welcome Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">Welcome to Coding Study Hub</h1>
        <p className="text-lg text-gray-600 mb-4">Your one-stop destination for learning and mastering coding skills.</p>
        <img src={img1} alt="Coding" className="mx-auto w-full max-w-3xl mb-4 rounded-lg shadow-lg" />
      </section>

      {/* Call-to-Action for Login */}


      <div className="bg-gray-700 mx-auto   py-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Web Developer Roadmap</h1>
        <p className="text-lg text-gray-200 mb-8">Follow this roadmap to guide you through the essential skills and technologies needed to become a successful web developer.</p>
      </section>

      <div className="flex flex-wrap justify-center ">
        {/* Frontend Development */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-orange-600 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Frontend Development</h2>
            <ul className="list-disc list-inside text-orange-200">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
              <li>CSS Frameworks (e.g., Tailwind CSS, Bootstrap)</li>
              <li>Frontend Libraries (e.g., React, Vue, Angular)</li>
            </ul>
          </div>
        </div>


        {/* Backend Development */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-orange-600 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">Backend Development</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Server-Side Languages (e.g., Node.js, Python, Ruby)</li>
              <li>Databases (e.g., SQL, NoSQL)</li>
              <li>APIs (REST, GraphQL)</li>
              <li>Authentication & Authorization</li>
              <li>Server Management</li>
            </ul>
          </div>
        </div>

        {/* DevOps & Deployment */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-orange-600 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">DevOps & Deployment</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Version Control (e.g., Git)</li>
              <li>CI/CD Pipelines</li>
              <li>Containerization (e.g., Docker)</li>
              <li>Cloud Platforms (e.g., AWS, Azure, Google Cloud)</li>
              <li>Monitoring & Performance Tuning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section className="mb-8 pt-16 bg-white">
  {/* Title for the section */}
  <h2 className="text-4xl font-bold mb-6 text-gray-800">Use These Repositories to Spark Your Creativity</h2>
  <p className="text-lg text-gray-600 mb-8">Explore my GitHub repositories to see my projects and code samples. Use these projects as inspiration or a foundation to create your own amazing ideas.</p>
  
  <div className="flex flex-col space-y-8">
    {/* Repository 1 */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-black">
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-0"></div>
      <h3 className="text-2xl font-semibold mb-3 relative z-10">Project 1: Portfolio Website</h3>
      <p className="text-black mb-4 relative z-10">A professional portfolio website built using HTML, CSS, JavaScript, and Bootstrap. It showcases my skills and projects in a modern, responsive layout.</p>
      <a href="https://github.com/Shahidnadaf7348888/Portfolio" target="_blank" rel="noopener noreferrer" className="  hover:underline relative z-10">View Repository</a>
    </div>
    
    {/* Repository 2 */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-black">
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-0"></div>
      <h3 className="text-2xl font-semibold mb-3 relative z-10">React Projects</h3>
      <p className="text-black mb-4 relative z-10">A collection of my React projects showcasing various components and applications built using HTML, CSS, Tailwind CSS, JavaScript, and React. See practical implementations and coding practices.</p>
      <a href="https://github.com/Shahidnadaf7348888/ReactProjects" target="_blank" rel="noopener noreferrer" className="  hover:underline relative z-10">View Repository</a>
    </div>
    
    {/* Repository 3 */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out relative text-black">
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-0"></div>
      <h3 className="text-2xl font-semibold mb-3 relative z-10">Backend JSP Project</h3>
      <p className="text-black mb-4 relative z-10">A backend project developed with JSP (JavaServer Pages), featuring server-side logic and database integration. Demonstrates skills in backend development and server-side technologies.</p>
      <a href="https://github.com/Shahidnadaf7348888/Backend_JSP_Project" target="_blank" rel="noopener noreferrer" className=" hover:underline relative z-10">View Repository</a>
    </div>
  </div>
</section>

    </div>
    
  );
};

export default Home;
