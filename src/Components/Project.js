import React from 'react'
import './Header.css';
function Project() {
  return (
    <section className='project'>
       <h2><center>My Recent Projects</center> </h2>
       <div className='pro'>
<div className='project-box'>
<img className='del'  src={require('./5469621-removebg-preview (1).png')} alt='Logo' />
<h3>online Shopping Site</h3>
<h4>WalkWell is an online shopping platform designed to offer a seamless shopping experience for footwear enthusiasts. the site handles various  functionalities such as product listings and a shopping cart </h4>
<div className='technology-box'>
              <p>html</p>
            </div>
            <div className='technology-box'>
              <p>css</p> 
            </div>
            <div className='technology-box'>
              <p>php</p>
            </div>
            <div className='technology-box'>
              <p>mysql</p>
            </div>
</div>
<div className='project-box'>
<img className='del2'  src={require('./4952909-removebg-preview.png')} alt='Logo' />
<h3>Learning Management System</h3>
<h4>EduHub is a web-based classroom management system designed to facilitate online learning. The platform includes features such as course creation, enrollment capabilities, and interactive classrooms.</h4>
<div className='technology-box'>
              <p>html</p>
            </div>
            <div className='technology-box'>
              <p>css</p>
            </div>
            <div className='technology-box'>
              <p>Django</p>
            </div>
            <div className='technology-box'>
              <p>SQLite</p>
            </div>
</div>



       </div>
    </section>
  )
}

export default Project
