import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Authentication from '../AuthenticationService/Authentication'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginFailed: false
    }
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleLoginChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginClicked() {
    if (this.state.username === 'Frances' && this.state.password === '123') {
      Authentication.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      )
      this.props.history.push(`/welcome/${this.state.username}`)
    } else {
      this.setState({ loginFailed: true })
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.loginFailed && (<div className="alert alert-warning">Inavlid Credentials</div>)}
          Username:{' '}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginChange} />
          Password:{' '}
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleLoginChange} />
          <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.object
}

export default LoginPage
