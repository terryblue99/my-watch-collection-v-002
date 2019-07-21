import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWatchesAction } from '../actions/index'
import WatchList from '../components/WatchList'

class FetchWatches extends Component {
    
    componentDidMount = () => {
        this.props.getWatchesAction()
    }

    render() {
        return (
            <div>
                <WatchList fetched={this.props.watches}/>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      watches: state.watches
    } 
  }

export default connect(mapStateToProps, {getWatchesAction})(FetchWatches)

