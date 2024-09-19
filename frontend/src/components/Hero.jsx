import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold md:text-6xl mb-6">
          Welcome to Our Authentication System
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Secure your account with our simple login and signup system. Start your journey now!
        </p>
        <div className="space-x-4">
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-all">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
