import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setSuccessMessage('Your message has been sent successfully!');
      // Clear the success message after 5 seconds
      setTimeout(() => setSuccessMessage(''), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center  ">
      {successMessage && (
        <div className="bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-4 py-1 w-full text-center" role="alert">
          <p className="font-bold">Success</p>
          <p className="text-sm">{successMessage}</p>
        </div>
      )}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12  rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white ">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-100">
            Please fill out the form below to get in touch with us.
          </p>
        </div>
        <div className="mt-10 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg mt-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.message ? 'border-red-500' : ''
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs italic">{errors.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
