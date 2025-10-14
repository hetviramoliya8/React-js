import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Cart from '../Pages.jsx/Cart'

export default function Nav2() {
  const locationObj = useLocation();
  return (
    <div>
      <nav>
        <div className=' h-25 border-b border-gray-300 ml-5 mr-5 flex'>
          <div className='flex justify-around items-center gap-35'>
            <Link to="/">
              <img src="/img/logo.png" alt="" />
            </Link>
            <div className='  border-gray-300 rounded-lg flex'>

              <input type="text" className='pl-15 text-xl p-3 w-130 border-1 rounded-lg' placeholder='Serch For More Than 10,000 Products ' />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='m-4'>
                <path fill="none" stroke="#2c2c2c" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z" />
              </svg>
            </div>
            <div className='flex gap-15'>
              <div className=''>
                <h1 className='flex justify-end text-gray-400 text-xl'>Phone</h1>
                <p className='text-xl text-gray-600'>+980-34683344</p>
              </div>
              <div className=''>
                <h1 className='flex justify-end text-gray-400 text-xl'>Email</h1>
                <p className='text-xl text-gray-600'>waggy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='w-full h-20 flex justify-around items-center pl-15 '>
        <h1 className='text-xl'> Shop by Category ∨</h1>

        <div>
          <ul className='flex justify-around w-140'>
            <Link to={"/"}>
            <li className='text-gray-500 hover:text-[#e4bc89] cursor-pointer font-semibold text-lg'><a href="#"></a>Home</li>
            </Link>
            <li className='text-gray-500 hover:text-[#e4bc89] cursor-pointer font-semibold text-lg'><a href="#"></a>Pages</li>
            <li className='text-gray-500 hover:text-[#e4bc89] cursor-pointer font-semibold text-lg'><a href="#"></a>Shop</li>
            <li className='text-gray-500 hover:text-[#e4bc89] cursor-pointer font-semibold text-lg'><a href="#"></a>Blog</li>
            <li className='text-gray-500 hover:text-[#e4bc89] cursor-pointer font-semibold text-lg'><a href="#"></a>Contact</li>
            <li className='text-gray-500 hover:text-[#e4bc89] cursor-pointer font-semibold text-lg'><a href="#"></a>Other</li>
          </ul>
        </div>
        <div className='flex justify-around w-40'>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#000" d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2" stroke="#000" />
            </svg>
          </a>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#000" d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z" stroke="#000" />
          </svg>

          <Link to="/Cart" className='flex'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#000" d="M9.5 19.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4M3 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .476.348L9.37 14.5H17a.5.5 0 0 1 0 1H9.004a.5.5 0 0 1-.476-.348L5.135 4.5H3.5A.5.5 0 0 1 3 4" stroke="#000" />
          <path fill="#000" d="M8.5 13L6 6h13.337a.5.5 0 0 1 .48.637l-1.713 6a.5.5 0 0 1-.481.363z" stroke="#000" /></svg>
        </Link>

        

        </div>
      </div>
    </div>
  )
}

