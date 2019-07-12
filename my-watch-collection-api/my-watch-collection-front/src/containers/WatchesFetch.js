import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchWatches from '../actions/index'
import WatchesList from '../components/WatchesList'

class WatchesFetch extends Component {

    componentDidMount = () => {
        this.props.fetchWatches()
    }

    render() {
        console.log('***WatchesFetch: ', this.props.watches)
        return (
            <WatchesList watches={this.props.watches}/>
        )
    }
}

const mapStateToProps = state => {
    return {
      watches: state.watches
    } 
  }

export default connect(mapStateToProps, {fetchWatches})(WatchesFetch)