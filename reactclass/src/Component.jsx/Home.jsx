import React from 'react'

export default function Home() {
  return (
    <div className=' w-full h-[500px] flex shadow-xl bg-[#eaeaea]'>
      <div className="right w-[50%] pl-50 pt-10" >
        <h1 className='text-[70px] font-[500] w-[40%] '>New collection</h1>
        <span className='text-[15px] text-gray-600 w-[30%] mt-20'>The highest quality products, sewn in Ireland from The highest quality products, sewn  <br /> Irish materials. Quality and durability for years. The highest quality products, sewn in Ireland from The highest quality products, sewn in Ireland from<br /> </span>
        <button className='bg-[green] text-white w-[30%] h-10 border-1 text-[15px] mt-10'>New collection</button>
      </div>
      <div className="left w-[50%] ">
        <img src="bg-bag.png" alt="" className='w-[80%] mt-[-200px]'/>
      </div>
      
    </div>
  )
}
