import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashbord() {
  const [ userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUserId(user.uid)
    })
  },[])

  useEffect(()=>{
    if(userId){
      fetchUser()
    }
  },[userId])


  const fetchUser = async()=>{
    await getDoc (doc(db, "Users", userId)).then((res)=>{
      setUserData(res.data())
    })
  }

  

   const handleLogout = async()=>{
    await auth.signOut()
    navigate("/")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-6">

  {/* TOP SECTION */}
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-extrabold flex justify-center mt-40 text-purple-400 drop-shadow-lg">
      Welcome, Player 👾
    </h1>

    <h2 className='text-5xl text-white font-semibold flex justify-center mt-20'>{userData && userData.name}</h2>
<div className='flex justify-center'>

    <button onClick={handleLogout} className="mt-18 p-10  bg-purple-600 text-white py-3 rounded-xl text-2xl font-bold hover:bg-purple-700 transition duration-200 shadow-lg hover:shadow-purple-700/40" 
   >Start</button>
</div>

   

   

   
  </div>
</div>

  )
}
