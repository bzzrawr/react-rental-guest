import React from 'react'
import BookingImage from '../pages/Assets/img/package-head__image@2x.png'
import Bookings from '../pages/Bookings'

export default function BookingInfo() {
    return (
        <div className="booking-layout">
          <h1 id="Bookings">Bookings</h1>
          <h2 id="bookings-info-1">Your current upcoming stays</h2>
          <h3>Please update with the properity if your travel plans should change or if you wish<br/> to make any changes to your stay.</h3>
          <a href="#" id="premium-subscription">Learn more about our premium subscription</a>
          <svg className="chevron-r" viewBox="27.494 37.657 7.282 12">
			      <path id="chevron-r" d="M 34.5837287902832 44.12359619140625 L 29.24322128295898 49.46407318115234 C 28.98565483093262 49.72163772583008 28.56807327270508 49.72163772583008 28.31053352355957 49.46407318115234 L 27.68765258789063 48.84119415283203 C 27.4305248260498 48.58406829833984 27.43003082275391 48.16733551025391 27.68655204772949 47.90960311889648 L 31.91899681091309 43.65723419189453 L 27.68655204772949 39.4048957824707 C 27.43003082275391 39.14715957641602 27.4305248260498 38.73043060302734 27.68765258789063 38.47330474853516 L 28.31053352355957 37.85042572021484 C 28.56809997558594 37.59285736083984 28.98568344116211 37.59285736083984 29.24322128295898 37.85042572021484 L 34.58370208740234 43.19090270996094 C 34.84126663208008 43.44844436645508 34.84126663208008 43.86602401733398 34.5837287902832 44.12359619140625 Z">
			      </path>
		      </svg>
          <div className="booking-info">
            <div id="booking-info">
              <img src={BookingImage} alt=""/>
              <div id="hotel-name">The Green View</div>
            </div>
          </div>
          

        </div>
        

    )
}