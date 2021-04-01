import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'

export default function Login() {
    return (
      <div className="login-form">
        <Form className="login">
          <Form.Group controlId="formBasicEmail">
            <Form.Label id="email-address">Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" id="login"/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label id="password">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="password_" />
          </Form.Group>
          <Link to="/Bookings"><Button variant="primary" type="submit" id="button-submit">
          Sign in
          </Button></Link>
        </Form>
        <div id="forgot-password">Forgot your password?</div>
        <div id="sign-up">Don't have an account? <a href="/LoginPage">Sign up now</a></div>
      </div>
    )
}