// src/components/Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

function Login() {
  const [formData, setFormData] = useState({
    identifier: '', // This will be used for either username or email
    password: ''
  });
  const [identifierError, setIdentifierError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { identifier, password } = formData;
    let hasError = false;

    if (!identifier) {
      setIdentifierError('Username or Email is required');
      hasError = true;
    } else {
      setIdentifierError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      // Check if the identifier matches either username or email
      if ((identifier === user.username || identifier === user.email) && password === user.password) {
        navigate('/layout');
      } else {
        setIdentifierError('Invalid username/email or password');
        setPasswordError('Invalid username/email or password');
      }
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="identifier">
              Username or Email
            </label>
            <input
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:shadow-outline"
              id="identifier"
              type="text"
              placeholder="Username or Email"
            />
            {identifierError && <p className="text-red-500 text-xs italic mt-2">{identifierError}</p>}
          </div>
          <div className="mb-6">
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
            {passwordError && <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <p className="text-sm text-gray-200 flex pt-4">Don't have an account? <span><Link to='/signup' className='text-orange-500 hover:text-orange-800'> Signup</Link></span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
