import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashbord() {
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

  const handleLogout = async () => {
    await auth.signOut()
    navigate("/")
  }

  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"));
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data(),
    }))
    setRecord(newData)
  }

  const handleTask = async (e) => {
    let obj = { uid: userId, task, priority }

    if (EditIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, obj])
      });
    } else {
      await updateDoc(doc(db, "Todos", EditIndex), {
        uid: userId,
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
    let singleData = record.find((item) => item.docId == id);
    setTask(singleData.task)
    setPriority(singleData.priority)
    setEditIndex(id)
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id))
    fetchData()
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

  {/* Dashboard Title */}
  <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>

  {/* User Name */}
  <h2 className="text-xl font-semibold text-blue-600 mb-6">
    {userData && userData.name}
  </h2>

  {/* Card Container */}
  <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

    {/* Task Input */}
    <label className="block text-gray-700 font-medium mb-1">
      Task
    </label>
    <input
      type="text"
      placeholder="Enter your task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
    />

    {/* Priority Input */}
    <label className="block text-gray-700 font-medium mb-1">
      Priority
    </label>
    <input
      type="text"
      placeholder="Enter your priority"
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
    />

    {/* Submit Button */}
    <button
      onClick={handleTask}
      className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
    >
      {EditIndex == null ? "Add Task" : "Update Task"}
    </button>

    <div className="w-full max-w-xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white">
<h2 className="text-2xl font-semibold mb-4 text-center">Your Tasks</h2>


<div className="space-y-4">
{record &&
record.map((e, i) => (
<ul
key={i}
className="p-4 bg-gray-100 rounded-xl shadow flex items-center justify-between"
>
<div>
<li className="text-lg font-medium">{e.task}</li>
<li className="text-sm text-gray-600">Priority: {e.priority}</li>
</div>


<div className="flex gap-2">
<button
onClick={() => handleDelete(e.docId)}
className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
>
Delete
</button>
<button
onClick={() => handleEdit(e.docId)}
className="px-4 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
>
Edit
</button>
</div>
</ul>
))}
</div>
</div>
  </div>
</div>

      

  )
}
