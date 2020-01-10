import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router' // Used to change URL without a re-render
import Image from 'react-image-resizer'  // https://github.com/sottar/react-image-resizer
import logo from '../images/logo.jpg'
import { sortWatchesAction } from '../actions/watchesActions'
import { resetWatchesAction } from '../actions/watchesActions'
import RedirectToWithState from "./RedirectToWithState"

class DashboardMain extends Component {

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

    let a_newest_watch_exists
    let newestWatchImage
    let newestWatchMaker
    let newestWatchDate

    let an_oldest_watch_exists
    let oldestWatchImage
    let oldestWatchMaker
    let oldestWatchDate

    let number_of_watches = 0
    let number_of_nonWatches = 0

    const number_of_saved_watches = Object.keys(this.props.savedWatches).length
    
    const style = {
      image: {
        border: '1px solid',
        boxShadow: '10px 10px 5px darkgray'
      }
    }

    const watchesYes_Sort = [
      <>
        <h2 className='Sort-header'>Sort By</h2>
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
      </>
    ]

    const watchesNo_Welcome = [
      <>
        <h2 className="Welcome-text">Welcome</h2>
        <p className="Center-text"><b>Click on the ADD WATCH button</b></p>
        <p className="Center-text"><b>to start cataloguing your watches</b></p>
      </>
    ]

    if (this.props.newestWatch && this.props.oldestWatch) {
        const nonWatch = this.props.nonWatch // nonWatch also in Watches & WatchDetail

        a_newest_watch_exists = !this.props.newestWatch.watch_name.includes(nonWatch)
        newestWatchImage = this.props.newestWatch.image 
        newestWatchMaker = this.props.newestWatch.watch_maker
        newestWatchDate = this.props.newestWatch.date_bought

        an_oldest_watch_exists = !this.props.oldestWatch.watch_name.includes(nonWatch)
        oldestWatchImage = this.props.oldestWatch.image
        oldestWatchMaker = this.props.oldestWatch.watch_maker
        oldestWatchDate = this.props.oldestWatch.date_bought

        number_of_watches = Object.keys(this.props.filteredWatches).length
    }

    if (this.props.filteredNonWatches) {
      number_of_nonWatches = Object.keys(this.props.filteredNonWatches).length
    }

    if (this.state.sortRequired) {
      this.setState({
        sortRequired: false
      })  
      // Display the sorted watches on the dashboard
      return  RedirectToWithState(
                                    '/dashboard',
                                    {
                                      from_DashboardMain: true,
                                      sortSelected: this.state.sortSelected
                                    } 
                                  )
    } 
    
    return (

      <div className='Dashboard'>

        <div className='Dashboard-item Dashboard-initialList'>
          { number_of_saved_watches > 1
            ? <>
                <button className='btn FullList-button Button-text' 
                  // Fetch all watches and delete the DashBoard history location state
                  // so that the initial sort option text can be displayed
                  onClick={() => {this.props.resetWatchesAction()
                                  if (this.props.DashBoardSortHistory.location.state) {
                                      delete this.props.DashBoardSortHistory.location.state 
                                    }  
                                } 
                }> 
                  Redisplay Initial List
                </button>
              </>
            : null
          }
          <br />
          { number_of_watches > 0
              ? <h2 className='Dashboard-totalWatches'>Total watches: {number_of_watches}</h2>
              : null
          }
          { number_of_nonWatches > 0
              ? <h2 className='Dashboard-totalNonWatches'>Total non-watches: {number_of_nonWatches}</h2>
              : null
          }
           
        </div>
        <div className='Dashboard-item Dashboard-sort'> 
          { number_of_watches > 1 
              && an_oldest_watch_exists
              && a_newest_watch_exists
            ? watchesYes_Sort
            : null
          }
          { number_of_watches === 0 && number_of_saved_watches === 0
            ? watchesNo_Welcome
            : null
          }
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
          {number_of_watches > 1 && a_newest_watch_exists
            ? <>
                <h2 className='Dashboard-watchText'>Newest Watch</h2>
                <h3 className='Dashboard-watchText'>{newestWatchMaker}</h3>
                <h4 className='Dashboard-watchText'>{newestWatchDate}</h4>
              </>
            : null
          }
          {number_of_watches === 1 && a_newest_watch_exists
            ? <>
                <h3 className='Dashboard-watchText'>{newestWatchMaker}</h3>
                <h4 className='Dashboard-watchText'>{newestWatchDate}</h4>
              </>
            : null
          }
          {number_of_watches > 0 && a_newest_watch_exists
              ? <span className='Image-link' onClick={() => { 
                                    hashHistory.push(`/watches/${this.props.newestWatch.id}/watch_detail`) // set the url for the watch
                                    this.props.setCurrentWatch(this.props.newestWatch)
                                }}>
                  <Image
                    src={newestWatchImage}
                    width={200}
                    height={200}
                    style={style.image}
                  />
                </span>
            : null
          }
        </div>
        <div className='Dashboard-item Dashboard-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='Dashboard-item Dashboard-oldestWatch Dashboard-watch-image'>
          {number_of_watches > 1 && an_oldest_watch_exists
            ? <>
                <h2 className='Dashboard-watchText'>Oldest Watch</h2>
                <h3 className='Dashboard-watchText'>{oldestWatchMaker}</h3>
                <h4 className='Dashboard-watchText'>{oldestWatchDate}</h4>
              </>
            : null
          }
          {number_of_watches === 1 && an_oldest_watch_exists
            ? <>
                <h3 className='Dashboard-watchText'>{oldestWatchMaker}</h3>
                <h4 className='Dashboard-watchText'>{oldestWatchDate}</h4>
              </>
            : null
          }
          {number_of_watches > 0 && an_oldest_watch_exists
            ? <span className='Image-link' onClick={() => { 
                                    hashHistory.push(`/watches/${this.props.oldestWatch.id}/watch_detail`) // set the url for the watch
                                    this.props.setCurrentWatch(this.props.oldestWatch)
                                }}>
                  <Image
                    src={oldestWatchImage}
                    width={200}
                    height={200}
                    style={style.image}
                  />
                </span>
            : null
          }
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
    watches: state.myWatches.watches,
    savedWatches: state.myWatches.savedWatches,
    nonWatch: state.myWatches.nonWatch // Used when adding records that are not related to a specific watch.
                                       // For those records user must enter 'non-watch' in the Watch Name input.
  } 
}

export default connect(mapStateToProps, { sortWatchesAction, resetWatchesAction })(DashboardMain)