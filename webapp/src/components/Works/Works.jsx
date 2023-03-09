import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';


function Works() {
  return (
    <div className='works'>

        <div className="awesome">
            <span>Works for All</span>
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
        <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
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
              <img src={Facebook} alt="" />
            </div>
        </div>

        {/*BackGround Cricle*/}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>


        </div>
    </div>
  )
}

export default Works