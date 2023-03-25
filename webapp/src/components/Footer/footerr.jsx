import React from 'react'
import './footerr.css'
import Github from '../../img/github_ss.png'
import LinkedIn from '../../img/linkedin_sss.png'
import Instagram from '../../img/instagram_sss.png'
import Facebook from '../../img/facebook_sss.png'
import Twitter from '../../img/twitter_sss.png'
import Location from '../../img/location.png'
import Calling from '../../img/calling.png'
import Gmail from '../../img/gmail.png'




function Footer() {
  return (

    <div className='footer'>
        <div className="left">        
            <div className='icon'> 
              <img src={Location} alt =''/>
              <span>Viman Nagar, Pune</span>
            </div>
         
        
            <div className='icon'> 
              <img src={Calling } alt =''/>
              <span>+918087138601</span>
            </div>

          
            <div className='icon'> 
              <img src={Gmail} alt =''/>
              <span>sawalesanket@gmail.com</span>
            </div>
        </div>

        <div className="right">
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

        <div className="blur111" style={{background:"rgb(238, 210, 255)"}}></div>
        <div className="blur111" style={{background:"#C1F5FF",
                                        top:'40%',width:'40%',height:'11rem',left:'-9rem'}}></div>


        
  </div>
    
  )
}

export default Footer