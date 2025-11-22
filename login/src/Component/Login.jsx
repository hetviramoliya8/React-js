import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth} from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [formdata, setFormdata]= useState([])

    const navigate = useNavigate()
    const handleChange = (e)=>{
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async (e)=>{
     await signInWithEmailAndPassword(auth, formdata.email, formdata.password).then((res)=>{

        navigate("/dashbord")
     })

    }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6">
  <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl shadow-2xl rounded-2xl p-10 border border-purple-500/30">

    {/* Title */}
    <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-3 drop-shadow-lg">
      🎮 GameZone Login
    </h1>
    <p className="text-center text-gray-400 mb-8 tracking-wide">
      Enter your player credentials
    </p>

    {/* INPUTS */}
    <div className="space-y-5">
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-purple-500/40 focus:ring-2 focus:ring-purple-600 outline-none"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-purple-500/40 focus:ring-2 focus:ring-purple-600 outline-none"
      />
    </div>

    {/* LOGIN BUTTON */}
    <button
      onClick={handleLogin}
      className="mt-8 w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-purple-700 transition duration-200 shadow-lg hover:shadow-purple-700/40"
    >
      Login & Play ⚡
    </button>

    {/* REGISTER LINK */}
    <p className="text-center mt-6 text-gray-400">
      Don’t have an account?{" "}
      <Link to="/" className="text-purple-400 font-semibold hover:underline">
        Register
      </Link>
    </p>
  </div>
</div>

  )
}
