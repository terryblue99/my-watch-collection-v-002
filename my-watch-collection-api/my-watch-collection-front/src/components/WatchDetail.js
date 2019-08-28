import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../containers/App.css'
import Image from 'react-image-resizer'
import { deleteWatchAction } from '../actions/watches'
import DashboardContent from './DashboardContent'

class WatchDetail extends Component { 

    state = {
        backToDashboard: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Prevent component re-render on a true state, but reset to false
        if (this.state.backToDashboard) {
            this.setState({
                backToDashboard: false
            })
             return true
        }
        return true
    }

    handleDelete = () => {
        if (window.confirm('Do you realy want to delete this watch?')) {
            this.props.deleteWatchAction(this.props.currentWatch.id, 
                                         this.props.currentWatch.watch_name)                 
            this.setState({
                backToDashboard: true
            }) 
        }
    }

    handleBack = () => {
        this.setState({
             backToDashboard: true
        })
   }

    render () {
       
        if (this.state.backToDashboard) {
            // Clear the current watch screen to allow 
            // the dashboard to be displayed there instead
            this.props.setCurrentWatch(null) 
            return  <Redirect to={{
                    pathname: '/dashboard'
            }}  />
        } 

        const currentWatch = this.props.currentWatch
        const showWatches = this.props.showWatches
    
        if (currentWatch && currentWatch.watch_maker) {
            // console.log('*** WatchDetail currentWatch: ', currentWatch)
            return ( 
                
                <div className='watch-detail' css={css`
                        background-color: khaki;
                        display: ${showWatches ? 'none' : 'block'};
                        grid-area: main;
                `}>
                    <button onClick={this.handleBack} className='Back-button'>Back to dashboard</button>
                
                    <div css={css`
                        display: flex;
                        flex-direction: row;
                    `}>   
                        <div css={css`
                            padding-left: 20px;
                            padding-right: 80px;
                            padding-top: 20px;
                            margin-bottom: 15px;
                        `}> 
                            <Image 
                                src={currentWatch.image}
                                width={200}
                                height={200} 
                            />
                        </div>
                        <div css={css`
                            padding-left: 80px;
                            padding-right: 25px;
                            padding-bottom: 25px;
                        `}>
                            <h2 css={css`
                                fontSize: '20px';
                                padding-top: 15px; 
                            `}><b css={css`
                                color: sienna; 
                            `}>{currentWatch.watch_maker}:</b> {currentWatch.watch_name}</h2>
                            <br />
                            {currentWatch.movement ? 
                                <span>
                                    <p><em css={detailCss}>Movement</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.movement}</h3>
                                </span>
                            : null}
                            {currentWatch.complications ? 
                                <span>
                                    <p><em css={detailCss}>Complications</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.complications}</h3>
                                </span>
                            : null }
                            {currentWatch.band ? 
                                <span>
                                    <p><em css={detailCss}>Band</em></p> 
                                    <h3 className='WatchDetail'>{currentWatch.band}</h3>
                                </span>
                            : null }
                            {currentWatch.model_number ? 
                                <span>
                                    <p><em css={detailCss}>Model number</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.model_number}</h3>
                                </span>
                            : null }
                            {currentWatch.case_measurement ? 
                                <span>
                                    <p><em css={detailCss}>Case measurement</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.case_measurement}</h3>
                                </span>
                            : null }
                            {currentWatch.water_resistance ? 
                                <span>
                                    <p><em css={detailCss}>Water resistance</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.water_resistance}</h3>
                                </span>
                            : null }
                            {currentWatch.date_bought ? 
                                <span>
                                    <p><em css={detailCss}>Date bought</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.date_bought}</h3>
                                </span>
                            : null }
                            {currentWatch.cost ? 
                                <span>
                                    <p><em css={detailCss}>Cost</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.cost}</h3>
                                </span>
                            : null }
                        </div> 
                    </div>
                    <div css={css`
                        border-top: 1px solid;
                        padding-top 10px;
                        text-align: center;
                        padding-top: 20px;
                    `}>
                        <Link className='edit-button' to={{
                            pathname: `/watches/${currentWatch.id}/edit_watch`,
                            state: {
                                watch: currentWatch
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
        } else {
            return <DashboardContent />
        }
    }
}

const detailCss = {fontSize: '15px', color: 'sienna'}

export default connect(null, {deleteWatchAction})(WatchDetail)
