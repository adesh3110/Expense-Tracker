// src/RegistrationPage.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerHandler } from "../services/auth_service";

function RegistrationPage() {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await registerHandler(inputs);
    console.log(resp);
  };

  useEffect(() => {
    const items = localStorage.getItem("token");
    console.log(items);
    if (items) {
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-gray-700'>Enter your name:</label>
            <input
              type='text'
              name='name'
              value={inputs.name}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-gray-700'>Enter your email:</label>
            <input
              type='email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-gray-700'>Enter your password:</label>
            <input
              type='password'
              name='password'
              value={inputs.password}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Register
            </button>
          </div>
          <div className='text-center'>
            <Link to='/' className='text-indigo-600 hover:text-indigo-500'>
              Already have an account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
