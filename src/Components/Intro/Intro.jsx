import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'




function Intro() {
  return (

    // left side
    <div className='intro'>
        <div className='i-left'></div>
        <div className='i-name'>
            <span>Hey! I am</span>
            <span>Sanket Sawale</span>
            <span>Frontend Developer with high level of skills in 
                web designing and development, producting the
                quality work</span>
        

        <button className='button i-button'>Hire me</button>
        <div className='i-icons'>
            <a href='https://github.com/Mystic-Brain'>
            <img src={Github} alt=''/>
            </a>
            
            <a href='https://www.linkedin.com/in/sanket-sawale-111571a3/'>
            <img src={LinkedIn} alt=''/>
            </a>

            <a href='https://www.instagram.com/sank8_patil/'>
            <img src={Instagram} alt=''/>
            </a>
        </div>

        </div>

        {/* Right Side of Intro Images */}
        <div className='i-right'>

          <img src={Vector1} alt=''/>
          <img src={Vector2} alt=''/>
          <img src={boy} alt=''/>
            
        </div>
    </div>
  )
}

export default Intro