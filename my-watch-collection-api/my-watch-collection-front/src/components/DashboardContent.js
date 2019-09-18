import React, { Component } from 'react'
import { connect } from 'react-redux'
import Image from 'react-image-resizer'
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
        
        <div className='Dashboard-item'>
          <h2 className='Dashboard-watchText'>Newest watch</h2><br />
          <Image
            src={defaultWatchImage}
            width={200}
            height={200}
          />
        </div>
        <div className='Dashboard-item'>
          <img src={logo} alt='logo' />
        </div>
        <div className='Dashboard-item'>
          <h2 className='Dashboard-watchText'>Oldest watch</h2><br />
          <Image
            src={defaultWatchImage}
            width={200}
            height={200}
          />
        </div>

        <div className='Dashboard-item'></div>
        <div className='Dashboard-item'>      
          <h2 className='Dashboard-numberOfWatches'>Number of watches: {number_of_watches}</h2>
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
