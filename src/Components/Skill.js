import React from 'react'
import './Header.css';
function Skill() {
  return (
    <section className='sills'>
      
      <div className='know'>
        <h2>Programming Proficiency</h2>
        <ul>
          <li><b><span>HTML & CSS: </span>Can create and style web pages.</b></li>
          <li><b><span>React: </span>Can create dynamic user interfaces for web applications.</b></li>
          <li><b><span>PHP:</span> Can build dynamic web applications.</b></li>
          
          
          
          <li>
         <b> <span>MySQL:</span> Basic knowledge of managing databases for web applications.</b>
          </li>
          <li><b><span>Git:</span> Familiar with version control using Git.</b></li>
        </ul>

      </div>
      <div className='imag'>
      <img className='banner' src={require('./4882404-removebg.png')} alt='Logo' />
      </div>
      
    </section>
  )
}

export default Skill
