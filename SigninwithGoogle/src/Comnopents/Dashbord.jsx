import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig'

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
    await signOut(auth)
    navigate("/")
  }

  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data(),
    }))
    setRecord(newData)
  }

  const handleTask = async () => {
    let obj = { uid: userId, task, priority }

    if (EditIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, { ...obj, docId: data.id }])
      })
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
    let singleData = record.find((item) => item.docId === id)
    setTask(singleData.task)
    setPriority(singleData.priority)
    setEditIndex(id)
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id))
    fetchData()
  }

  return (
<div className="min-h-screen bg-gradient-to-br from-purple-300 via-indigo-200 to-blue-200 p-6 flex flex-col items-center">

  {/* TITLE */}
  <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide drop-shadow-md mb-6">
    Dashboard
  </h1>

  {/* USER CARD */}
  <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-6 w-full max-w-md mb-8 border border-indigo-200 flex flex-col items-center">
    <img
      src={
        userData?.photo
          ? userData.photo
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyIKV1DkbtCj_PFnZ-0Vln5ULwMPMuOFK9w&s"
      }
      className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white"
      alt="User"
    />

    <h2 className="text-2xl font-semibold text-gray-800 mt-4">
      {userData?.name}
    </h2>
    <p className="text-gray-600 text-sm">{userData?.email}</p>
  </div>

  {/* TASK FORM CARD */}
  <div className="w-full max-w-xl bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-indigo-300">

    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      Add New Task
    </h3>

    <label className="block text-gray-700 font-semibold mb-2">Task</label>
    <input
      type="text"
      placeholder="Enter your task"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-6"
    />

    <label className="block text-gray-700 font-semibold mb-2">Priority</label>
    <input
      type="text"
      placeholder="Enter your priority"
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-6"
    />

    {/* UPDATED BUTTON COLOR */}
    <button
      onClick={handleTask}
      className="w-full py-3 bg-teal-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-teal-700 transition-all"
    >
      {EditIndex === null ? "Add Task" : "Update Task"}
    </button>

    {/* UPDATED LOGOUT COLOR */}
    <button
      onClick={handleLogout}
      className="w-full py-3 bg-rose-600 text-white rounded-xl text-lg font-semibold shadow mt-4 hover:bg-rose-700 transition-all"
    >
      Logout
    </button>
  </div>

  {/* TASK LIST */}
  <div className="w-full max-w-xl mt-10 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-indigo-300">

    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Your Tasks
    </h2>

    <div className="space-y-4">
      {record.map((e, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-indigo-50 hover:bg-indigo-100 p-4 rounded-xl shadow transition-all"
        >
          <div>
            <p className="text-lg font-semibold text-gray-800">{e.task}</p>
            <p className="text-sm text-gray-600">Priority: {e.priority}</p>
          </div>

          <div className="flex gap-2">

            {/* UPDATED DELETE BUTTON */}
            <button
              onClick={() => handleDelete(e.docId)}
              className="px-4 py-1 rounded-lg bg-rose-500 text-white text-sm hover:bg-rose-600 transition"
            >
              Delete
            </button>

            {/* UPDATED EDIT BUTTON */}
            <button
              onClick={() => handleEdit(e.docId)}
              className="px-4 py-1 rounded-lg bg-violet-500 text-white text-sm hover:bg-violet-600 transition"
            >
              Edit
            </button>

          </div>
        </div>
      ))}
    </div>

  </div>

</div>







  )
}
