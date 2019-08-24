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
            console.log('*** WatchDetail currentWatch: ', currentWatch)
            return ( 
                
                <div className='watch-detail' css={css`
                        display: ${showWatches ? 'none' : 'block'};
                        grid-area: main;  
                        margin-bottom: 5px;
                `}>
                    <button onClick={this.handleBack} className='Back-button'>Back to dashboard</button>
                    <div css={css`
                        display: flex;
                        flex-direction: row;
                    `}>   
                        <div css={css`
                            margin-left: 50px;
                            margin-top: 50px;
                        `}> 
                            <Image 
                                src={currentWatch.image}
                                width={200}
                                height={200} 
                            />
                        </div>
                        <div css={css`
                            margin-left: 150px;
                            text-align: center;
                        `}>
                            <b><h2 css={css`
                                margin-top: 15px; 
                            `}>{currentWatch.watch_maker} {currentWatch.watch_name}</h2></b>
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
                    </div>
                    <div css={css`
                        border-top: 1px solid;
                        padding-top 10px;
                        text-align: center;
                        margin-top: 40px;
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

const detailCss = {fontSize: '15px', color: 'green'}

export default connect(null, {deleteWatchAction})(WatchDetail)
