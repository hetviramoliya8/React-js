import React from 'react';

export default function Card({ image, title, price }) {
  return (
    <div className='card pt-10'>
      <div className="w-[300px] m-5  h-[300px] bg-[#e3e4e5]  rounded-2xl flex flex-col items-center justify-center">
        <img 
          src={image} 
          alt="" 
          className='w-[250px] h-[250px]  object-contain' 
        />
      </div>
        <div className='p- text-center'>
          <h1 className='font-medium text-2xl '>{title}</h1>
        <span className='font-normal text-xl'>${price}</span>
        </div>
    </div>
  );
}
