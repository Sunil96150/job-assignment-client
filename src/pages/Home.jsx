import React from 'react';
import Banner from '../assets/banaer.png'
import { Link, useLoaderData } from 'react-router-dom';
import FAQ from './FAQ';

const Home = () => {

    const loadAssignmnets = useLoaderData()
    console.log(loadAssignmnets)




    return (
        <div>
            
{/* Banner section */}
       <section className="p-5 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 md:p-10 rounded-2xl shadow-lg">
                {/* Text Section */}
                <div className="w-full md:w-1/2 pr-0 md:pr-6 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        We provide the best services to help you grow. Join us today and make a difference!
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
                            Get Started
                        </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img
                        src={Banner}
                        alt="Banner"
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>

            {/* section load assignment data */}
            <div className="container mx-auto p-4">
      {/* Assignment Count */}
      <h2 className="text-4xl font-bold my-10 text-orange-700 text-center">BJET jobs </h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        loadAssignmnets.map((assignment) => (
          <div key={assignment._id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={assignment.thumbnail} alt="Thumbnail" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{assignment.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{assignment.description.slice(0, 50)}...</p>
            <p className="text-gray-800 font-semibold mt-2">Marks: {assignment.marks}</p>
            <p className="text-gray-500">Difficulty: {assignment.difficulty}</p>
            <p className="text-gray-500">Due Date: {assignment.dueDate}</p>

            {/* Details Button */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
             <Link to={`/details/${assignment._id}`}>
             Details
             </Link>
            </button>
          </div>
        ))}
      </div>
    </div>

        {/* section FAQ Quitions */}

        <FAQ></FAQ>



        </div>
    );
};

export default Home;