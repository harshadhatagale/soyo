"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins= Poppins({
    subsets:["latin"],
    weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
})

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cname:"",
    ctname:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
    // Add your signup logic here
  };

  return (
    <div className={`${poppins.className} flex my-5 items-center justify-center min-h-screen bg-gray-100`}>
      <div className="w-full max-w-lg p-8 bg-gradient-to-r from-cyan-500 to-blue-500 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">
          Create Your Account
        </h2>
        <p className="text-sm text-center text-white">
          Join us and find your perfect stay today.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {/* College Name */}
          <div>
            <label
              htmlFor="cname"
              className="block text-sm font-medium text-white"
            >
              Collage Name
            </label>
            <input
              type="text"
              id="name"
              name="cname"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your College name"
              value={formData.cname}
              onChange={handleChange}
            />
          </div>
          {/* City */}
          <div>
            <label
              htmlFor="ctname"
              className="block text-sm font-medium text-white"
            >
              City/ Town
            </label>
            <input
              type="text"
              id="ctname"
              name="ctname"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your city name"
              value={formData.ctname}
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center text-sm text-white">
          Already have an account?{" "}
          <Link
            href={"/login/customer"}
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
