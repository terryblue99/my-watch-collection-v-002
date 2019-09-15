import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.jpg'


class DashboardContent extends Component {
  render() {

    let number_of_watches = 0
    if (this.props.watches) {
        number_of_watches = Object.keys(this.props.watches).length
    }
    
    return (
      <div className='Dashboard'>
        <img src={logo} alt='logo' className='DashboardLogo'/>
        <h2>Number of watches: {number_of_watches}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    watches: state.myWatches.watches
  } 
}

export default connect(mapStateToProps)(DashboardContent)
