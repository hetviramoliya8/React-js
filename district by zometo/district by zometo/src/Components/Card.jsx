import React from 'react'

export default function Card({obj}) {
    return (
            <div className='w-[295px] text-xs font-semibold border-1 border-[#ebebeb] rounded-2xl'>
                <img src={obj.image} alt="" className='h-[420px] rounded-t-2xl' />
                <div className='p-2 px-2.5 leading-5.5'>
                    <h2 className='text-[#8B8123]'>{obj.time}</h2>
                    <h1 className='text-[17px]'>{obj.title}</h1>
                    <p className='text-sm'>{obj.add}</p>
                    <h1 className='text-[#545459]'>{obj.price}</h1>
                </div>
            </div>
    )
}
