
import './Intro.css'
import Github from '../../img/github_ss.png'
import LinkedIn from '../../img/linkedin_sss.png'
import Instagram from '../../img/instagram_sss.png'
import Facebook from '../../img/facebook_sss.png'
import Twitter from '../../img/twitter_sss.png'
import Vector1 from '../../img/Vector2.png'
import Vector2 from '../../img/ppp.png'
import boys from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FlotingDiv from '../FlotingDiv/FlotingDiv'



const Intro = () => {
    return (

        <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hey! I Am</span>
            <span className='myname'>Sanket Sawale</span>
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
            <img src={Vector1} alt =''/>
            <img src={Vector2} alt =''/>
            <img src={boys} alt =''/> 
            <img src={glassesimoji} alt =''/>
        
        <div style={{top:'-4%', left:'55%'}}>
            <FlotingDiv image={Crown} txt1='Web' txt2='Developer' />
        </div>
        <div style={{top:'18rem', left:'0rem'}}>
            <FlotingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        {/*blur divs */}
        <div className="blur" style={{background:"rgb(238, 210, 255)"}}></div>
        <div className="blur" style={{background:"#C1F5FF",
                                        top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
        
        </div>
    ) 
}

export default Intro