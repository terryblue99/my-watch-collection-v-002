import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watches'
import NavBar from '../components/NavBar'
import Watches from '../components/Watches'

class DashBoard extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction(this.props.currentUser.user.id)
    }

    render() {
       const history = this.props.history
        return (
            <div>
                <NavBar />
                <Watches watches={this.props.watches}
                           history={history}
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
