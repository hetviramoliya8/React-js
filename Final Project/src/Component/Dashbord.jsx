import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'

export default function Dashbord() {

    const [img, setImg] = useState("");

      const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("")

  const [record, setRecord] = useState([])

  const [EditIndex, setEditIndex] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
      }
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId])

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", userId)).then((res) => {
      setUserData(res.data())
    })
  }



  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data(),
    }))
    setRecord(newData)
  }

  const AddBlog = async () => {
    let obj = { uid: userId,img, task, priority }

    if (EditIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, { ...obj, docId: data.id }])
      })
    } else {
      await updateDoc(doc(db, "Todos", EditIndex), {
        uid: userId,
        img,
        task,
        priority,
      })
      fetchData()
    }

    setTask("")
    setPriority("")
    setEditIndex(null)
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.docId === id)
    setImg(singleData.img)
    setTask(singleData.task)
    setPriority(singleData.priority)
    setEditIndex(id)
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id))
    fetchData()
  }

  return (
  <div className="min-h-screen bg-gray-300">
    {/* NAVBAR */}
    <nav className="w-full h-20 bg-black flex justify-between px-10 items-center shadow-lg fixed z-999">
      <h1 className="text-white text-3xl font-extrabold cursor-pointer">Blog.com</h1>

      <ul className="flex text-white gap-10 text-lg font-medium">
        <li className="hover:text-blue-500 cursor-pointer">WHO?</li>
        <li className="hover:text-blue-500 cursor-pointer">UPDATES</li>
        <li className="hover:text-blue-500 cursor-pointer">TOOLS</li>
        <li className="hover:text-blue-500 cursor-pointer">BEST OF</li>
        <li className="hover:text-blue-500 cursor-pointer">THE BLOG</li>
      </ul>

    
    </nav>

    {/* HEADER TITLE */}
    <div className="w-full flex justify-center py-25 px-4 ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-700 leading-snug w-200">
        MY BEST ARTICLES TO HELP YOU BUILD A SUCCESSFUL BLOG
      </h1>
    </div>

    

    {/* INPUT FORM */}
    <div className="max-w-xl mx-auto bg-white/40 backdrop-blur-2xl   p-8 rounded-2xl shadow-xl space-y-4 border border-gray-200 ">
     <h1 className="text-4xl font-extrabold text-center text-indigo-800 drop-shadow mb-8">
      Blog
    </h1>
                  <label className="text-indigo-900 font-semibold">Blog URL</label>

      <input
        type="text"
        placeholder="Enter your Blog Photo URL"
        onChange={(e) => setImg(e.target.value)}
        value={img}
        className="w-full border p-3 rounded-lg outline-none focus:ring-2 border-indigo-300 focus:ring-blue-400"
      />

              <label className="text-indigo-900 font-semibold">Blog Name</label>

      <input
        type="text"
        placeholder="Enter your Blog Name"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        className="w-full border p-3 rounded-lg outline-none focus:ring-2 border-indigo-300 focus:ring-blue-400"
      />

              <label className="text-indigo-900 font-semibold">Blog Details</label>

      <input
        type="text"
        placeholder="Enter your Blog Details"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border p-3 rounded-lg outline-none focus:ring-2 border-indigo-300 focus:ring-blue-400"
      />

      <button
        onClick={AddBlog}
        className="w-full py-3 bg-indigo-700 text-white font-semibold 
                   text-lg rounded-xl shadow-lg hover:bg-indigo-800 
                   active:scale-95 transition-all duration-300"
      >
        {EditIndex == null ? "Add Blog" : "Update Blog"}
      </button>
    </div>

    {/* BLOG LIST */}
    <h1 className="text-center text-3xl mt-12 mb-6 font-bold text-gray-700">Your Blogs</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 pb-20">
      {record.map((e, i) => (
        <ul
          key={i}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 space-y-3"
        >
          <li className="flex justify-center">
            <img
              src={e.img}
              alt="Blog"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </li>

          <li className="text-xl font-bold text-gray-800">{e.task}</li>

          <li className="text-gray-600">{e.priority}</li>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleDelete(e.docId)}
              className=" cursor-pointer px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Delete
            </button>

            <button
              onClick={() => handleEdit(e.docId)}
              className=" cursor-pointer px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Edit
            </button>
          </div>
        </ul>
      ))}
    </div>
  </div>
)
}