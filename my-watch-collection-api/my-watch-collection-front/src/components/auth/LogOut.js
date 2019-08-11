import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from "../../actions/currentUser.js"

class LogOut extends Component {
  render() {
    this.props.logout()
    return <Redirect to={{pathname: '/'}} />
  } 
}

export default connect(null, { logout })(LogOut)
