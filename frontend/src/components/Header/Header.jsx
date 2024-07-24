import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
    <div className="header">
        <div className="header-contents">
            {/* <h2>Order your favourite food here</h2> */}
            {/* <p>choose from diverse menu featuring a delectable 
                array of dishes crafted with the finest ingredients and culinary expertise.
                Our mission is satisfy your craving and elevate your dinning experience,
                one delicous meal at a time.</p> */}
             <a href='#explore-menu'><button>View Menu</button></a>
        </div>
    </div>
    </div>
  )
}

export default Header
