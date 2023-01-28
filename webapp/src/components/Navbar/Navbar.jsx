import React from "react";

import "./Navbar.css";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Sanket</div>
        <div className="">toggle</div>
       
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              
                Home
              
            </li>
            <li>
              
                Serivces
              
            </li>
            <li>
              
                Experience
              
            </li>
            <li>
              
                Protfolio
              
            </li>
            <li>
              
                BucketList
              
            </li>
            <li>
              
                Testimonial
              
            </li>
          </ul>
        </div>
        
        <button className="button n-button">Contact</button>
    
      </div>
    </div>
  );
};

export default navbar;
