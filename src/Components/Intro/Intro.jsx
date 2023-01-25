import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'></div>
        <div className='i-name'>
            <span>Hey! I am</span>
            <span>Sanket Sawale</span>
            <span>Frontend Developer with high level of skills in 
                web designing and development, producting the
                quality work</span>
        

        <button className='button i-button'>Hire me</button>

        </div>
        <div className='i-right'>
            I am right side
        </div>
    </div>
  )
}

export default Intro