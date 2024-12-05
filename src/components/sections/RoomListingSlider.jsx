'use client'

import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
const RoomListingSlider = () => {
    const cards = [
        {
            id: 1,
            image: "/room1.jpg",
            title: "Card 1",
            description: "This is the description for card 1.",
        },
        {
            id: 2,
            image: "/room2.jpg",
            title: "Card 2",
            description: "This is the description for card 2.",
        },
        {
            id: 3,
            image: "/room6.jpg",
            title: "Card 3",
            description: "This is the description for card 3.",
        },
        {
            id: 4,
            image: "/room4.jpg",
            title: "Card 3",
            description: "This is the description for card 3.",
        },
        {
            id: 5,
            image: "/room5.jpg",
            title: "Card 3",
            description: "This is the description for card 3.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Manual navigation functions
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    // Automatic sliding with reset logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    // Reset automatic sliding interval when manually navigating
    const handleManualNavigation = (action) => {
        if (action === "prev") prevSlide();
        if (action === "next") nextSlide();

        // Reset the interval by clearing and reinitializing
        clearInterval(window.sliderInterval);
        window.sliderInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
        }, 3000);
    };

    return (
        <div className="relative my-5 w-full max-w-4xl mx-auto p-4">
            <div className="overflow-hidden rounded-lg shadow-md">
                <div
                    className="flex transition-transform duration-700"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex-shrink-0 w-full h-auto bg-gray-100"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                <p className="text-gray-600">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <button
                onClick={() => handleManualNavigation("prev")}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
            >
                <MdOutlineNavigateBefore/>
            </button>
            <button
                onClick={() => handleManualNavigation("next")}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
            >
                <MdOutlineNavigateNext/>
            </button>
        </div>
    );
};

export default RoomListingSlider;
