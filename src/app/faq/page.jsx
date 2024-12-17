"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is HostelHive?",
    answer:
      "HostelHive is a platform that helps students, professionals, and families find affordable, comfortable, and secure accommodations easily.",
  },
  {
    question: "How do I book a room?",
    answer:
      "You can browse available rooms, click on 'View Details' for a specific room, and contact the room owner using the provided contact information.",
  },
  {
    question: "Are the listings verified?",
    answer:
      "Yes, we ensure that all listings on HostelHive are verified for authenticity and safety.",
  },
  {
    question: "Is there any booking fee?",
    answer:
      "No, HostelHive does not charge any booking fee. You can directly contact the owner and arrange the stay.",
  },
  {
    question: "What facilities can I expect in listed rooms?",
    answer:
      "Facilities vary by room but typically include free electricity, hot water, and western toilets. Check the details on each listing page.",
  },
  {
    question: "Can I list my property on HostelHive?",
    answer:
      "Yes, property owners can list their rooms or hostels on HostelHive by contacting us through the 'Contact Us' page.",
  },
  {
    question: "How can I contact HostelHive for support?",
    answer:
      "You can reach us through the 'Contact Us' page or email us at support@hostelhive.com.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about HostelHive.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              {/* Question */}
              <button
                className="w-full text-left px-4 py-3 bg-white shadow-md rounded-md focus:outline-none transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>

              {/* Answer with Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-3 bg-gray-50 border-l-4 border-indigo-500 rounded-b-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
