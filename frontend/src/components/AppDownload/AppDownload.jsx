import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/>Greenscape App</p>
        <div className="app-download-platforms">
          <a href='https://www.example.com/'><img src={assets.play_store} alt="" /></a>
          <a href='https://www.example.com/'><img src={assets.app_store} alt="" /></a>            
        </div>
    </div>
  )
}

export default AppDownload
