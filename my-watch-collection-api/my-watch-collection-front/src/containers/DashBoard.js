import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watchesActions'
import NavBar from '../components/NavBar'
import Watches from '../components/Watches'

class DashBoard extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction(this.props.currentUser.user.id)
    }

    render() {

        let watches
        let sortSelected

        // Check if redirected to from another component 
        if (this.props.searchResult &&
            this.props.location.state && 
            this.props.location.state.from_NavBar &&
            this.props.location.state.searchRequested &&
            this.props.searchResult.length > 0) {
            watches = this.props.searchResult
        } else watches = this.props.watches

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
      searchResult: state.myWatches.searchResult  
    } 
}

export default connect(mapStateToProps, {getWatchesAction})(DashBoard)
