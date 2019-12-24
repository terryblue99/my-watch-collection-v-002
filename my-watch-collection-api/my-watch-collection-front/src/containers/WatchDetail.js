import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../App.css'
import Image from 'react-image-resizer'  // https://github.com/sottar/react-image-resizer
import { deleteWatchAction } from '../actions/watchesActions'
import DashboardContent from './DashboardContent'

class WatchDetail extends Component { 

    state = {
        backToDashboard: false
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
            this.setState({
                backToDashboard: false
            }) 
            // Clear the current watch screen to allow 
            // the dashboard to be displayed there instead
            this.props.setCurrentWatch(null) 
            return  <Redirect to={{
                    pathname: '/dashboard'
            }}  />
        } 

        const {currentWatch, showWatches} = this.props

        const style = {
            image: {
                border: '1px solid'
            }
        }
    
        if (currentWatch && currentWatch.watch_maker) {

            return ( 
                
                <div className='Watch-detail' css={css`
                        background-color: cornsilk;
                        display: ${showWatches ? 'none' : 'block'};
                        grid-area: main;
                `}>
                    
                
                    <div css={css`
                        display: flex;
                        justify-content: space-between;
                        margin-top: 20px;

                        @media (max-width: 945px) {
                            flex-direction: column;
                        }
                    `}>   
                        <button onClick={this.handleBack} className='btn Back-button Button-text'>Back to dashboard</button>
                        <div css={css`
                            margin-bottom: 15px;
                            padding-left: 20px;
                            padding-top: 10px;
                            width: 25%;

                            @media (max-width: 945px) {
                                padding-left: 120px;
                            } 
                            
                            @media (max-width: 750px) {
                                padding-left: 120px;
                            }  
                        `}> 
                            <Image 
                                src={currentWatch.image}
                                width={200}
                                height={200} 
                                style={style.image}
                            />
                        </div>
                        <div css={css`
                            padding-bottom: 12px;
                            padding-left: 120px;
                            padding-top: 0;
                            width: 75%;

                            @media (max-width: 1500px) {
                                margin-right: 35px;
                            }
                        `}>
                            <h1><b css={css`
                                color: sienna;
                                font-family: 'Ubuntu, sans-serif';
                                font-size: 1.55rem;

                                @media (min-width: 1500px) {
                                    font-size: 1.75rem;
                                }
                            `}>{currentWatch.watch_maker}</b></h1> 
                            <h2 css={css`
                                color: midnightblue;
                                font-size: 1.4rem;
                                margin-bottom: 3px;
                                max-width: 500px;

                                @media (min-width: 1500px) {
                                    font-size: 1.75rem;
                                    margin-bottom: 15px;
                                }
                            `}>{currentWatch.watch_name}</h2>
                            <hr className='WatchDetail'/>
                            {currentWatch.movement ? 
                                <span>
                                    <p><em className='Detail-css'>Movement</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.movement}</h3>
                                </span>
                            : null}
                            {currentWatch.complications ?
                                <span>
                                    <p><em className='Detail-css'>Complications</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.complications}</h3>
                                </span>
                            : null }
                            {currentWatch.band ? 
                                <span>
                                    <p><em className='Detail-css'>Band</em></p> 
                                    <h3 className='WatchDetail'>{currentWatch.band}</h3>
                                </span>
                            : null }
                            {currentWatch.model_number ? 
                                <span>
                                    <p><em className='Detail-css'>Model Number</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.model_number}</h3>
                                </span>
                            : null }
                            {currentWatch.case_measurement ? 
                                <span>
                                    <p><em className='Detail-css'>Case Measurement</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.case_measurement}</h3>
                                </span>
                            : null }
                            {currentWatch.water_resistance ? 
                                <span>
                                    <p><em className='Detail-css'>Water Resistance</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.water_resistance}</h3>
                                </span>
                            : null }
                            {currentWatch.date_bought ? 
                                <span>
                                    <p><em className='Detail-css'>Date Bought/Gifted</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.date_bought}</h3>
                                </span>
                            : null }
                            {currentWatch.cost ?
                                <span>
                                    <p><em className='Detail-css'>Cost</em></p>
                                    <h3 className='WatchDetail'>${parseFloat(currentWatch.cost).toFixed(2)}</h3>
                                </span>
                            : null }
                            {currentWatch.notes ? 
                                <span>
                                    <p><em className='Detail-css'>Notes</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.notes}</h3>
                                </span>
                            : null }
                        </div> 
                    </div>
                    <div css={css`   
                        display:flex;  
                        justify-content: center;  

                        @media (max-width: 750px) {
                            flex-direction: column;
                        }
                    `}>
                        <Link className='btn Edit-button Button-text' to={{
                            pathname: `/watches/${currentWatch.id}/edit_watch`,
                            state: {
                                watch: currentWatch
                            }
                        }}>
                            Edit
                        </Link>
                        <button className='btn Red-button Button-text' onClick={this.handleDelete}> 
                            Delete
                        </button>
                    </div>
                </div> 
            )     
        } else {
            return <DashboardContent newestWatch={this.props.newestWatch}
                                     oldestWatch={this.props.oldestWatch}
                                     sortSelected={this.props.sortSelected} 
                                     dashBoardHistory={this.props.dashBoardHistory}               
                    />
        }
    }
}

export default connect(null, {deleteWatchAction})(WatchDetail)
