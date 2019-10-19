import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Image from 'react-image-resizer'
import logo from '../images/logo.jpg'
import { sortWatchesAction } from '../actions/watchesActions'
import { resetWatchesAction } from '../actions/watchesActions'

class DashboardContent extends Component {

  state = {
    sortRequired: false,
    sortSelected: ''
  }

  handleSelectedSortKey = (event) =>  {
    event.preventDefault()
    this.props.sortWatchesAction(event.target.value)
    this.setState({
      sortRequired: true,
      sortSelected: event.target.value
    })
  }

  render() {
  
    let newestWatchImage
    let oldestWatchImage
    let number_of_watches = 0
    
    const style = {
      image: {
        border: '1px solid',
        boxShadow: '10px 10px 5px darkgray'
      }
    }

    if (this.props.watches && this.props.watches.length > 0) {
      newestWatchImage = this.props.newestWatch.image 
      oldestWatchImage = this.props.oldestWatch.image
      number_of_watches = Object.keys(this.props.watches).length
    }

    if (this.state.sortRequired) {
      this.setState({
        sortRequired: false
      })  
      // Display the sorted watches on the dashboard
      return  <Redirect push to={{
                  pathname: '/dashboard',
                  state: {
                    from_DashboardContent: true,
                    sortSelected: this.state.sortSelected
                  }
                }}  
              />
    } 
    
    return (
      <div className='Dashboard'>

        <div className='Dashboard-item Dashboard-initialList'>
          <button className='btn FullList-button Button-text' 
            // Fetch all watches and reset the DashBoard history location state
            // to display initial sort option text
            onClick={() => {this.props.resetWatchesAction()
                            const state = { ...this.props.dashBoardHistory.location.state };
                            delete state.sortSelected;
                            this.props.dashBoardHistory.replace(...this.props.dashBoardHistory.location, state)
                           } 
          }> 
            Redisplay Initial List
          </button>
        </div>
        <div className='Dashboard-item Dashboard-sort'>
            <h2 className='Sort-header'>
              Sort By
            </h2>
            <br />
            <select className='Select-sort'
                    required 
                    size='1' 
                    name='sort' 
                    onChange={this.handleSelectedSortKey}>
              <option>{this.props.sortSelected}</option>
              <option value='Watch Maker'>Watch Maker</option>
              <option value='Watch Name'>Watch Name</option>
              <option value='Newest to Oldest'>Newest to Oldest</option>
              <option value='Oldest to Newest'>Oldest to Newest</option>
              <option value='Cost Low to High'>Cost Low to High</option>
              <option value='Cost High to Low'>Cost High to Low</option>
            </select>
        </div>
        <div className='Dashboard-item'>
          <iframe className='Dashboard-time' 
                  title='clockFrame' 
                  src="http://free.timeanddate.com/clock/i6z3es2b/n2036/szw110/szh110/hoc9b8578/hbw10/hfc754c29/cf100/hnc432f30/hcw2/fav0/fiv0/mqcfff/mqs4/mql25/mqw12/mqd78/mhcfff/mhs2/mhl5/mhw2/mhd78/mmv0/hwm1/hhcfff/hhs2/hhl50/hhw8/hmcfff/hms2/hml70/hmw8/hmr4/hscfff/hss3/hsl70/hsw3" 
                  frameBorder="0" 
                  width="110" 
                  height="110">
          </iframe>
          <br />
          <iframe className='Dashboard-date' 
                  title='dateFrame' 
                  src="http://free.timeanddate.com/clock/i6z3g070/n64/ftb/bo2/pd2/tt1/tw1" 
                  frameBorder="0" 
                  width="172" 
                  height="20">
          </iframe>
        </div>
        
        <div className='Dashboard-item Dashboard-newestWatch Dashboard-watch-image'>
          <h2 className='Dashboard-watchText'>Newest watch</h2><br />
          <Image
            src={newestWatchImage}
            width={200}
            height={200}
            style={style.image}
          />
        </div>
        <div className='Dashboard-item Dashboard-logo'>
          <img src={logo} alt='logo' />
          <br />
          <h2 className='Dashboard-totalWatches'>Total watches: {number_of_watches}</h2>
        </div>
        <div className='Dashboard-item Dashboard-oldestWatch Dashboard-watch-image'>
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
    currentUser: state.currentUser,
    watches: state.myWatches.watches
  } 
}

export default connect(mapStateToProps, { sortWatchesAction, resetWatchesAction })(DashboardContent)