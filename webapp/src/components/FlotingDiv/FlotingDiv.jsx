import React from 'react'
import './FlotingDiv.css'

function FlotingDiv({image}) {
  return (
    <div className="flotingdiv">
        <img src={image} alt=''/>
        <span>
            Web
            <br/>
            Developer
        </span>
    </div>
  )
}

export default FlotingDiv