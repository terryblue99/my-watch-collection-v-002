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
        <div className='Dashboard-item'>Reserved</div>
        <div className='Dashboard-item'></div>
        <div className='Dashboard-item'>Reserved</div>
        
        <div className='Dashboard-item'>Reserved</div>
        <div className='Dashboard-item'>
          <img src={logo} alt='logo' />
        </div>
        <div className='Dashboard-item'>Reserved</div>
        
        <div className='Dashboard-item'></div>
        <div>      
          <h2 className='Dashboard-item TotalWatches'>Number of watches: {number_of_watches}</h2>
        </div>
        <div className='Dashboard-item'></div>
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
