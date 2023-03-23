import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profile1 from '../../img/profile1.png'
import profile2 from '../../img/profile2.jpeg'
import profile3 from '../../img/profile3.png'
import profile4 from '../../img/profile4.jpg'
import profile5 from '../../img/profile5.jpeg'
// import profile6 from '../../img/profile6.jpg'
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

function Testimonials() {
    const client=[
        {
            img: profile1,
            review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!"
                
        },
        {
            img: profile2,
            review:"I went to Thrive with a basic “feel” I wanted in a website. They helped flush out the visual layout and content. Thrive’s services are bargain when you weigh the cost versus the product you receive. I will be using them again in future endeavors. Thanks again!"
                
        },
        {
            img: profile3,
            review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!"
                
        },
        {
            img: profile4,
            review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!"
                
        },
        {
            img: profile5,
            review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!"
                
        },
        // {
        //     img: profile6,
        //     review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!"
                
        // }

    ]

  return (
    <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
            <span>client always get</span>
            <span>Exceptional Work</span>
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