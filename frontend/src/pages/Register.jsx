import React, { useState } from 'react';
import loginimg from '../asset/Images/login.svg'
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import SummaryApi from '../common';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    number: '',
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInputs = () => {
    const errors = {};

    if (!/^[A-Za-z\s]{2,}$/.test(data.name)) {
      toast.error("Name must be at least 2 characters and contain only letters.");
      errors.name = "Invalid name";
    }

    if (!/^[6-9]\d{9}$/.test(data.number)) {
      toast.error("Phone number must be 10 digits.");
      errors.number = "Invalid phone";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(data.email)) {
      toast.error("Please enter a valid email address.");
      errors.email = "Invalid email";
    }

    const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
    if (!pass.test(data.password)) {
      toast.error("Password must be at least 6 characters, include uppercase, lowercase, number, and special character.");
      errors.password = "Weak password";
    }

    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await axios({
        url: SummaryApi.register.url,
        method: SummaryApi.register.method,
        data,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const dataApi = response.data;

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/Login');
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } catch (err) {
      console.error("Register error:", err);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-[90%] md:w-[75%] lg:w-[65%] flex bg-[#111] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Section */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center p-10 bg-[#1a1a1a]">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Join ScrumX Today 🚀
          </h1>
          <p className="text-gray-400 text-center mb-6">
            Create your account and start collaborating!
          </p>
          <img
            src={loginimg} // 👉 replace with your image
            alt="register-illustration"
            className="w-72 h-auto"
          />
          <p className="text-gray-500 text-sm mt-6">
            Stay connected with your team.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-[#0d0d0d]">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="flex items-center border border-gray-700 rounded-full px-4 py-3 bg-black">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>

            <div className="flex items-center border border-gray-700 rounded-full px-4 py-3 bg-black">
              <FaPhone className="text-gray-400 mr-3" />
              <input
                type="text"
                name="number"
                value={data.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>

            <div className="flex items-center border border-gray-700 rounded-full px-4 py-3 bg-black">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent outline-none text-white"
                required
              />
            </div>

            <div className="flex items-center border border-gray-700 rounded-full px-4 py-3 bg-black">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-transparent outline-none text-white"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 ml-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <NavLink to="/login" className="text-green-500 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
