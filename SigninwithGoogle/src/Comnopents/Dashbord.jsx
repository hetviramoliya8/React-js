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
<div className="min-h-screen bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 p-6 flex flex-col items-center">

  {/* HEADER */}
  <header className="w-full max-w-5xl flex justify-between items-center mb-10">
    <h1 className="text-4xl font-bold text-gray-800 drop-shadow">Dashboard</h1>
    <button
      onClick={handleLogout}
      className="px-5 py-2 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  </header>

  {/* PROFILE CARD */}
  <div className="w-full max-w-5xl bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex items-center gap-8 border border-white/60">

    <img
      src={
        userData?.photo
          ? userData.photo
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyIKV1DkbtCj_PFnZ-0Vln5ULwMPMuOFK9w&s"
      }
      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
      alt="User"
    />

    <div>
      <h2 className="text-3xl font-bold text-gray-800">{userData?.name}</h2>
      <p className="text-gray-600">{userData?.email}</p>
    </div>

  </div>

  {/* MAIN CONTENT GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mt-10">

    {/* ADD TASK CARD */}
    <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-white/50">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create Task
      </h3>

      <label className="block text-gray-700 mb-2 font-semibold">Task</label>
      <input
        type="text"
        placeholder="Task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 mb-5"
      />

      <label className="block text-gray-700 mb-2 font-semibold">Priority</label>
      <input
        type="text"
        placeholder="Priority level"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 mb-6"
      />

      <button
        onClick={handleTask}
        className="w-full py-3 bg-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition"
      >
        {EditIndex === null ? "Add Task" : "Update Task"}
      </button>
    </div>

    {/* TASK LIST */}
    <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl p-8 border border-white/50">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Task List
      </h3>

      <div className="space-y-4">
        {record.map((e, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-4 rounded-xl bg-white shadow hover:shadow-md border border-gray-200 transition"
          >
            <div>
              <p className="font-semibold text-gray-800 text-lg">{e.task}</p>
              <p className="text-gray-500 text-sm">Priority: {e.priority}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(e.docId)}
                className="px-4 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>

              <button
                onClick={() => handleEdit(e.docId)}
                className="px-4 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>

</div>








  )
}
