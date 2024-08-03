import React from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import UserProvider from './Context/ContextProvider' // Ensure the import name matches
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/Layout' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Services' element={<Services />} />
        <Route path='Contact' element={<Contact />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
