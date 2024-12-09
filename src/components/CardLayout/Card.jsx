import React from 'react'

export default function Card({image}) {
  return (
    <div className='w-[230px] space-x-8 h-[280px] shadow-md flex flex-col rounded-md justify-center items-center p-2 border border-gray-400'>
        <div className='h-52 w-52'>
            <img src={image} className='rounded-md h-full w-full object-cover' alt="Image" />
        </div>
        <div className='w-full'>
            <p>Card name</p>
            <p>Card Desc</p>
        </div>
    </div>
  )
}
