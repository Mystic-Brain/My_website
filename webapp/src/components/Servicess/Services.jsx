import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';

import { themeContext } from '../../Context'
import { useContext } from 'react';



function Services() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services">
        
        
        {/* LEFT SIDE */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awsome</span>
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

            <div style={{left:'14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                details = {"Figma, Sketch, Photoshop"}
                />
            </div>
        {/* SECOND CARD */}

        <div style={{top: '12rem', left:'-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                details = {"Html, Css, JavaScript, React"}
                />  

        </div>

        {/* THIRD CARD */}

        <div style={{top: '19rem', left:'12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'UX/UI'}
                details = {"Coolsank8 I am a developer I am a traveller"}
                />  

        </div>
        <div className='blur s-blur2 ' style={{background: 'var(--purple)'}}></div>




            
        </div>
    </div>
  )
}

export default Services