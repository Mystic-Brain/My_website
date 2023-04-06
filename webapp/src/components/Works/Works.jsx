import React from 'react';
import './Works.css';
import Travel from '../../img/travel.png';
import Airplane from '../../img/airplane.png';
import Sunrise from '../../img/sunrise.png';
import Nova from '../../img/Nova.png';
import techbee from '../../img/techbee.png';
import { motion } from "framer-motion";

import { themeContext } from '../../Context'
import { useContext } from 'react';
import {Link} from 'react-scroll'


function Works() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works' >

        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Works for All</span>
            <span>Brands & Clients</span>
            <span>
                My services is really awsome you should try my services 
                <br/>
                Worked with Novaturient Traveller 
                <br/>
                Worked with Tech Bee 
                <br/>
                Looking for more client & Brands 
            </span>
            
            <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
            </Link>
            <div className='blur s-blur' style={{backgroud: "#ABF1FF94"}}></div>

        </div>
        
        {/*Right Side */}

        <div className="w-right">

        <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }} 
              className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Nova} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Travel} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Airplane} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Sunrise} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={techbee} alt="" />
            </div>
        </motion.div>

        {/*BackGround Cricle*/}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>


        </div>
    </div>
  )
}

export default Works