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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 p-4">

    <div className="bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
            Login
        </h1>

        <div className="flex flex-col space-y-4">

            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-white/70 border border-indigo-200
                           focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300/60
                           transition-all duration-300 outline-none"
            />

            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="px-4 py-3 rounded-xl bg-white/70 border border-indigo-200
                           focus:border-indigo-500 focus:ring-4 focus:ring-indigo-300/60
                           transition-all duration-300 outline-none"
            />

            <button
                onClick={handleLogin}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl
                           font-semibold text-lg hover:bg-indigo-700
                           transition-all duration-300"
            >
                Login
            </button>

            <div className="text-center mt-4">
                <Link
                    to="/"
                    className="text-indigo-700 font-semibold hover:underline"
                >
                    Register
                </Link>
            </div>

        </div>
    </div>

</div>

  )
}
