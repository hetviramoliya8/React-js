import React from 'react'

export default function Section() {
  return (
    <div className='w-full  flex bg-[#eaeaea] '>
        <div className='w-[50%]  items-center p-30 pl-50 pt-50 text-center'>
            <h1 className='text-red-700 font-bold text-2xl p-6'>LIMITED PERIOD OFFER</h1>
            <span className='flex gap-4 text-7xl text-blue-950 font-bold pt-6'>FLAT <p className='text-red-500 font-bold'>$899</p> SALE</span>
            <button className='text-[blue] underline pt-6   '>SHOP NOW</button>

        </div>
        <div className='w-[50%]'>
            <img src="offer.webp" alt="" className='w-[70%]'/>
        </div>
      
    </div>
  )
}
