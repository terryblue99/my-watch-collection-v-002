import React, { Component } from 'react'
import { connect } from 'react-redux'
import Image from 'react-image-resizer'
import logo from '../images/logo.jpg'

class DashboardContent extends Component {
  render() {

    let newestWatchImage
    let oldestWatchImage
    let number_of_watches = 0
    
    const style = {
      image: {
        border: '1px solid',
        boxShadow: '10px 10px 5px black'
      }
    }

    if (this.props.watches && this.props.watches.length > 0) {
      newestWatchImage = this.props.newestWatch.image 
      oldestWatchImage = this.props.oldestWatch.image
      number_of_watches = Object.keys(this.props.watches).length
    }
    
    return (
      <div className='Dashboard'>

        <div className='Dashboard-item'></div>
        <div className='Dashboard-item'></div>
        <div className='Dashboard-item'></div>
        
        <div className='Dashboard-item'>
          <h2 className='Dashboard-watchText'>Newest watch</h2><br />
          <Image
            src={newestWatchImage}
            width={200}
            height={200}
            style={style.image}
          />
        </div>
        <div className='Dashboard-logo'>
          <img src={logo} alt='logo' />
          <br />
          <h2 className='Dashboard-totalWatches'>Number of watches: {number_of_watches}</h2>
        </div>
        <div className='Dashboard-item'>
          <h2 className='Dashboard-watchText'>Oldest watch</h2><br />
          <Image 
            src={oldestWatchImage}
            width={200}
            height={200}
            style={style.image}
          />
        </div>

        <div className='Dashboard-item'></div>
        <div className='Dashboard-item'></div>
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
