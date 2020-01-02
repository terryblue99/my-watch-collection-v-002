import { Link } from 'react-router-dom'
import { hashHistory } from 'react-router' // Used to change URL without a re-render
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

const WatchList = ({ watches, showWatches, setCurrentWatch, setShowWatches } ) => { 
      
    return (
        <div className='watchList'>
            <div css={css`
                background-color: khaki;
                border-left: 1px solid black;
                border-right: 1px solid black;
                display: grid;
                grid-area: sidebar-desktop;
                grid-template-rows: auto 100px;
                max-height: 80vh;
                overflow-y: auto; // scrollling
                padding-top: 3px;
                text-align: left;
                
                @media (max-width: 750px) {
                    display: ${showWatches ? 'block' : 'none'}
                }
            `}>
                <ul className='List' css={css`
                    list-style: none;
                `}>
                    {watches ? 
                        watches.map(watch => {
                            return <li key={watch.id} css={css`
                                    border-bottom: 1px solid black;
                                    padding-left: 10px;
                                    transition: color 800ms;
                                    
                                    &:hover {
                                        background-color: #61BD4F;
                                        color: white;
                                        cursor: pointer;
                                    }
                                `} onClick={() => { 
                                    hashHistory.push(`/watches/${watch.id}/watch_detail`) // set the url for the watch
                                    setCurrentWatch(watch)
                                    setShowWatches(false) // on mobiles will allow toggling of watch list
                                }}>
                                <strong css={css`
                                    color: sienna;
                                    font-family: 'Ubuntu, sans-serif';
                                    font-size: 1rem;
                                    padding-left: -10px;

                                    @media (min-width: 1500px) {
                                        font-size: 1.25rem;
                                    }
                                `}>{watch.watch_maker}:</strong> {watch.watch_name} 
                            </li>
                        })
                    : null}
                </ul>  
            </div> 
            <div css={css`
                border-top: 1px solid;
                padding-top 10px;
                text-align: center;

                @media (max-width: 750px) {
                    display: ${showWatches ? 'block' : 'none'}
                }
            `}> 
                <Link to={{pathname: '/watches/add_watch'}}>
                    <button className='btn Add-button Button-text' >Add Watch</button>
                </Link> 
            </div>
        </div>
    ) 
}

export default WatchList
