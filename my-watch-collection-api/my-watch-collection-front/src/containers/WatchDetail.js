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

        if (this.props.currentWatch.watch_maker === this.props.watchRelated) {
            isWatchRelated = true
            recordType = this.props.watchRelated
        } else {
                isWatchRelated = false
                recordType = 'watch'
               }

        if (window.confirm(`Do you realy want to delete this ${recordType}?`)) {

            this.props.deleteWatchAction(this.props.currentWatch.id) 
            
            if (!isWatchRelated) {
                alert('The watch has been deleted!')
            } else alert(`The ${this.props.watchRelated} has been deleted!`)

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
        const {currentWatch} = this.props
        const watchRelated = this.props.watchRelated

        const style = {
            image: {
                border: '1px solid'
            }
        }
   
        if (currentWatch && !this.props.isSearchSuccessful && !this.props.isSearchFailed) {

            const {
                id,
                watch_name,
                watch_maker,
                movement,
                complications,
                band,
                model_number,
                case_measurement,
                water_resistance,
                date_bought,
                cost,
                notes
            } = currentWatch

            return ( 
                
                <div className='Watch-detail' css={css`
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
                        <div>    
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
                            <h1 className='Dark-red-color'><b css={css`
                                font-family: 'Ubuntu, sans-serif';
                                font-size: 1.55rem;
                                text-transform: uppercase;

                                @media (max-width: 750px) {
                                    font-size: 1.25rem;
                                }

                                @media (min-width: 1500px) {
                                    font-size: 1.75rem;
                                }
                            `}>{watch_maker}</b></h1> 
                            <h2 css={css`
                                color: midnightblue;
                                font-size: 1.25rem;
                                margin-bottom: 3px;
                                max-width: 500px;

                                @media (max-width: 750px) {
                                    font-size: 1.1rem;
                                }

                                @media (min-width: 1500px) {
                                    font-size: 1.50rem;
                                    margin-bottom: 15px;
                                }
                            `}>{watch_name}</h2>

                            <hr className='WatchDetail'/><br />
                            
                            {movement && !watch_maker.includes(watchRelated)
                                ?   <>  <p className='Detail-css'>Movement</p>
                                        <h3 className='WatchDetail'>{movement}</h3>
                                    </>
                                :   null }
                            {movement && watch_maker.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{movement}</h3>
                                    </>
                                :   null }
                            {complications && !watch_maker.includes(watchRelated)
                                ?   <>  <p className='Detail-css'>Complications</p>
                                        <h3 className='WatchDetail'>{complications}</h3>
                                    </>
                                :   null }
                            {complications && watch_maker.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{complications}</h3>
                                    </>
                                :   null }
                            {band && !watch_maker.includes(watchRelated)
                                ?   <>  <p className='Detail-css'>Band</p>
                                        <h3 className='WatchDetail'>{band}</h3>
                                    </>
                                :   null }
                            {band && watch_maker.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{band}</h3>
                                    </>
                                :   null }
                            {model_number && !watch_maker.includes(watchRelated)
                                ?   <>  <p className='Detail-css'>Model Number</p>
                                        <h3 className='WatchDetail'>{model_number}</h3>
                                    </>
                                :   null }
                            {model_number && watch_maker.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{model_number}</h3>
                                    </>
                                :   null }
                            {case_measurement && !watch_maker.includes(watchRelated)
                                ?   <>  <p className='Detail-css'>Case Measurement</p>
                                        <h3 className='WatchDetail'>{case_measurement}</h3>
                                    </>
                                :   null }
                            {case_measurement && watch_maker.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{case_measurement}</h3>
                                    </>
                                :   null }
                            {water_resistance && !watch_maker.includes(watchRelated)
                                ?   <>  <p className='Detail-css'>Water Resistance</p>
                                        <h3 className='WatchDetail'>{water_resistance}</h3>
                                    </>
                                :   null }
                            {water_resistance && watch_maker.includes(watchRelated) 
                                ?   <>  <h3 className='WatchDetail'>{water_resistance}</h3>
                                    </>
                                :   null }
                            {date_bought && !watch_maker.includes(watchRelated) 
                            ?   <>
                                    {cost > 0
                                        ? <> <p className='Detail-css'>Date Bought</p>
                                             <h3 className='WatchDetail'>{date_bought}</h3>
                                          </>
                                        : <> <p className='Detail-css'>Date RCVD</p>
                                             <h3 className='WatchDetail'>{date_bought}</h3>
                                          </>
                                    }    
                                </>
                            : null }
                            {cost > 0
                            ?    <>
                                    <p className='Detail-css'>Cost</p>
                                    <h3 className='WatchDetail'>${parseFloat(cost).toFixed(2)}</h3>
                                </>
                            : null }
                            {notes 
                            ?    <>
                                    <p className='Detail-css'>Notes</p>
                                    <h3 className='WatchDetail'>{notes}</h3>
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
                        {!watch_maker.includes(watchRelated)
                            ? <>
                                <Link className='btn Edit-button Button-text' to={{
                                        pathname: `/watches/${id}/edit_watch`,
                                        state: {
                                            watch: currentWatch
                                        }
                                    }}>
                                        Edit
                                </Link>
                              </>
                            : <>
                                <Link className='btn Edit-button Button-text' to={{
                                        pathname: `/watches/${id}/edit_watch_related`,
                                        state: {
                                            watch: currentWatch,
                                            isEditWatchRelated: true
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
      watchRelated: state.myWatches.watchRelated,  // For records that are not related to a specific watch.
      isSearchFailed: state.myWatches.isSearchFailed
    } 
}

export default connect(mapStateToProps, {deleteWatchAction})(WatchDetail)
