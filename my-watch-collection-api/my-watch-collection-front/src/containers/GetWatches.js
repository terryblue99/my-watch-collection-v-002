import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/watches'
import WatchList from '../components/WatchList'

class GetWatches extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction(this.props.user_id)
    }

    render() {
        
        return (
            <div>
                <WatchList watches={this.props.watches}/>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      watches: state.myWatches.watches
    } 
}

export default connect(mapStateToProps, {getWatchesAction})(GetWatches)
