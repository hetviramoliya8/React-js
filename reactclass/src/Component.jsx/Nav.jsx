import React from 'react'

export default function Nav() {
  return (
    <div className='nav shadow-xl'>
        <div className=' navbar justify-around flex items-center'>

          <div className="  flex items-center w-[30%] h-[100px]" >

          <img src="bag.png" alt="" className=' w-[30%]' />
          <h1 className='text-[30px] font-[500] mt-[-50] ml-[-20px] text-gray-600'>Handmade bags</h1>

          </div>

      <ul className='flex w-[50%] gap-10 text-[20px]'>
        <li><a href="">Home</a></li>
        <li><a href="">New</a></li>
        <li><a href="">Bags</a></li>
        <li><a href="">Backpacs</a></li>
        <li><a href="">Cosmetic bags</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact</a></li>
        
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
	<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path fill="#000" d="M19.5 22a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" />
		<path d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5" />
	</g>
</svg>
        </div>

    </div>
  )
}
