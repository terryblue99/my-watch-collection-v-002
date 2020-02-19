import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watchesActions'
import NavBar from './NavBar'
import Watches from '../components/Watches'

class DashBoard extends Component {
    
    componentDidMount = () => {
        if ((!this.props.location.state) || 
            (this.props.location.state &&
             this.props.location.state.isFromEditWatch &&
             this.props.location.state.isEdits)) { 
                this.props.getWatchesAction(this.props.currentUser.user.id)
            } 
    }

    render() {

        let sortOptionSelected = 'Select a sort option...'
        let isSearchSuccessful
        const watches = this.props.watches
        const watchRelated = this.props.watchRelated

        // Check for search
        if (this.props.location.state &&
            this.props.location.state.isFromNavBar) {
                if (this.props.location.state.isSearchSuccessful) {
                    isSearchSuccessful = this.props.location.state.isSearchSuccessful
                } else if (this.props.location.state.isSearchFailed) {
                    this.props.getWatchesAction(this.props.currentUser.user.id)
                }
                // Delete the history location state to prevent re-execution of this code
                delete this.props.history.location.state
            }

        // Check if if redirected to from WatchDetail and a record has been deleted
        if (this.props.location.state &&
            this.props.location.state.isFromWatchDetail &&
            this.props.location.state.isWatchDeleted) {
                // Delete the history location state to prevent re-execution
                // of this code and fetch the updated list
                delete this.props.history.location.state
                this.props.getWatchesAction(this.props.currentUser.user.id)
            }

        // Check if redirected to from DashboardMain & a sort selected
        if (this.props.location.state &&
            this.props.location.state.isFromDashboardMain &&
            this.props.location.state.sortOptionSelected) {
                sortOptionSelected = this.props.location.state.sortOptionSelected
        }
    
        return (

            <div>
                <NavBar />
                <div className='container Main-container'> 
                    <Watches watches={watches}
                             watchRelated={watchRelated}
                             sortOptionSelected={sortOptionSelected}
                             isSearchSuccessful={isSearchSuccessful}
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
