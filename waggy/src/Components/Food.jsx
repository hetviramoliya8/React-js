import React, { useEffect, useState } from 'react'

export default function Card({obj}) {

  const addToCart = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(obj);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${title} added to cart!`);
}

 
  return (
    

     <div className='w-auto h-auto  text-xs font-semibold rounded-2xl'>
       <img src= {obj.img}  className='w-[290px] h-[250px] bg-[#eeebe6] rounded-2xl'/>
         <h2 className='text-2xl mt-6' >{obj.title}</h2>
         <div className='flex gap-1  mt-3 items-center'>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
    <path fill="#dead6f" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379" stroke="#dead6f" />
 </svg>


 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
    <path fill="#dead6f" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379" stroke="#dead6f" />
 </svg>


 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
    <path fill="#dead6f" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379" stroke="#dead6f" />
 </svg>


 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
    <path fill="#dead6f" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379" stroke="#dead6f" />
 </svg>

 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
    <path fill="#dead6f" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.97 1.97 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.98 1.98 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.96 1.96 0 0 1-1.16.379" stroke="#dead6f" />
 </svg>



         <h2 className='text-xl ' >{obj.rate}</h2>
         </div>
         <h2 className='text-2xl text-[#dead6f]'>{obj.price}</h2> 
       <div className='gap-5 flex justify-center mt-5'>
            <button  className='border-1 border-gray-300 p-4 rounded-xl pl-9 pr-9 text-xl cursor-pointer' onClick={addToCart}>ADD TO CART</button>
          <button className='border-1 border-gray-300 p-4 rounded-xl'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">	<path fill="#000" d="M16.5 3A5.49 5.49 0 0 0 12 5.344A5.49 5.49 0 0 0 7.5 3A5.5 5.5 0 0 0 2 8.5c0 5.719 6.5 10.438 10 12.85c3.5-2.412 10-7.131 10-12.85A5.5 5.5 0 0 0 16.5 3"  stroke="#000" /> </svg></button>
        </div>
        

    </div>
  )
}
