import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About HostelHive</h1>
          <p className="mt-4 text-gray-600">
            Your trusted partner for finding affordable, comfortable, and secure
            hostel rooms.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src="/about us.jpg"
              alt="About HostelHive"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At HostelHive, we aim to bridge the gap between students,
              professionals, and families looking for affordable accommodations
              and hosts offering safe and comfortable living spaces. With a
              focus on quality, affordability, and convenience, we ensure
              hassle-free bookings and a seamless experience for everyone.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li className="mb-2">Verified listings for safety and trust.</li>
              <li className="mb-2">
                Affordable options for students, professionals, and families.
              </li>
              <li className="mb-2">Prime locations near colleges and offices.</li>
              <li className="mb-2">Dedicated support team for assistance.</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            HostelHive in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
            <div className="mb-6 sm:mb-0">
              <h3 className="text-4xl font-extrabold text-indigo-600">5,000+</h3>
              <p className="text-gray-600">Listings</p>
            </div>
            <div className="mb-6 sm:mb-0">
              <h3 className="text-4xl font-extrabold text-indigo-600">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-indigo-600">100+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-gray-600 mb-6">
            Discover the perfect living space tailored to your needs with
            HostelHive.
          </p>
          <a
            href="/rooms"
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
