import React from 'react'
import './Header.css';



function Content() {
  return (
    
    <div className='con'>
    <div className='Content'>
        <div className='logo'>
    <img className='imm' src={require('./IMG_20240204_225857_558.jpg')} alt='Logo' />

      </div>
        <div className='title'>
    <h1>Allen Haison</h1>
    <h2>Aspiring<span className='typing-animation'> Full Stack Developer</span></h2>
    <p className='pa'> I'm Allen Haison, and I'm passionate about crafting immersive digital experiences through web development. My journey in the realm of technology began with a dream to become a Full Stack Developer.</p>
    </div>
    
    <div className='social-icons'>
    <a href="https://www.instagram.com">
          <i className="fab fa-instagram">  </i> 
        </a>&nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/allen-haison-a42846306/">
          <i className="fab fa-linkedin">  </i> 
        </a>&nbsp; &nbsp;
        <a href="https://github.com/Allenhaison">
          <i className="fab fa-github">  </i> 
        </a>
        <a href="https://github.com/Allenhaison">
        <i class="fa-brands fa-facebook"></i>  
        </a>
    </div>
   
    
    
  </div>
 
  
  </div>
  )
}

export default Content
