
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold text-white">HostelHive</h1>
            <p className="text-sm text-gray-400">
              Your trusted platform for affordable and comfortable hostel rooms.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/about">
              <span className="hover:text-white">About Us</span>
            </Link>
            <Link href="/explore">
              <span className="hover:text-white">Rooms</span>
            </Link>
            <Link href="/contact-us">
              <span className="hover:text-white">Contact Us</span>
            </Link>
            <Link href="/faq">
              <span className="hover:text-white">FAQ</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.585 0 0 .585 0 1.305v21.39C0 23.415.585 24 1.305 24h11.494v-9.294H9.728v-3.624h3.071V8.413c0-3.037 1.847-4.691 4.548-4.691 1.293 0 2.407.097 2.73.14v3.164h-1.875c-1.475 0-1.76.701-1.76 1.729v2.265h3.52l-.459 3.624h-3.061V24h6.008c.72 0 1.305-.585 1.305-1.305V1.305C24 .585 23.415 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.95.566-2.005.974-3.127 1.195a4.92 4.92 0 00-8.379 4.482C7.691 7.884 4.066 5.905 1.64 2.905a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.902 4.902 0 01-2.224.084c.627 1.956 2.444 3.379 4.6 3.419A9.869 9.869 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.583 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.741 0 8.332.013 7.052.07 5.772.127 4.546.413 3.528 1.431 2.509 2.45 2.223 3.676 2.167 4.956.013 6.236 0 6.645 0 12s.013 5.764.07 7.052c.058 1.28.344 2.506 1.361 3.524 1.019 1.018 2.245 1.304 3.525 1.361 1.28.057 1.689.07 7.052.07s5.764-.013 7.052-.07c1.28-.058 2.506-.344 3.524-1.361 1.018-1.019 1.304-2.245 1.361-3.525.057-1.28.07-1.689.07-7.052s-.013-5.764-.07-7.052c-.058-1.28-.344-2.506-1.361-3.524C19.506.344 18.28.058 17 .001 15.764-.013 15.354 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.324a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
            </svg>
          </a>
        </div>

        <div className="mt-6 text-center text-gray-400">
          © {new Date().getFullYear()} HostelHive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
