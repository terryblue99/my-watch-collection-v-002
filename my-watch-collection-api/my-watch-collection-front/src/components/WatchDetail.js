import { Component } from 'react'
import { connect } from 'react-redux'
import '../containers/App.css'
import EditWatch from '../containers/EditWatch'
import { deleteWatchAction } from '../actions/watches'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

class WatchDetail extends Component { 

    state = {
        editClicked: false
    }

    handleEdit = (currentWatch) => {
        this.setState({
            editClicked: true
        })
    }

    render () {
        const showWatches = this.props.showWatches
        const currentWatch = this.props.currentWatch

        if (this.state.editClicked) {
            return <EditWatch currentWatch={currentWatch} />
        }
        
        if (currentWatch.watch_maker) {
            return ( 
                <div className="WatchDetail" css={css`
                        display: ${showWatches ? 'none' : 'block'};
                        grid-area: main;  
                        margin-bottom: 5px;
                `}>
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
                        <button className='Watchedit-button' onClick={ 
                            (e) => this.handleEdit(e, currentWatch)
                        }> Edit this watch
                        </button>
                        <button className='Watchdelete-button' onClick={
                            () => {if(window.confirm('Do you realy want to delete this watch?'))
                                    // this.props. needed for fetch in deleteWatchAction to work 
                                    {this.props.deleteWatchAction(currentWatch.id, currentWatch.watch_name)}
                                  }
                            }> Delete this watch
                        </button>
                    </div>
                </div>
            )     

        } else return null 
    }
}

const detailCss = {fontSize: '15px', color: 'green'}

export default connect(null, {deleteWatchAction})(WatchDetail)
