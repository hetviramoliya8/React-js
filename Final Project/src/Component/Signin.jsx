import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { doc, setDoc } from "firebase/firestore"
import { signInWithPopup,  createUserWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth"
import { auth, db } from "../../FirebaseConfig"

export default function Register() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()
     const [showPassword, setShowPassword] = useState(false);

const provider = new GoogleAuthProvider()

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), formdata)
      navigate('/login')
      if (!formdata.email || !formdata.password) {
  alert("Please enter email & password");
  return;
}
    })
  }

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      })
      navigate('/dashbord')
    })
  }

  return (
  <div className="min-h-screen bg-gray-300 flex items-center justify-center p-6">

  {/* CARD */}
  <div className="bg-white/40 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20">

    <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-700">
      Create Account
    </h2>

    <div className="space-y-6">
    
            <label className="text-indigo-900 font-semibold">Email</label>

      <input
        type="text"
        name="email"
        placeholder="Email Address"
        onChange={handlechange}
        className="w-full px-4 py-3 border border-indigo-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
       {/* 👁️ EYE ICON */}
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-12 bottom-77 cursor-pointer text-gray-700 text-xl"
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
              <label className="text-indigo-900 font-semibold">Password</label>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handlechange}
        className="w-full px-4 py-3 border border-indigo-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleRegister}
        className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 transition font-semibold shadow-lg"
      >
        Register
      </button>
    </div>

    {/* OR Divider */}
    <div className="flex items-center gap-4 mt-8">
      <div className="h-px bg-gray-400 w-full"></div>
      <span className="text-gray-600">OR</span>
      <div className="h-px bg-gray-400 w-full"></div>
    </div>

    {/* Google Button */}
    <button onClick={handleSignIn}
      className="w-full py-3 mt-4 bg-white text-gray-700 border border-gray-300 rounded-xl shadow hover:bg-gray-100 active:scale-95 transition flex items-center justify-center gap-3"
    >
      <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6" />
      Continue with Google
    </button>

    <p className="text-center text-gray-600 mt-6">
      Already have an account?{" "}
      <Link to="/Login" className="text-indigo-700 font-semibold hover:underline">
        Login
      </Link>
    </p>

  </div>
</div>



  )
}