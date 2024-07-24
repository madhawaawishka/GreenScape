import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo1} className='footer-logo'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quo qui soluta rerum! Harum blanditiis perspiciatis nemo laudantium 
                    labore distinctio facilis eius beatae quibusdam pariatur odio illo, illum qui, 
                    recusandae nihil.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon}/>
                        <img src={assets.twitter_icon}/>
                        <img src={assets.linkedin_icon}/>
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>          
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2> 
                <ul>
                    <li>+9471-442325453</li>
                    <li>contact@Greenscape.com</li>
                </ul>   
            </div>
        </div>
      <hr/>
      <p className="footer-copyright">copyright 2024@Greenscape.com-All Right resived</p>
    </div>
  )
}

export default Footer
