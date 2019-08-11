import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getWatchesAction } from '../actions/watches'
import WatchList from '../components/WatchList'

class GetWatches extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction(this.props.user_id)
    }

    render() {
        if (this.props.logged_in) {
            return (
                <div>
                    <WatchList watches={this.props.watches}
                            user_id={this.props.user_id} 
                            logged_in={this.props.logged_in} 
                    /> 
                                
                </div>
            )
        } else {
            return <Redirect to={{ pathname: '/dashboard' }} />
        }     
    }
}

const mapStateToProps = (state) => {
    return {
      watches: state.myWatches.watches,
      currentUser: state.currentUser
    } 
}

export default connect(mapStateToProps, {getWatchesAction})(GetWatches)
