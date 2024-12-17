"use client"

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
export default function ExploreSection() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/api/rooms");
        const data = await response.json();

        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.slice(0, 10).map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <Link href={`/explore/${room.id}`} className="text-xl font-semibold">{room.room}</Link>
            <p className="text-gray-600">{room.description}</p>
            <p className="text-lg font-bold mt-2">{room.cost}</p>
          </div>
        ))}
      </div>
      <div className='my-5'>
        <Link href={'/explore'} className='mx-5 text-xl py-3 px-4 bg-green-600 text-white rounded-md font-bold'>View More</Link>
      </div>
    </div>
  )
}
