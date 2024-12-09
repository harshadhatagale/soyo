import React from 'react'
import Card from '../CardLayout/Card'
export default function ExploreSection() {
  return (
    <div>
        <h2 className='text-2xl mx-5 font-extrabold'>Explore</h2>
        <div className='my-4 w-full lg:w-[90%] flex flex-col justify-center space-y-3 mx-auto lg:grid lg:grid-cols-4 lg:justify-items-center lg:content-center items-center'>
            <Card image={"/RoomImages/room1.jpg"}/>
            <Card image={"/RoomImages/room2.jpg"}/>
            <Card image={"/RoomImages/room3.jpg"}/>
            <Card image={"/RoomImages/room4.jpg"}/>
            <Card image={"/RoomImages/room5.jpg"}/>
            <Card image={"/RoomImages/room6.jpg"}/>
            <Card image={"/RoomImages/room7.jpg"}/>
            <Card image={"/RoomImages/room8.jpg"}/>
        </div>
    </div>
  )
}
