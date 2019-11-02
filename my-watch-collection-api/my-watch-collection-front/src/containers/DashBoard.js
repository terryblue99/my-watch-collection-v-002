import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watchesActions'
import NavBar from '../components/NavBar'
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

        let watches
        let sortSelected

        watches = this.props.watches

        // SORT - Check if redirected to from DashboardContent
        if (this.props.location.state &&
            this.props.location.state.from_DashboardContent &&
            this.props.location.state.sortSelected) {
                sortSelected = this.props.location.state.sortSelected
        } else sortSelected = 'Select a sort option...'
    
        return (
            <div>
                <NavBar />
                <div className='container Main-container'> 
                    <Watches watches={watches}
                             sortSelected={sortSelected}
                             dashBoardHistory={this.props.history}
                    />               
                </div> 
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

export default connect(mapStateToProps, {getWatchesAction})(DashBoard)
