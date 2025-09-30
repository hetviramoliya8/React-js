import React from 'react'

export default function Minicard({ obj }) {
    return (
        <div>
            <div className='w-[195px] font-semibold border-1 border-[#ebebeb] rounded-2xl'>
                <img src={obj.image} alt="" className='h-[260px] rounded-t-2xl' />
                <div className='py-2 px-2.5 leading-5.5'>
                    <h1 className='text-[17px]'>{obj.title}</h1>
                    <p className='text-[13px] text-[#545459]'>{obj.disc}</p>
                </div>
            </div>
        </div>
    )
}
