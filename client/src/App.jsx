import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
