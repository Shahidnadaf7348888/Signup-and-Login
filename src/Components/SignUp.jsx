// src/components/Signup.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateUsername = (username) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(String(username));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    let validationErrors = {};

    if (!username) {
      validationErrors.username = 'Username is required';
    } else if (!validateUsername(username)) {
      validationErrors.username = 'Username must only contain letters';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate a successful signup
      setUser({ username, email, password });
      setSuccess('Signup was successful');
      setTimeout(() => setSuccess(''), 2000); // Clear the success message after 2 seconds
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
        {success && (
          <div className="mb-4 p-4 text-green-800 bg-green-200 rounded">
            {success}
          </div>
        )}
        <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
            {errors.username && <p className="text-red-500 text-xs italic mt-2">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
            {errors.password && <p className="text-red-500 text-xs italic mt-2">{errors.password}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="********"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic mt-2">{errors.confirmPassword}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <p className="text-sm text-gray-200 flex pt-4">Already have an account? <span><Link to='/' className='text-orange-500 hover:text-orange-800'> Login</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
