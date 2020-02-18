import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watchesActions'
import NavBar from './NavBar'
import Watches from '../components/Watches'

class DashBoard extends Component {
    
    componentDidMount = () => {
        if ((!this.props.location.state) || 
            (this.props.location.state &&
             this.props.location.state.from_EditWatch &&
             this.props.location.state.Edits)) { 
                this.props.getWatchesAction(this.props.currentUser.user.id)
            } 
    }

    render() {

        let sortSelected = 'Select a sort option...'
        const watches = this.props.watches
        const watchRelated = this.props.watchRelated

        // Check for successful search
        let searchList
        if (this.props.location.state &&
            this.props.location.state.from_NavBar &&
            this.props.location.state.searchList) {
                // Delete the history location state to prevent re-execution
                delete this.props.history.location.state
                searchList = true
            }

        // Check if a search failed
        if (this.props.location.state &&
            this.props.location.state.from_NavBar &&
            this.props.location.state.searchFailed) {
                // Delete the history location state to prevent re-execution
                // of this code and fetch the original watch list
                delete this.props.history.location.state
                this.props.getWatchesAction(this.props.currentUser.user.id)
            }

        // Check if a record has been deleted
        if (this.props.location.state &&
            this.props.location.state.from_WatchDetail &&
            this.props.location.state.isWatchDeleted) {
                // Delete the history location state to prevent re-execution
                // of this code and fetch the updated list
                delete this.props.history.location.state
                this.props.getWatchesAction(this.props.currentUser.user.id)
            }

        // Check if redirected to from DashboardMain & a sort selected
        if (this.props.location.state &&
            this.props.location.state.from_DashboardMain &&
            this.props.location.state.sortSelected) {
                sortSelected = this.props.location.state.sortSelected
        }
    
        return (

            <div>
                <NavBar />
                <div className='container Main-container'> 
                    <Watches watches={watches}
                             watchRelated={watchRelated}
                             sortSelected={sortSelected}
                             searchList={searchList}
                             DashBoardSortHistory={this.props.history}
                    />               
                </div> 
            </div>
        )     
    }
}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser,
      watches: state.myWatches.watches,
      watchRelated: state.myWatches.watchRelated  // For records that are not related to a specific watch.
    }
}

export default connect(mapStateToProps, {getWatchesAction})(DashBoard)
