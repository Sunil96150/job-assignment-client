import React from 'react';
import FAQ from './FAQ';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Us</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Welcome to <span className="text-blue-500 font-semibold">Online Group Study</span>, 
          a collaborative platform where learning meets teamwork. Our goal is to make 
          studying interactive and fun by allowing students to create, submit, and grade assignments.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Choose Us?</h3>
          <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
            <li>Seamless assignment management</li>
            <li>Secure and private study environment</li>
            <li>Engaging and user-friendly interface</li>
            <li>Built-in grading and feedback system</li>
          </ul>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Vision</h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We envision a future where online education is as interactive and 
            effective as in-person learning. Our platform fosters collaboration, 
            making studying more engaging and productive.
          </p>
        </div>
      </div>

      {/* section of FAQ question */}

       <FAQ></FAQ>

    </div>
    );
};

export default About;