import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
