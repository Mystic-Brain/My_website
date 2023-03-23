import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';

import { motion } from "framer-motion";
import { themeContext } from '../../Context'
import { useContext } from 'react';




function Services() {

    const transition = {
        duration: 1,
        type: "spring",
      }

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
        
        
        {/* LEFT SIDE */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Wonderful</span>
            <span>Services</span>
            <span>
                My services is really awsome you should try my services 
                <br/>
                ispum is simply dumy text of printting 
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>

            
            <div className='blur s-blur' style={{backgroud: "#ABF1FF94"}}></div>

        </div>

        {/* RIHT SIDE */}

        {/* FIRST CARD */}
        <div className="cards">

            <motion.div
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
                style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                details = {"Figma, Sketch, Photoshop"}
                />
            </motion.div>
        {/* SECOND CARD */}

        <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}     
                style={{top: '12rem', left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                details = {"Html, Css, JavaScript, React, photo ahi +, sdfjhk"}
                />  

        </motion.div>

        {/* THIRD CARD */}

        <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}     
                style={{top: '19rem', left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UX/UI'}
                details = {"Coolsank8 I am a developer I am a traveller"}
                />  

        </motion.div>
        <div className='blur s-blur2 ' style={{background: 'var(--purple)'}}></div>




            
        </div>
    </div>
  )
}

export default Services