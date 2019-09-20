import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Authentication from '../AuthenticationService/Authentication'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    const isUserLoggedIn = Authentication.isUserLoggedIn()
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/" className="navbar-brand mb-0 h1" style={{ color: '#e3f2fd' }}>Todo</a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {isUserLoggedIn && (<Link className="nav-link" to="/welcome/:name">Home</Link>)}
              {isUserLoggedIn && (<Link className="nav-link" to="/todolist">To Do</Link>)}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && (<Link className="nav-link" to="/login">Log In</Link>)}
              {isUserLoggedIn && (<Link
                className="nav-link"
                to="/logout"
                onClick={Authentication.logOut}>Log Out</Link>)}
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
