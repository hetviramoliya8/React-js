import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-around '>
    <div className='w-full h-20 border-1 items-center flex pl-10 pr-10 justify-around'>
    <div className='flex items-center'>
      <Link to="/">
        <img src="/img/logo.png" alt="" className='w-15'/>
      </Link>
        <h1 className='text-2xl font-bold'>Shopping.com</h1>
    </div>


    <div className='flex items-center'>
        <ul className='flex justify-around w-70 ml-50'>
          <Link to="/">
            <li className='text-xl'>Home</li>
          </Link>
            <li className='text-xl'><a href="#">About</a></li>
            <li className='text-xl'><a href="#">Offer</a></li>
            <li className='text-xl'><a href="#"></a></li>
        </ul>
    </div>


 <div className='flex justify-around w-30 '>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#000" d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2" stroke="#000" />
            </svg>
          </a>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#000" d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z" stroke="#000" />
          </svg>


          
        <Link to="/Cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#000" d="M9.5 19.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4M3 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .476.348L9.37 14.5H17a.5.5 0 0 1 0 1H9.004a.5.5 0 0 1-.476-.348L5.135 4.5H3.5A.5.5 0 0 1 3 4" stroke="#000" />
          <path fill="#000" d="M8.5 13L6 6h13.337a.5.5 0 0 1 .48.637l-1.713 6a.5.5 0 0 1-.481.363z" stroke="#000" /></svg>
        </Link>

        

        </div>

      </div>
    </div>
  )
}
