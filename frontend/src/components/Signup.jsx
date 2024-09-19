import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../custom-toastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({});
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        
        toast.error(data.message); 
        return;
      }
      
      toast.success("Signup successful! Please check your Email for verification."); 
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (error) {
      
      toast.error("Signup Failed: " + error.message); 
    }
  };

  return (
    <div className="justify-center items-center flex mx-auto h-screen bg-purple-900">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase text-blue-900">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-blue-800 mb-2 font-medium">Username</label>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-800 mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-800 mb-2 font-medium">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Already Have an Account?</p>
          <Link to={"/login"}>
            <span className='text-blue-700 font-medium'>Login</span>
          </Link>
        </div>
        
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default Signup;
