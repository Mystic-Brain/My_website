import React from 'react'
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/Novaturient.png"
import Ecommerce from "../../img/Carecarz.png"
import HOC from "../../img/Portfolio.png"
import MusicApp from "../../img/Portfolio2.png"

import { themeContext } from '../../Context'
import { useContext } from 'react';


function Portfolio() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id="Portfolio">

        {/* Heading */}
    <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
    <span>Portfolio</span>


    <Swiper
    spaceBetween={30}
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'
    >
      <SwiperSlide>
        <img src ={Sidebar} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src ={Ecommerce} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src ={MusicApp} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src ={HOC} alt=""/>
      </SwiperSlide>
    
      
    </Swiper>

    </div>
  )
}

export default Portfolio;