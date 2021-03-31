import React from 'react'

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

        </div>
      </div>
    )
}

UserMenu.defaultProps={
  acronym: "JD",
  name:"John Doe",
  accType:"Premium Nomad"
}