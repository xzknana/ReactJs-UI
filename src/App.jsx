// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';


import Home from "./pages/Home"
import Kelas from './pages/Kelas'
import Faq from './pages/Faq'
import Member from './pages/Member'
import Testimoni from './pages/Testimoni'

function App() {

  return (
    <div>
      <NavbarComponent />


      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/kelas" Component={Kelas}/>
        <Route path="/member" Component={Member}/>
        <Route path="/testimoni" Component={Testimoni}/>
        <Route path="/faq" Component={Faq}/>
      </Routes>


      <FooterComponent />
    </div>
  )
}




export default App;

