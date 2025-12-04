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
<div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-300 via-indigo-200 to-blue-200 p-4">

  <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 w-full max-w-md border border-white/50">

    {/* Top Logo + Title */}
    <div className="text-center mb-8">
      
      <h1 className="text-3xl font-extrabold text-indigo-700 mt-4">
        Welcome Back
      </h1>
      <p className="text-gray-600 mt-1">Please log in to continue</p>
    </div>

    {/* Form */}
    <div className="space-y-5">

      {/* Email Field */}
      <div className="relative">
        <i className="ri-mail-line absolute left-4 top-3.5 text-indigo-600 text-xl"></i>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-3 bg-white/80 border border-indigo-300 rounded-xl shadow-sm 
                     focus:ring-4 focus:ring-indigo-300/50 focus:border-indigo-500 
                     outline-none transition-all duration-300"
        />
      </div>

      {/* Password Field */}
      <div className="relative">
        <i className="ri-lock-2-line absolute left-4 top-3.5 text-indigo-600 text-xl"></i>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-3 bg-white/80 border border-indigo-300 rounded-xl shadow-sm
                     focus:ring-4 focus:ring-indigo-300/50 focus:border-indigo-500 
                     outline-none transition-all duration-300"
        />
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full py-3 rounded-xl text-lg font-bold text-white
                   bg-gradient-to-r from-blue-600 to-indigo-600
                   hover:scale-[1.02] active:scale-[0.97]
                   transition-all duration-300 shadow-lg"
      >
        Login
      </button>

      {/* Register Link */}
      <p className="text-center text-gray-700 mt-2">
        New here?
        <Link to="/" className="text-indigo-700 font-semibold hover:underline ml-1">
          Create an account
        </Link>
      </p>

    </div>

  </div>

</div>




  )
}
