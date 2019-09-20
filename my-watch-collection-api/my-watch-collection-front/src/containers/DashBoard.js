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
        
        return (
            <div>
                <NavBar />
                <div className='container Main-container'> 
                    <Watches watches={this.props.watches}
                    />               
                </div> 
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
