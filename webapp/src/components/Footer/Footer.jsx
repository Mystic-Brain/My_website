import React from 'react'
import './Footer.css'
import footer from '../../img/footer.jpg'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className="footer">
        <img src={footer} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>sawalesanket@gmail.com</span>
            <div className='f-icons'>
                <Insta/>
                <Facebook/>
                <Twitter/>
                <Linkedin/>
                <Github/>


            </div>

        </div>
    </div>
  )
}

export default Footer