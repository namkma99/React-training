import React from 'react'


// import styles for the component Sidebar
import './sidebar.modules.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='menu'>
            <li className='item'>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
        
    </div>
  )
}

export default Sidebar