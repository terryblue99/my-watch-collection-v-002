import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watches'
import WatchList from '../components/WatchList'

class DashBoard extends Component {
    
    componentDidMount = () => {
        console.log('*** DashBoard props: ', this.props)
        this.props.getWatchesAction(this.props.currentUser.user.id)
    }

    render() {
        console.log('*** DashBoard props: ', this.props)
        return (
            <div>
                <WatchList watches={this.props.watches}/>               
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
