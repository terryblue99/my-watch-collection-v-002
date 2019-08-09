import React, { Component } from 'react'
import GetWatches from './GetWatches'

class DashBoard extends Component {
  
  render() {

    let user_id
    let logged_in

    if (!this.props.location) {
      user_id = this.props.user_id
      logged_in = this.props.logged_in
      
    } else {
      user_id = this.props.location.state.user_id
      logged_in = this.props.location.state.logged_in
    }
   
    return (
      <div className="dashboard">
          <GetWatches user_id={user_id} logged_in={logged_in} />
      </div> 
    )
  }
}

export default DashBoard