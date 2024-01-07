import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { client } from './data';
// import profile6 from '../../img/profile6.jpg'
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonials() {
   
  return (
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>Client always get</span>
            <span> Exceptional Work </span>
            <span>From Me</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/*sliper */}

        <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        
        >
            {client.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={client.img} alt=""/>
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>



    </div>
  )
}

export default Testimonials