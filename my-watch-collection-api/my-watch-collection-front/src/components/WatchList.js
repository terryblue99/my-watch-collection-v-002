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
                border: 1px solid black;
                display: grid;
                grid-area: sidebar-desktop;
                grid-template-rows: auto 100px;
                height: 80vh;
                width: 322px;
                overflow-y: auto; // scrollling
                padding-top: 3px;
                text-align: left;

                @media (min-width: 1500px) {
                    width: 370px;
                }
                
                @media (max-width: 750px) {
                    display: ${showWatches ? 'block' : 'none'};
                    width: 400px;
                }
            `}>
                <ul className='List' css={css`
                    list-style: none;
                `}>
                    {watches ? 
                        watches.map(watch => {
                            return <li key={watch.id} css={css`
                                    border-bottom: 1px solid black;
                                    font-size: 1rem;
                                    padding-left: 10px;
                                    transition: color 800ms;
                                    
                                    &:hover {
                                        background-color: khaki;
                                        color: blue;
                                        cursor: pointer;
                                    }

                                    @media (min-width: 1500px) {
                                        font-size: 1.25rem;
                                    }
                                    
                                `} onClick={() => { 
                                    hashHistory.push(`/watches/${watch.id}/watch_detail`) // set the url for the watch
                                    setCurrentWatch(watch)
                                    setShowWatches(false) // on mobiles will allow toggling of watch list
                                }}>
                                <strong css={css`
                                    color: darkred;
                                    font-family: 'Ubuntu, sans-serif';
                                    font-size: .80rem;
                                    padding-left: -10px;

                                    @media (min-width: 1500px) {
                                        font-size: 1rem;
                                    }
                                `}>{watch.watch_maker}:</strong> {watch.watch_name} 
                            </li>
                        })
                    : null}
                </ul>  
            </div> 
            <div css={css`
                padding-top 5px;

                @media (max-width: 750px) {
                    display: ${showWatches ? 'block' : 'none'};
                    max-width: 400px;
                }
            `}>   
                <Link to={{pathname: '/watches/add_watch_related',
                           isAddWatchRelated: true
                          }}>
                    <button className='btn Add-watch-related-button Button-text' >Add Watch-Related</button>
                </Link>
                <Link to={{pathname: '/watches/add_watch'}}>
                    <button className='btn Add-watch-button Button-text' >Add Watch</button>
                </Link>
                <Link to={{pathname: '/watch_related_info'}}>
                    <button className='btn Watch-related-info-button Button-text' >Watch-Related Info</button>
                </Link>
            </div>
        </div>
    ) 
}

export default WatchList
