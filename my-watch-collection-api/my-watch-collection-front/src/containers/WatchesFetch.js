import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchWatches from '../actions/index'
import WatchList from '../components/WatchList'

class WatchesFetch extends Component {

    componentDidMount = () => {
        this.props.fetchWatches()
    }

    render() {
        // console.log('***WatchesFetch: ', this.props.watches)
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

export default connect(mapStateToProps, {fetchWatches})(WatchesFetch)