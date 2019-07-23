import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/index'
import WatchList from '../components/WatchList'

class GetWatches extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction()
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
      watches: state.getWatches.watches
    } 
}

export default connect(mapStateToProps, {getWatchesAction})(GetWatches)
