import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {

  const [record, setRecord] = useState([])


  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(allData);

    setRecord(allData)
  }, [])

  return (
    <div className='flex  justify-around m-10 flex-wrap pl-10 pr-10 '>

      {
        record.length > 0 ?
          record.map((e, i) => {
            return <div className=''

              key={i}
            >
              <div className='mt-10'>

              <img
                src={e.img}
                alt={e.title}
                className='w-[290px] h-[250px] bg-[#eeebe6] rounded-2xl'
              />

              <h2 className='text-2xl mt-4'>{e.title}</h2>



              <h2 className='text-2xl text-[#dead6f]'>{e.price}</h2>
              
              </div>
              
            </div>
            
            
            
          }
        )
          
          :
          <p className=' items-center m-10'>
            <div className='flex justify-center'>

              <img src="/img/empty Cart.webp " alt="" className='w-100 ' />
            </div>

            <div className='flex justify-center'>

              <Link to={"/"}>
                <button className='text-2xl border-1 p-4 rounded-md hover:bg-black hover:text-white'>Continue Shopping</button>
              </Link>
            </div>
          </p>
      }
 
      
    </div>
  )
}

