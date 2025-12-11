import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../FirebaseConfig'

export default function Login() {
     const [formdata, setFormdata]= useState([])

     const [showPassword, setShowPassword] = useState(false);
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

<div className="min-h-screen flex items-center justify-center bg-linear-to-br bg-gray-300 p-6">

  {/* CARD */}
  <div className="w-full max-w-md bg-white/40 backdrop-blur-2xl shadow-2xl 
                  rounded-3xl p-10 border border-white/20">

    {/* TITLE */}
    <h1 className="text-4xl font-extrabold text-center text-indigo-800 drop-shadow mb-8">
      Welcome Back
    </h1>

    {/* FORM */}
    <div className="flex flex-col space-y-5">

      <div>
        <label className="text-indigo-900 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 rounded-xl bg-white/60 border border-indigo-300
                    focus:ring-4 focus:ring-indigo-300/50 text-gray-900
                    outline-none transition shadow-sm"
        />
      </div>

      {/* PASSWORD FIELD WITH SHOW/HIDE */}
      <div className="relative">
        <label className="text-indigo-900 font-semibold">Password</label>

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          className="mt-1 w-full px-4 py-3 rounded-xl bg-white/60 border border-indigo-300
                    focus:ring-4 focus:ring-indigo-300/50 text-gray-900
                    outline-none transition shadow-sm pr-12"
        />

        {/* 👁️ EYE ICON */}
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 bottom-13 cursor-pointer text-gray-700 text-xl"
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>

      {/* LOGIN BUTTON */}
      <button
        onClick={handleLogin}
        className="w-full py-3 bg-indigo-700 text-white font-semibold 
                   text-lg rounded-xl shadow-lg hover:bg-indigo-800 
                   active:scale-95 transition-all duration-300"
      >
        Login
      </button>

      {/* REGISTER LINK */}
      <p className="text-center text-gray-800 font-medium mt-2">
        Don’t have an account?{" "}
        <Link to="/" className="text-indigo-700 font-semibold hover:underline">
          Login
        </Link>
      </p>

    </div>
  </div>
</div>


  )
}
