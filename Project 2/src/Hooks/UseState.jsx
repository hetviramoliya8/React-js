import React, { useState } from 'react'

export default function UseState() {
    const[count, setCount] =useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

  return (
    <div className='flex justify-center mt-17'>
        <div className='w-150 h-150 border-2 bg-black text-white rounded-4xl'>
            <h1 className='flex justify-center font-bold text-5xl mt-15'>← Counter →</h1>

      <h1 className='border-1 m-10 pb-1 text-4xl flex justify-center font-bold rounded-2xl mt-20'>{count}</h1>
      <div className='flex justify-around items-center w-160 mt-20'>

      <button onClick={increment} className='border-2 h-20 w-20 pb-3 text-5xl rounded-2xl  hover:bg-white hover:text-black cursor-pointer'>+</button>
      <button onClick={()=>setCount(count-1)} className='border-2 h-20 w-20 pb-2 text-5xl rounded-2xl  hover:bg-white hover:text-black cursor-pointer'>-</button>
      <button onClick={()=>setCount(count*1*5)} className='border-2 h-20 w-20 text-5xl rounded-2xl  hover:bg-white hover:text-black cursor-pointer'>X</button>
      <button onClick={()=>setCount(count/1/5)} className='border-2 h-20 w-20 text-5xl rounded-2xl pb-3  hover:bg-white hover:text-black cursor-pointer'>/</button> <br />
      </div>
      <button onClick={()=>setCount(0)} className='w-100 h-20 border-1 text-2xl rounded-2xl m-10 flex justify-center items-center ml-25 mt-15  hover:bg-white hover:text-black cursor-pointer'>reset</button>
        </div>
    </div>
  )
}




