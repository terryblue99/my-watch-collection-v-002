import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../containers/App.css'
import { deleteWatchAction } from '../actions/watches'
// import WatchList from '../containers/GetWatches'

class WatchDetail extends Component { 

    handleDelete = () => {
        if (window.confirm('Do you realy want to delete this watch?')) {
                this.props.deleteWatchAction(this.props.currentWatch.id, 
                                             this.props.currentWatch.watch_name)
        } 
    }

    handleGoBack = () => {
        return <Redirect to={{
            pathname: '/dashboard',
            state: { 
                 fromWatchDetail: true,
                 user_id: this.props.user_id,
                 logged_in: this.props.logged_in
            }
         }} />
    }

    render () {
  
        const currentWatch = this.props.currentWatch
        const showWatches = this.props.showWatches

        if (currentWatch.watch_maker) {
            return ( 

                <div className='watch-detail' css={css`
                        display: ${showWatches ? 'none' : 'block'};
                        grid-area: main;  
                        margin-bottom: 5px;
                `}>
                    <button onClick={this.handleGoBack} className='Back-button'>Back to watch list</button>
                    <div> 
                        <b><h2 css={css`
                            text-align: center;
                            margin-top: 15px;
                            
                        `}>{currentWatch.watch_maker} {currentWatch.watch_name}</h2></b>
                    </div>
                    <div css={css`
                        text-align: center;
                    `}>
                        <br /><p><b css={detailCss}>Movement</b></p>
                        <h3 className='WatchDetail'>{currentWatch.movement}</h3>
                        <p><b css={detailCss}>Complications</b></p>
                        <h3 className='WatchDetail'>{currentWatch.complications}</h3>
                        <p><b css={detailCss}>Band</b></p> 
                        <h3 className='WatchDetail'>{currentWatch.band}</h3>
                        <p><b css={detailCss}>Model number</b></p>
                        <h3 className='WatchDetail'>{currentWatch.model_number}</h3>
                        <p><b css={detailCss}>Case measurement</b></p>
                        <h3 className='WatchDetail'>{currentWatch.case_measurement}</h3>
                        <p><b css={detailCss}>Water resistance</b></p>
                        <h3 className='WatchDetail'>{currentWatch.water_resistance}</h3>
                        <p><b css={detailCss}>Date bought</b></p>
                        <h3 className='WatchDetail'>{currentWatch.date_bought}</h3>
                        <p><b css={detailCss}>Cost</b></p>
                        <h3 className='WatchDetail'>{currentWatch.cost}</h3>
                    </div>
                    <div css={css`
                        border-top: 1px solid;
                        padding-top 10px;
                        text-align: center;
                        margin-top: 40px;
                    `}>
                        <Link className='edit-button' to={{
                            // Link to the edit watch screen and pass the current watch
                            pathname: `/watches/${currentWatch.id}`,
                            state: {
                                fromWatchDetails: true,
                                watch: this.props.currentWatch
                            }
                        }}>
                            Edit this watch
                        </Link>
                        <button className='red-button' onClick={this.handleDelete}> 
                            Delete this watch
                        </button>
                    </div>
                </div> 
            )     

        } else return null
    }
}

const detailCss = {fontSize: '15px', color: 'green'}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    } 
}

export default connect(mapStateToProps, {deleteWatchAction})(WatchDetail)
