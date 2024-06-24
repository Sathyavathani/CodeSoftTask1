import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Skill from './Skill'
import './Style.css'
export default function NavBar() {
  const backgroundStyle = {
    backgroundImage: "url('/images/bgimg.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    padding: '20px'
  };
  return (
    <div style={backgroundStyle}>
       <br/>
        <nav>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/contact'>Contact</Link>
        </nav>
        <h3 align='center'>Welcome to My Portfolio</h3>
<Routes>
    <Route path='/home' element={<Home/>} exact/>
    <Route path='/contact' element={<Contact/>} exact/>
    <Route path='/about' element={<About/>} exact/>
    <Route path='/skills' element={<Skill/>} exact/>
</Routes>
    </div>
  )
}
