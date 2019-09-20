import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
//import Authentication from './AuthenticationService/Authentication'
import MyRoutes from './MyRoutes'
import Header from './Global/Header'
import Footer from './Global/Footer'

class ToDoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <MyRoutes />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default ToDoApp
