import React from 'react'

export default function Artists() {
    let arr5 = [
        {
            image : "19.jpg",
            name : "Purva Mantri"
        },
        {
            image : "20.jpg",
            name : "Denzel Curry"
        },
        {
            image : "21.jpg",
            name : "Wild Wild Women"
        },
        {
            image : "22.png",
            name : "Don Toliver"
        },
        {
            image : "23.jpg",
            name : "Umesh Barot"
        },
        {
            image : "24.jpg",
            name : "Raj Gadhvi"
        },
        {
            image : "25.jpg",
            name : "Euphoria"
        },
        {
            image : "26.jpg",
            name : "Raman Negi"
        },
        {
            image : "27.png",
            name : "Chow Lee"
        },
        {
            image : "28.png",
            name : "Karan Aujla"
        },
    ]

    return (
        <div className='px-35 pb-15'>
            <h1 className='text-2xl font-semibold pb-7'>Artists in your District</h1>
            <div className='scroll'>
                <div className='w-520 flex gap-5'>
                    {
                        arr5.map((e,i)=>{
                            return <div className='text-center text-[17px] font-semibold'>
                            <img src={e.image} alt="" className='rounded-full w-[190px] h-[190px]' />
                            <h1 className='my-2'>{e.name}</h1>
                        </div>
                    })
                    }
                </div>
            </div>
        </div>
    )
}
