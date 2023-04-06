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
            review:"It has been a pleasure working with Sanket. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone."
                
        },
        {
            img: profile2,
            review:"Sanket built my small business a great website that really helps current and potential customers get a good feel for my company. I have been very happy with the customer service and the attention to detail. I highly recommend him for your website. I trust that he will do what is needed to be sure their clients are completely satisfied."
                
        },
        {
            img: profile3,
            review:"My new site created by Sanket just launched. They’ve done a great job of creating exactly what I wanted. Easy to work with and very responsive. They met all of my expectations and had a lot of insight regarding marketing tools I didn’t know existed."
                
        },
        {
            img: profile4,
            review:"The guys did a fantastic job creating a new website for IGL Films. They weere friendly and nothing was too much trouble. A fantastic service, we would highly recommend and we will continue to work with them."
                
        },
        {
            img: profile5,
            review:"As usual very helpful, nothing to much trouble and the end result as I envisaged. Good price point, you pay for what you get and full value for money."
                
        },
        // {
        //     img: profile6,
        //     review:"Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!"
                
        // }

    ]

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