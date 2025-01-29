import { useState } from 'react'
import { Routes, Route} from 'react-router'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './component/Footer'
import SignUpForm from './pages/SignUpForm'
import Error404 from './pages/Error404'
import Hackothon from './pages/Hackothon'
import Projects from './pages/Projects'



function App() {


  return (
    <>
    <Navbar/>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Projects />} />   */}
      <Route path="/contact" element={<SignUpForm />} />
      <Route path="/hackathon" element={<Hackothon />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path='*' element={<Error404/>}/>
    </Routes> 

    <Footer/>
    </>
  )
}

export default App
