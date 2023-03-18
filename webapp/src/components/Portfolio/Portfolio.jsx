import React from 'react'
import './Portfolio.css'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"


// import {Swiper, Swiperslide} from 'swiper/react';
// import 'swiper/swiper.css'



function Portfolio() {
  return (
    <div className='portfolio'>

        {/* Heading */}
    <span>Recent Project</span>
    <span>Portfolio</span>


        {/* slider */}
    {/* <Swiper>
        <Swiperslide>
            <img src={Sidebar} alt="" />
        </Swiperslide>

        <Swiperslide>
            <img src={Ecommerce} alt="" />
        </Swiperslide>

        <Swiperslide>
            <img src={HOC} alt="" />
        </Swiperslide>

        <Swiperslide>
            <img src={MusicApp} alt="" />
        </Swiperslide>

    </Swiper> */}

    </div>
  )
}

export default Portfolio;