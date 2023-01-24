import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Sanket</div>
            <span>toggle</span>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{ listStyleType: "none" }}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiance</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                    <li>Bucketlist</li>
                    

                </ul>
            </div>
        </div>
        <button className='button n-button'>
            Contact me
        </button>


    </div>
  )
}

export default Navbar