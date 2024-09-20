import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-purple-600 text-white h-screen py-16 px-6 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl mb-4 md:mb-6">
          Welcome to our
        </h1>

        <h1 className="text-red-300 flex flex-wrap justify-center gap-4 text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl mb-4 md:mb-6 items-center">
          <span>
            <img
              className="w-12 sm:w-16 md:w-20"
              src="./gmail.png"
              alt="Gmail"
            />
          </span>
          Gmail
        </h1>

        <h1 className="text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl mb-4 md:mb-6">
          Authentication System
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 md:mt-5 mb-2 md:mb-4">
          Secure your account with our simple login and signup system
        </p>
        <p className="text-purple-300 text-base sm:text-lg md:text-xl mb-4 md:mb-8 font-semibold">
          Start your journey now!
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <Link to="/signup">
            <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-purple-700 transition-all text-base sm:text-lg font-semibold">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
