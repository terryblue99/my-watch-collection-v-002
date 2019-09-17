import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.jpg'
import defaultWatchImage from '../images/defaultWatchImage.png'

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
        
        <div className='Dashboard-newestWatch'>
          <h2>Newest watch</h2><br />
          <img src={defaultWatchImage} alt='newest watch' className='Dashboard-watchImage' />
        </div>
        <div className='Dashboard-item'>
          <img src={logo} alt='logo' />
        </div>
        <div className='Dashboard-oldestWatch'>
          <h2>Oldest watch</h2><br />
          <img src={defaultWatchImage} alt='oldest watch' className='Dashboard-watchImage' />
        </div>
        
        <div className='Dashboard-item'></div>
        <div className='Dashboard-numberOfWatches'>      
          <h2>Number of watches: {number_of_watches}</h2>
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
