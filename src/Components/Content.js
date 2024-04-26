import React from 'react'
import './Header.css';

function Content() {
  return (
    <div className='Content'>
        <div className='logo'>
    <img className='imm' src={require('./IMG_20240204_225857_558.jpg')} alt='Logo' />

      </div>
        <div className='title'>
    <h1>Allen Haison</h1>
    <h2>Aspiring<span className='typing-animation'> Full Stack Developer</span></h2>
    <p> I'm Allen Haison, and I'm passionate about crafting immersive digital experiences through web development.<span> My journey in the realm of technology began with a dream to become a Full Stack Developer.</span></p>
    </div>
    
    
  </div>
  )
}

export default Content
