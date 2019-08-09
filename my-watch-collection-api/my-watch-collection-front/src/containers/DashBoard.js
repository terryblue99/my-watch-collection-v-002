import React, { Component } from 'react'
import GetWatches from './GetWatches'

class DashBoard extends Component {
  
  render() {

    const fromLogin = this.props.location.state.fromLogin
    const user_id = this.props.location.state.user_id
    const logged_in = this.props.location.state.logged_in

    if (fromLogin) {
      return (
        <div className="dashboard">
            <GetWatches user_id={user_id} logged_in={logged_in} />
        </div> 
      )
    }
  }
}

export default DashBoard