import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchWatches from '../actions/index'

class WatchesHome extends Component {

    componentWillMount = () => {
        this.props.fetchWatches()
    }

    render() {
        return (
            <div className='container'>
                Watches Home Page
            </div>
        )
    }
}

export default connect(null, {fetchWatches: fetchWatches})(WatchesHome)
