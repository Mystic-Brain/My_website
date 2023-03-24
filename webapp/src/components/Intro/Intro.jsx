
import './Intro.css'
import Github from '../../img/github_ss.png'
import LinkedIn from '../../img/linkedin_sss.png'
import Instagram from '../../img/instagram_sss.png'
import Facebook from '../../img/facebook_sss.png'
import Twitter from '../../img/twitter_sss.png'
import Vector1 from '../../img/Vector2.png'
import Vector2 from '../../img/ppp.png'
import boys from '../../img/boy.png'
import Software from '../../img/software.png'
import Coding from '../../img/coding.png'

import glassesimoji from '../../img/glassesimoji.png'
import FlotingDiv from '../FlotingDiv/FlotingDiv'

import {motion} from 'framer-motion';
import {Link} from 'react-scroll'



import { themeContext } from '../../Context'
import { useContext } from 'react';


const Intro = () => {

    const transition = { duration: 2, type: "spring" };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (

        <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
            <span className='myname'>Sanket Sawale</span>
            <span>Frontend Developer with high
                level of skills in web designing
                and development, producing the 
                Quality work.
            </span>
        </div>
        
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>

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
            <img src={Vector1} alt =''/>
            <img src={Vector2} alt =''/>
            <img src={boys} alt =''/> 
            <motion.img
                initial={{ left: "-36%" }}
                whileInView={{ left: "-24%" }}
                transition={transition}
                src={glassesimoji}
                alt=""
            />
        
        <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            style={{top:'-4%', left:'55%'}}
            
            >
            <FlotingDiv image={Coding} txt1='Web' txt2='Developer' />
        </motion.div>




        <motion.div 
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
            style={{top:'18rem', left:'0rem'}}>
            <FlotingDiv image={Software} txt1='Software' txt2='Engineer'/>
        </motion.div>



        
        {/*blur divs */}
        <div className="blur" style={{background:"rgb(238, 210, 255)"}}></div>
        <div className="blur" style={{background:"#C1F5FF",
                                        top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
        
        </div>
    ) 
}

export default Intro