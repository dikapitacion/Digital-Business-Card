import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from './components/about'
import Info from './components/Info'
import Footer from './components/footer'
import Intersts from './components/interests'
import Img from './components/image'

export default function App(){
return (
  <div className='container'>
    
    <Img/>
    <div className="card">
    <Info/>
    <About/>
    <Intersts/>
    <Footer/>
    </div>
  </div>
)
}

