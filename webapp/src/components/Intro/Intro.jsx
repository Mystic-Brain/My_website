import react from 'react'
import './Intro.css'
import Github from '../../img/github_ss.png'
import LinkedIn from '../../img/linkedin_sss.png'
import Instagram from '../../img/instagram_sss.png'
import Facebook from '../../img/facebook_sss.png'
import Twitter from '../../img/twitter_sss.png'

const Intro = () => {
    return (

        <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hey! I Am</span>
            <span>Sanket Sawale</span>
            <span>Frontend Developer with high
                level of experiance in web designing
                and development, producing the 
                Quality work
            </span>
        </div>
        
        <button className='button i-button'>Hire me</button>

        <div className="i-icon">
            <a href='https://github.com/Mystic-Brain'>
            <img src={Github} alt =''/>
            </a>
            <a href='https://www.linkedin.com/in/sanket-sawale-111571a3/'>
            <img src={LinkedIn} alt =''/>
            </a>
            <a href='https://www.instagram.com/sank8_patil/'>
            <img src={Instagram} alt =''/>
            </a>
            <a href='https://www.facebook.com/CoOlsank8'>
            <img src={Facebook} alt =''/>
            </a>
            <a href='https://twitter.com/cooksank8'>
            <img src={Twitter} alt =''/>
            </a>
        </div>


        </div>
        <div className="i-right">
            I am right side
        </div>
        </div>
    )
}

export default Intro