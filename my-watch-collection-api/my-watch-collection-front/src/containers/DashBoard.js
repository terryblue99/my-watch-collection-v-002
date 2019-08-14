import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watches'
import WatchList from '../components/WatchList'

class DashBoard extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction(this.props.location.state.user_id)
    }

    render() {
        const user_id = this.props.location.state.user_id
        const logged_in = this.props.location.state.logged_in
        return (
            <div>
                <WatchList watches={this.props.watches}
                           user_id={user_id} 
                           logged_in={logged_in} 
                />               
            </div>
        )     
    }
}

const mapStateToProps = (state) => {
    return {
      watches: state.myWatches.watches,
      currentUser: state.currentUser
    } 
}

export default connect(mapStateToProps, {getWatchesAction})(DashBoard)
