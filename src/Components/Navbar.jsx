import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
        <Link to="/">
            <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl' >netflix</h1>
        </Link>
        <div>
            <Link to="/login">
              <button className="capitalize pr-4">login</button>
            </Link>
            <Link to="/Signup">
              <button className="capitalize bg-gradient-to-r from-red-600 to-red-700 hover:to-yellow-500 px-6 py-2 rounded cursor-pointer ">Signup</button>
            </Link>
        </div>
    </div>
  );
};

export default Navbar