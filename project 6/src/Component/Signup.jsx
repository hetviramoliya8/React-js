import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

  const [formData, setformData] = useState({});
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecord();
  }, []);

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    // ✅ navigate('/') removed from here because it caused early redirection

    await axios.post("http://localhost:5000/users", formData).then(res => {
      setformData({
        email: "",
        password: "",
        fullName: "",
        username: ""
      });
      navigate('/login'); // keep your same redirect logic
    });
  };

  const fetchRecord = async () => {
    await axios.get("http://localhost:5000/users").then(res => {
      setRecord(res.data);
    });
  };

  return (
    <div className="bg-[#fffb01] flex items-center justify-center h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">

        <div className="flex justify-center mb-6">
          <img
            src="/img/image.png"
            alt="Snapchat Logo"
            className="w-20 h-20"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Create your account
        </h1>

        {/* ✅ Fixed: added onSubmit to <form> instead of button */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fffb01] outline-none"
            required
            value={formData.fullName || ""}
            name='fullName'
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fffb01] outline-none"
            required
            value={formData.email || ""}
            name='email'
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fffb01] outline-none"
            required
            value={formData.password || ""}
            name='password'
            onChange={handleChange}
          />

          {/* ✅ Fixed: removed onSubmit from button, kept type=submit */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-yellow-300 hover:bg-yellow-400 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?
          <Link to="/Login">
            <button className="text-yellow-400 hover:underline font-semibold">
              Log in
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
