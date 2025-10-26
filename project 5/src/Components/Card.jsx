import React from 'react'

export default function Card({id,img, title, price, category}) {

   const addTocart = (id)=>{
    let allProducts = JSON.parse(localStorage.getItem("products"));
    let singleData = allProducts.find((item)=>item.id==id)

    let allCart = JSON.parse(localStorage.getItem("cart")) || [];
    allCart.push(singleData)

    localStorage.setItem("cart",JSON.stringify(allCart))
  }

  return (
    <div className='mt-15'>
      
      <div className='w-70 h-90 border-1 border-gray-300 rounded-2xl'>
        <div className=' justify-center flex'>

        <img src={img} alt={title} className='w-70 h-60 rounded-2xl '/>
        </div>
        <h1 className='text-2xl font-semibold text-center mt-2'>{title}</h1>

        <h1 className='text-red-500 font-semibold text-xl text-center mt-2 '>₹{price}</h1>
        <h1 className=' font-semibold text-sm text-gray-400 text-center mt-2 '>{category}</h1>
      </div>
        <button className='text-center border-1 border-gray-300 w-70 p-2 text-xl rounded-2xl mt-4 font-bold text-white bg-green-700' onClick={()=>addTocart(id)}>Add to Cart</button>
    </div>
  )
}
