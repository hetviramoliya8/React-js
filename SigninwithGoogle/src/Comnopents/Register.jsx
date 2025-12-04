import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore"
import { signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth"
import { auth, db } from "../../firebaseConfig"

export default function Register() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const provider = new GoogleAuthProvider()

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), formdata)
      navigate('/Login')
    })
  }

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      })
      navigate('/dashboard')
    })
  }

  return (
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-indigo-200 to-blue-200 p-6">

  <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">

    {/* LEFT SIDE BANNER */}
    <div className="md:w-1/2 bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-12 flex flex-col justify-center items-start">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
        Create Your Account
      </h1>

      <p className="text-lg mt-4 text-indigo-100">
        Join the platform and start managing your tasks with a beautiful dashboard.
      </p>

      <div className="mt-8">
        <img 
          src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-illustration-download-in-svg-png-gif-file-formats--priority-planning-list-todo-pack-business-illustrations-297�Sr7.png"
          alt="Register Banner"
          className="w-60 opacity-90"
        />
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="md:w-1/2 p-10">
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Register
      </h2>

      <div className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handlechange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handlechange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlechange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        <button
          onClick={handleRegister}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold 
                     hover:scale-[1.02] hover:bg-indigo-700 transition-all shadow-md"
        >
          Register
        </button>

        <button
          onClick={handleSignIn}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold 
                     hover:scale-[1.02] hover:bg-gray-200 transition-all shadow"
        >
          Sign in with Google
        </button>
      </div>

      <p className="text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <Link to="/Login" className="text-indigo-600 font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>

</div>



  )
}
