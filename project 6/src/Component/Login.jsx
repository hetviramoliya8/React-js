import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await axios.get("http://localhost:5000/users").then(res => {
      setUsers(res.data);
    });
  };

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = users.find(item =>
      (item.email === formdata.email || item.username === formdata.email) &&
      item.password === formdata.password
    );

    if (user) {
      navigate('/desk');
    } else {
      setFormdata({
        email: "",
        password: ""
      });
      alert("Invalid email/username or password");
    }
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
          Log in to Snapchat
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fffb01] outline-none"
            required
            value={formdata.email || ""}
            name="email"
            onChange={handleChange}
          />

         <input
  type="password"
  placeholder="Password"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fffb01] outline-none"
  required
  autoComplete="current-password"
  value={formdata.password || ""}
  name='password'
  onChange={handleChange}
/>

          <button
            type="submit"
            className="w-full bg-[#fffb01] cursor-pointer hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <a href="#" className="text-[#fffb01] hover:underline">
            Forgot your password?
          </a>
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Don’t have an account?
          <Link to="/">
            <button className="text-[#fffb01] hover:underline font-semibold">
              Sign up
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
