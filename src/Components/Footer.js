import React from 'react'
import './Header.css'

function Footer() {
  return (
    <div className='footer'>
     <div className="footer-content">
                <p>© {new Date().getFullYear()} Allen Haison. All rights reserved.</p>

                <a href="https://www.instagram.com">
           
           <i className="fab fa-instagram">  </i> 
         </a>
         <a href="https://www.linkedin.com">
           <i className="fab fa-linkedin">  </i> 
         </a>
         <a href="https://www.linkedin.com">
           <i className="fab fa-github"> </i> 
         </a>
                </div>
                
        
        
            </div>
    
  )
}

export default Footer
