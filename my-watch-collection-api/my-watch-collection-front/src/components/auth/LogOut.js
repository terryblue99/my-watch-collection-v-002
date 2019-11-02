import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logOutAction } from "../../actions/currentUser.js"

class LogOut extends Component {
  render() {
    this.props.logOutAction()
    return <Redirect to={{pathname: '/'}} />
  } 
}

export default connect(null, { logOutAction })(LogOut)
