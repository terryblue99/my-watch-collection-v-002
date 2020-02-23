import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import '../App.css'
import Image from 'react-image-resizer'  // https://github.com/sottar/react-image-resizer
import { deleteWatchAction } from '../actions/watchesActions'
import DashboardMain from './DashboardMain'
import RedirectTo from '../components/RedirectTo'
import RedirectToWithState from '../components/RedirectToWithState'

class WatchDetail extends Component { 

    state = {
        isBackToDashboard: false,
        isWatchDeleted: false
    }

    handleDelete = () => {

        let isWatchRelated
        let recordType

        if (this.props.currentWatch.watch_name === this.props.watchRelated) {
            isWatchRelated = true
            recordType = 'watch-related'
        } else {
                isWatchRelated = false
                recordType = 'watch'
               }

        if (window.confirm(`Do you realy want to delete this ${recordType}?`)) {

            this.props.deleteWatchAction(this.props.currentWatch.id) 
            
            if (!isWatchRelated) {
                alert('The watch has been deleted!')
            } else alert('The watch-related has been deleted!')

            this.setState({
                isBackToDashboard: true,
                isWatchDeleted: true
            }) 
        }
    }

    handleBack = () => {
        this.setState({
             isBackToDashboard: true
        })
   }

    render () {

        if (this.state.isBackToDashboard && this.state.isWatchDeleted) {
            this.setState({
                isBackToDashboard: false,
                isWatchDeleted: false
            })
            // Clear the current detail screen to allow 
            // the dashboard to be displayed there instead
            this.props.setCurrentWatch(null) 
            return  RedirectToWithState(
                                            '/dashboard',
                                            {
                                                isFromWatchDetail: true,    
                                                isWatchDeleted: true
                                            } 
                                        )
        } 
        else if (this.state.isBackToDashboard) {
            this.setState({
                isBackToDashboard: false
            }) 
            // Clear the current detail screen to allow 
            // the dashboard to be displayed there instead
            this.props.setCurrentWatch(null) 
            return  RedirectTo('/dashboard')
        }

        const {currentWatch, showWatches} = this.props
        const watchRelated = this.props.watchRelated

        const style = {
            image: {
                border: '1px solid'
            }
        }
    
        if (currentWatch && !this.props.isSearchSuccessful) {

            return ( 
                
                <div className='Watch-detail' css={css`
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
                            padding-left: 80px;
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
                                @media (max-width: 750px) {
                                    font-size: 1.25rem;
                                }
                                @media (min-width: 1500px) {
                                    font-size: 1.75rem;
                                }
                            `}>{currentWatch.watch_maker}</b></h1> 
                            <h2 css={css`
                                color: midnightblue;
                                font-size: 1.4rem;
                                margin-bottom: 3px;
                                max-width: 500px;
                                @media (max-width: 750px) {
                                    font-size: 1rem;
                                }
                                @media (min-width: 1500px) {
                                    font-size: 1.75rem;
                                    margin-bottom: 15px;
                                }
                            `}>{currentWatch.watch_name}</h2>

                            <hr className='WatchDetail'/><br />
                            
                            {currentWatch.movement && !currentWatch.watch_name.includes(watchRelated)
                                ?   <>  <p><em className='Detail-css'>Movement</em></p>
                                        <h3 className='WatchDetail'>{currentWatch.movement}</h3>
                                    </>
                                :   null }
                            {currentWatch.movement && currentWatch.watch_name.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{currentWatch.movement}</h3>
                                    </>
                                :   null }
                            {currentWatch.complications && !currentWatch.watch_name.includes(watchRelated)
                                ?   <>  <p><em className='Detail-css'>Complications</em></p>
                                        <h3 className='WatchDetail'>{currentWatch.complications}</h3>
                                    </>
                                :   null }
                            {currentWatch.complications && currentWatch.watch_name.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{currentWatch.complications}</h3>
                                    </>
                                :   null }
                            {currentWatch.band && !currentWatch.watch_name.includes(watchRelated)
                                ?   <>  <p><em className='Detail-css'>Band</em></p>
                                        <h3 className='WatchDetail'>{currentWatch.band}</h3>
                                    </>
                                :   null }
                            {currentWatch.band && currentWatch.watch_name.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{currentWatch.band}</h3>
                                    </>
                                :   null }
                            {currentWatch.model_number && !currentWatch.watch_name.includes(watchRelated)
                                ?   <>  <p><em className='Detail-css'>Model Number</em></p>
                                        <h3 className='WatchDetail'>{currentWatch.model_number}</h3>
                                    </>
                                :   null }
                            {currentWatch.model_number && currentWatch.watch_name.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{currentWatch.model_number}</h3>
                                    </>
                                :   null }
                            {currentWatch.case_measurement && !currentWatch.watch_name.includes(watchRelated)
                                ?   <>  <p><em className='Detail-css'>Case Measurement</em></p>
                                        <h3 className='WatchDetail'>{currentWatch.case_measurement}</h3>
                                    </>
                                :   null }
                            {currentWatch.case_measurement && currentWatch.watch_name.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{currentWatch.case_measurement}</h3>
                                    </>
                                :   null }
                            {currentWatch.water_resistance && !currentWatch.watch_name.includes(watchRelated)
                                ?   <>  <p><em className='Detail-css'>Water Resistance</em></p>
                                        <h3 className='WatchDetail'>{currentWatch.water_resistance}</h3>
                                    </>
                                :   null }
                            {currentWatch.water_resistance && currentWatch.watch_name.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{currentWatch.water_resistance}</h3>
                                    </>
                                :   null }
                            {currentWatch.date_bought && !currentWatch.watch_name.includes(watchRelated) 
                            ?   <>
                                    {currentWatch.cost > 0
                                        ? <> <p><em className='Detail-css'>Date Bought</em></p>
                                             <h3 className='WatchDetail'>{currentWatch.date_bought}</h3>
                                          </>
                                        : <> <p><em className='Detail-css'>Date RCVD</em></p>
                                             <h3 className='WatchDetail'>{currentWatch.date_bought}</h3>
                                          </>
                                    }    
                                </>
                            : null }
                            {currentWatch.cost > 0
                            ?    <>
                                    <p><em className='Detail-css'>Cost</em></p>
                                    <h3 className='WatchDetail'>${parseFloat(currentWatch.cost).toFixed(2)}</h3>
                                </>
                            : null }
                            {currentWatch.notes 
                            ?    <>
                                    <p><em className='Detail-css'>Notes</em></p>
                                    <h3 className='WatchDetail'>{currentWatch.notes}</h3>
                                </>
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
                        {!currentWatch.watch_name.includes(watchRelated)
                            ? <>
                                <Link className='btn Edit-button Button-text' to={{
                                        pathname: `/watches/${currentWatch.id}/edit_watch`,
                                        state: {
                                            watch: currentWatch
                                        }
                                    }}>
                                        Edit
                                </Link>
                              </>
                            : <>
                                <Link className='btn Edit-button Button-text' to={{
                                        pathname: `/watches/${currentWatch.id}/edit_watch_related`,
                                        state: {
                                            watch: currentWatch
                                        }
                                    }}>
                                        Edit
                                </Link>
                              </>
                        }
                        <button className='btn Delete-button Button-text' onClick={this.handleDelete}> 
                            Delete
                        </button>
                    </div>
                </div> 
            )     
        } else {

            return <DashboardMain   newestWatch={this.props.newestWatch}
                                    oldestWatch={this.props.oldestWatch}
                                    setCurrentWatch={this.props.setCurrentWatch}
                                    filteredWatches={this.props.filteredWatches}
                                    filteredWatchRelated={this.props.filteredWatchRelated}
                                    sortOptionSelected={this.props.sortOptionSelected} 
                                    DashBoardSortHistory={this.props.DashBoardSortHistory}               
            />
        }
    }
}

const mapStateToProps = (state) => {
    return {
      watchRelated: state.myWatches.watchRelated  // For records that are not related to a specific watch.
    } 
}

export default connect(mapStateToProps, {deleteWatchAction})(WatchDetail)
