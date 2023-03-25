import React from 'react';
import './Works.css';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
//import Facebook from '../../img/Facebook.png';
import Nova from '../../img/Nova.png';
import techbee from '../../img/techbee.png';
import { motion } from "framer-motion";

import { themeContext } from '../../Context'
import { useContext } from 'react';


function Works() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>

        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Works for All</span>
            <span>Brands & Clients</span>
            <span>
                My services is really awsome you should try my services 
                <br/>
                ispum is simply dumy text of printting 
                <br/>
                ispum is simply dumy text of printting test and printing 
                <br/>
                ispum is simply dumy text of printting 
            </span>
            
            <button className='button s-button'>Hire Me</button>
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
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
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