  import React from 'react'
import {Link} from 'react-router-dom'
import {Col,Row,Container} from 'react-bootstrap'
import Icon from './Assets/img/key-icon.svg'

export default function HomePage() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
    return (
      <div className="overal-layout">
        <Container>
          <Row>
            <Col md={4}>
              <Row>
                  <Col>
                    <div className="greetings">
                      <img src={Icon} alt="key-icon"/>
                      <h1>Hi there!</h1>
                      <h2>Sign in to manage your listings and booking requests on Nomad Rental</h2>
                      <h2><a  onClick={handleClick}>> Learn more about our premium subscription</a></h2>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="login"></div>
                  </Col>
                </Row>
            </Col>
            <Col md={8}>
              <div className="mainHeader"></div>
            </Col>
          </Row>
        </Container>
        </div>
    )
}

