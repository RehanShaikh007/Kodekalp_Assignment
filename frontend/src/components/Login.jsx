import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../custom-toastify.css";

const Login = () => {
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
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        toast.error(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error("Login Failed! Please try again." + error.message);
    }
  };

  return (
    <div className="mx-auto flex items-center justify-center h-screen bg-purple-900">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase text-blue-900">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-blue-800 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-blue-800 mb-2 font-medium"
            >
              Password
            </label>
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
            Login
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>New User?</p>
          <Link to={"/signup"}>
            <span className="text-blue-700 font-medium">Sign Up</span>
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
