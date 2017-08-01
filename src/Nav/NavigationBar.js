import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap';

const NavigationBar = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Auth0 - React</a>
      </Navbar.Brand>
      <Link to={'/home'}
      bsStyle="primary"
      className="btn-margin"
      >
        Home
      </Link>
      {
        !props.isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={() => props.login()}
            >
              Log In
            </Button>
          )
      }
      {
        props.isAuthenticated() && (
          <Link to={'/profile'}
          bsStyle="primary"
          className="btn-margin"
          >
            Profile
          </Link>
          )
      }
      {
        props.isAuthenticated() && (
          <Link to={'/ping'}
          bsStyle="primary"
          className="btn-margin"
          >
            Ping
          </Link>
          )
      }
      {
        props.isAuthenticated() &&  props.userHasScopes(['write:messages']) && (
          <Link to={'/admin'}
          bsStyle="primary"
          className="btn-margin"
          >
            Admin
          </Link>
          )
      }
      {
        props.isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={() => props.logout()}
            >
              Log Out
            </Button>
          )
      }
    </Navbar.Header>
  </Navbar>
)

export default NavigationBar
