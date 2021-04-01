import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import countryFlag from '../pages/Assets/img/c.png'

const AccountSettings = () =>{
    return (
      <div className="booking-layout">
        <h1 id="Bookings">Account</h1>
          <h2 id="bookings-info-1">Review and update your account details</h2>
          <h3>Please make sure these details are up to date as they’ll be used for your bookings,<br></br> and communications with the hotels.</h3>
          <a href="/Account" id="premium-subscription">Learn more about our premium subscription</a>
          <svg className="chevron-r" viewBox="27.494 37.657 7.282 12">
			      <path id="chevron-r" d="M 34.5837287902832 44.12359619140625 L 29.24322128295898 49.46407318115234 C 28.98565483093262 49.72163772583008 28.56807327270508 49.72163772583008 28.31053352355957 49.46407318115234 L 27.68765258789063 48.84119415283203 C 27.4305248260498 48.58406829833984 27.43003082275391 48.16733551025391 27.68655204772949 47.90960311889648 L 31.91899681091309 43.65723419189453 L 27.68655204772949 39.4048957824707 C 27.43003082275391 39.14715957641602 27.4305248260498 38.73043060302734 27.68765258789063 38.47330474853516 L 28.31053352355957 37.85042572021484 C 28.56809997558594 37.59285736083984 28.98568344116211 37.59285736083984 29.24322128295898 37.85042572021484 L 34.58370208740234 43.19090270996094 C 34.84126663208008 43.44844436645508 34.84126663208008 43.86602401733398 34.5837287902832 44.12359619140625 Z">
			      </path>
		      </svg>

          <div className="user-update-form">
          
          </div>
          <div id="John_Doe">John Doe</div>
          <div id="booking-uptodate">Please make sure these details are up to date as they’ll be used for your <br/>bookings, and communications with the hotels.</div>
          <div id="user-edit"></div>
          <div id="user-edit-form">
          <Form className="user-edit-info">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label id="name">Your Name</Form.Label>
                <Form.Control type="Name" placeholder="John Doe" id="your-name-form"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label id="email-address-">Email address</Form.Label>
                <Form.Control type="email" placeholder="john.doe@domain.tld" id="email-address-form"/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label id="old-password">Current Password</Form.Label>
                <Form.Control type="password" placeholder="" id="old-password-form"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label id="new-password">New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" id="new-password-form"/>
              </Form.Group>
            </Form.Row>

              <Button variant="primary" type="submit" id="update-info">
                Update
              </Button>
            </Form>
          </div>
          <div id="care-data">Your data will be <a href="/Account">handled with care</a></div>
            <svg class="user-country">
              <rect id="user-country" rx="6" ry="6" x="0" y="0" width="260" height="48">
              </rect>
            </svg>
            <svg class="chevron-right_b" viewBox="27.494 37.657 7.282 12">
              <path id="chevron-right_b" d="M 34.5837287902832 44.12359619140625 L 29.24322128295898 49.46407318115234 C 28.98565483093262 49.72163772583008 28.56807327270508 49.72163772583008 28.31053352355957 49.46407318115234 L 27.68765258789063 48.84119415283203 C 27.4305248260498 48.58406829833984 27.43003082275391 48.16733551025391 27.68655204772949 47.90960311889648 L 31.91899681091309 43.65723419189453 L 27.68655204772949 39.4048957824707 C 27.43003082275391 39.14715957641602 27.4305248260498 38.73043060302734 27.68765258789063 38.47330474853516 L 28.31053352355957 37.85042572021484 C 28.56809997558594 37.59285736083984 28.98568344116211 37.59285736083984 29.24322128295898 37.85042572021484 L 34.58370208740234 43.19090270996094 C 34.84126663208008 43.44844436645508 34.84126663208008 43.86602401733398 34.5837287902832 44.12359619140625 Z">
              </path>
            </svg>
            
            <div id ="Country">Country</div>
            <svg class="user-phone">
              <rect id="user-phone" rx="6" ry="6" x="0" y="0" width="260" height="48">
              </rect>
            </svg>
            <div id="phone-placeholder">(0) 053 555 555</div>
            <svg class="phone-country">
              <rect id="phone-country" rx="4" ry="4" x="0" y="0" width="83" height="48">
              </rect>
            </svg>
            <div id="phone-country-code">+66</div>
            <img src={countryFlag} id="country-flag" alt="country-flag"/>
            <div id="country-placeholder">Thailand</div>
            <div id="forgot-password"><a href="/Account">Forgot</a></div>
          
      </div>
    )
}

export default AccountSettings
