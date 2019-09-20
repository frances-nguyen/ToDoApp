import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../API/HelloWorldService'

class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      welcomeMessage: ''
    }
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldService()
      .then(response =>
        this.setState({ welcomeMessage: response.data }))
      .catch(error => this.handleError(error))
  }

  handleError(error) {
    let errorMessage = ''
    if (error.message) {
      errorMessage += error.message
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message
    }
    this.setState({ welcomeMessage: errorMessage })
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your to do list{' '}
          <Link to="/todolist">here</Link>.
        </div>
        <div className="container">
          Click here to get a customized welcome message.
          <button
            onClick={this.retrieveWelcomeMessage}
            className="btn btn-success">
            Get Welcome Message
          </button>
        </div>
        <div className="container">
          {this.state.welcomeMessage}
        </div>
      </div>
    )
  }
}

WelcomePage.propTypes = {
  match: PropTypes.object
}

export default WelcomePage
