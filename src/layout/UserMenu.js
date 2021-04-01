import React from 'react'
import Button from 'react-bootstrap/Button'

export default function UserMenu({acronym,name,accType}) {
    return (
      <div className="login-layout">
        <div className="top-nav">
          <div id="nomadrental-logo">
          </div>
        </div>
        <div className="menu">
          <svg class="name-icon">
			      <rect id="name-icon" rx="12" ry="12" x="0" y="0" width="38" height="38">
			      </rect>
		      </svg>
          <div className="acronym">{acronym}</div>
          <div className="name">{name}</div>
          <div className="account-type">{accType}</div>

          <div className="booking-box">
          <a href="#">
            <div id="booking-box">
            <div className="bookings">
            <svg className="inbox" viewBox="0 64 18 12">
			        <path id="inbox" d="M 17.73134422302246 69.36381530761719 L 14.44759368896484 64.64340972900391 C 14.16718673706055 64.24031829833984 13.70724678039551 63.99999618530273 13.21621894836426 64 L 4.783781051635742 64 C 4.292739391326904 64 3.832801103591919 64.24032592773438 3.552397966384888 64.64341735839844 L 0.2686562538146973 69.36381530761719 C 0.09375286102294922 69.615234375 7.152557373046875e-07 69.91416168212891 0 70.22043609619141 L 0 74.5 C 0 75.32843780517578 0.6715624928474426 76 1.5 76 L 16.5 76 C 17.32843780517578 76 18 75.32843780517578 18 74.5 L 18 70.22043609619141 C 18 69.91415405273438 17.90625 69.61524963378906 17.73134422302246 69.36381530761719 Z M 4.783781051635742 65.5 L 13.21621894836426 65.5 L 15.65100002288818 69 L 11.82293796539307 69 L 10.82293796539307 71 L 7.177062511444092 71 L 6.177062511444092 69 L 2.348999977111816 69 L 4.783781051635742 65.5 Z M 16.5 74.5 L 1.5 74.5 L 1.5 70.5 L 5.25 70.5 L 6.25 72.5 L 11.75 72.5 L 12.75 70.5 L 16.5 70.5 L 16.5 74.5 Z">
			        </path>
		        </svg>
              Bookings</div>
            </div></a>
          
          </div>
          
        </div>
      </div>
    )
}

UserMenu.defaultProps={
  acronym: "JD",
  name:"John Doe",
  accType:"Premium Nomad"
}