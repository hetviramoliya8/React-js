import React, { useState } from 'react'

export default function EventHandler() {
    const [URL, setURL] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const [record, setRecord] = useState([])

    const addData = () => {
        let obj = { "URL": URL, "name": name, "price": price, "rating": rating }
        setRecord([...record, obj])
    }



    return (
        <div className=' '>
            <h1 className='text-4xl font-semibold mt-10 font-serif ml-13 flex justify-center'>Food Card using Event</h1>
            <div className='w-100  h-120 border-1 rounded-2xl m-20 pl-7 border-gray-300 flex'>

                <div className=' pt-9 mr-15'>
                    <input type="text" placeholder='Enter your Food URL' onChange={(e) => setURL(e.target.value)} className='  p-3 w-85 rounded-2xl bg-gray-200 ' />
                    <input type="text" placeholder='Enter your Food Name' onChange={(e) => setName(e.target.value)} className=' p-3 w-85 rounded-2xl mt-10 bg-gray-200 ' />
                    <input type="text" placeholder='Enter your Price' onChange={(e) => setPrice(e.target.value)} className=' p-3 w-85 rounded-2xl mt-10 bg-gray-200 ' />
                    <input type="text" placeholder='Enter your Rating' onChange={(e) => setRating(e.target.value)} className=' p-3 w-85 rounded-2xl mt-10 bg-gray-200 ' />
                    <button onClick={addData} className='border-1 text-xl p-2 pr-8 pl-8 rounded-2xl mt-10 ml-23 bg-blue-800 text-white'>Submit</button>
                </div>
                {
                    record.map((e, i) => {
                        return <ul key={i} className='ml-6 mt-5 text-center w-full flex-wrap'>
                            <li className=' text-xl  w-80 h-50  rounded-2xl '><li className=' text-xl w-80 h-50 rounded-2xl flex justify-center items-center'>
                                <img src={e.URL} alt={e.name} className=" w-80 h-49 object-cover rounded-xl" />
                            </li></li>
                            <li className=' text-xl mt-7 pl-5 pr-5 p-2 rounded-2xl bg-gray-200 '>{e.name}</li>
                            <li className=' text-xl mt-7 pl-5 pr-5 p-2 rounded-2xl bg-gray-200 '>₹{e.price}</li>
                            <li className=' text-xl mt-7 pl-5 pr-5 p-2 rounded-2xl bg-gray-200 '>{e.rating}</li>
                        </ul>
                    })
                }
            </div>
        </div>
    )
}
