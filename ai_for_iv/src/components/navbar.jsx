import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between-center h-24 max-w-[1240px] mx-auto px-4 text-[#032163]'>
        <h1 className='w-full text-3xl font-bold'>AI for IV</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Gallery</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;