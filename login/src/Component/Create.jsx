import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register() {

  const navigate = useNavigate()

  const [formdata , setFormdata] = useState([])

  const handleChange =(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

 const handleRegister = async ()=>{
  await createUserWithEmailAndPassword(auth, formdata.email , formdata.password).then((res)=>{
    setDoc(doc(db,"Users", res.user.uid),formdata)

    navigate("/Login");
  })
  
 }
  return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6">
  <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-purple-500/30">

    {/* Title */}
    <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-3 drop-shadow-lg">
      🎮 GameZone
    </h1>
    <p className="text-center text-gray-400 mb-8 tracking-wide">
      Create your player account
    </p>

    {/* INPUTS */}
    <div className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Player Name"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-purple-500/40 focus:ring-2 focus:ring-purple-600 outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-purple-500/40 focus:ring-2 focus:ring-purple-600 outline-none"
      />

      <input
        type="password"
        name="password"
        placeholder="Create Password"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-purple-500/40 focus:ring-2 focus:ring-purple-600 outline-none"
      />
    </div>

    {/* BUTTON */}
    <button
      onClick={handleRegister}
      type="submit"
      className="mt-8 w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-purple-700 transition duration-200 shadow-lg hover:shadow-purple-700/40" onChange={handleRegister}
    >
      Start Gaming 🚀
    </button>

    {/* LOGIN LINK */}
    <p className="text-center mt-6 text-gray-400">
      Already have an account?{" "}
      <Link to="/" className="text-purple-400 font-semibold hover:underline">
        Login
      </Link>
    </p>
  </div>
</div>


  )
}
