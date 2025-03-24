import React from 'react';
import errorPage from '../assets/404page.jpg';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
    return (
        <div>
            <div>
            <img className='max-w-5xl mx-auto my-8 md:20'
             src={errorPage} alt="" />
            </div>
            <div className='flex justify-center mx-auto mb-10 md:mb-20'>
                <button className='btn btn-neutral'><h2 className="text-2xl"><Link to='/'>Click here</Link></h2></button>
            </div>
        </div>
    );
};

export default NotfoundPage;