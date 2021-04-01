import React from 'react'
import './TopNav.css'
import button from '../pages/Assets/img/bars.svg'

export default function TopNav() {
    return (
      <div className="top-nav">
        <div id="nomadrental-logo">
        </div>
        <div className="pick-city">Choose a city</div>
        <div className="dropdown"><img src={button} alt="button" width={16} height={14}/>
        <button className="dropbtn">
          
          <div className="dropdown-content">
            <a href="#">City A</a>
            <a href="#">City B</a>
            <a href="#">City C</a>
            <a href="#">City D</a>
            <a href="#">City E</a>
          </div>
          </button>
        </div>
      </div>
    )
}
