"use client"
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins= Poppins({
    subsets:["latin"],
    weight:["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
})
const LoginFormCust = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Add your login logic here
  };

  return (
    <div className={`${poppins.className} flex items-center justify-center min-h-screen bg-gray-100`}>
      <div className="w-full max-w-md p-8 bg-gradient-to-r from-cyan-500 to-blue-500 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Welcome Back! 👋🏻</h2>
        <p className="text-sm text-center text-white">
          Sign in to continue.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-white">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2 border-gray-300 rounded focus:ring-indigo-500"
              />
              Remember Me
            </label>
            <a
              href="#"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-sm text-white">
        Don&apos;t have an account?{" "}
          <Link
            href={"/signup/customer"}
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFormCust;
