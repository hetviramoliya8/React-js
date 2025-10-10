import React, { useEffect, useState } from 'react'

export default function LocalCrud() {

    const [formdata,setFormdata]=useState({})
    const [record,setRecord]=useState([])
    const [editIndex, setEditIndex]=useState(null)

    useEffect(()=>{
        let allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    },[])

    const handleChange = (e)=>{
        setFormdata({
            ...formdata,
            id:Date.now(),
            [e.target.name]:e.target.value
        }) 
    }

        const handlesubmit= (e)=>{
            e.preventDefault()

            if(editIndex==null){
                setRecord([...record,formdata])
                localStorage.setItem("record",JSON.stringify([...record,formdata]))
            }else{
                let singleData = record.find((item)=>item.id == editIndex)
                singleData.name = formdata.name
                singleData.age = formdata.age
                singleData.city = formdata.city
                localStorage.setItem("record",JSON.stringify([...record]))
            }
           setEditIndex(null)

           setFormdata({
            name: "",
            age: "",
            city: ""
           })
        }


        const handleDelete = (id)=>{
          let newdata = record.filter((item)=>item.id!=id)
          setRecord(newdata)
          localStorage.setItem("record",JSON.stringify(newdata))
        }


        const handleEdit = (id)=>{
           let singleData = record.find((item)=>item.id==id)
           setFormdata({
            name : singleData.name,
            age : singleData.age,
            city : singleData.city
           })
           setEditIndex(id)
        }



  return (
    <div className='flex justify-center w-full'>
        <div>
            
      <h1 className='text-5xl font-bold w-full justify-center flex m-9'>Local Curd</h1>
      <div className='border-1 p-10 rounded-2xl'>

      <form onSubmit={handlesubmit} className=' iteam-center '>
        <input type="text" placeholder='Enter your name' className='border-1 p-2 rounded-lg pl-4 pr-4 ml-5 bg-gray-200'  value={formdata.name} name='name' onChange={(e) => handleChange(e)}/>
        <input type="text" placeholder='Enter your age' className='border-1 p-2 rounded-lg pl-4 pr-4 ml-5 bg-gray-200'  value={formdata.age} name='age' onChange={(e) => handleChange(e)} />

        <select name="city"  className='border-1 p-2 rounded-lg pl-4 pr-4 ml-5 bg-gray-200' id="" value={formdata.city}onChange={(e) => handleChange(e)}>
            <option value={"rajkot"} className='border-1'>Rajkot</option>
            <option value={"ahemdabad"} className='border-1'>Ahemdabad</option>
            <option value={"mumbai"} className='border-1'>Mumbai</option>
            <option value={"surat"} className='border-1'>Surat</option>
        </select>


      <div className=' flex justify-center w-full '>

        <button type='submit' className='border-1 p-2 pl-6 mt-10 pr-6 rounded-lg bg-green-500 text-white'>{editIndex == null ? "Add Data" :"Update Data"}</button>
      </div>
      </form>



      <table className='w-full mt-10 '>
        <thead className=''>
            <tr className=' '>
                <td className=' border-1 text-center p-3 font-bold bg-gray-300  '>Id</td>
                <td className=' border-1 text-center p-3 font-bold bg-gray-300  '>Name</td>
                <td className=' border-1 text-center p-3 font-bold bg-gray-300  '>Age</td>
                <td className=' border-1 text-center p-3 font-bold bg-gray-300  '>City</td>
                <td className=' border-1 text-center p-3 font-bold bg-gray-300  ' colSpan={"2"}>Action</td>
            </tr>
        </thead>

        <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return <tr key={i}>
                        <td className='border-1 p-4 cursor-pointer hover:bg-gray-300 bg-gray-200'>{e.id}</td>
                        <td className='border-1 p-4 cursor-pointer hover:bg-gray-300 bg-gray-200'>{e.name}</td>
                        <td className='border-1 p-4 cursor-pointer hover:bg-gray-300 bg-gray-200'>{e.age}</td>
                        <td className='border-1 p-4 cursor-pointer hover:bg-gray-300 bg-gray-200'>{e.city}</td>
                        <td className='border-1 p-4  hover:bg-green-600 hover:text-white bg-gray-200'><button onClick={() => handleEdit(e.id)} className='cursor-pointer'>Edit</button></td>
                        <td className='border-1 p-4 hover:bg-red-500 hover:text-white bg-gray-200'><button onClick={() => handleDelete(e.id)} className='cursor-pointer'>Delete</button></td>
                    </tr>
                }):
                <p>Loading....</p>
            }
        </tbody>
      </table>
            </div>
        </div>
</div>
)
}` `