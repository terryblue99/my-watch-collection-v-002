import { Link } from 'react-router-dom'
import { hashHistory } from 'react-router' // Used to change URL without a re-render
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

const WatchList = ({ watches, showWatches, setCurrentWatch, setShowWatches } ) => { 
      
    return (
        <div css={css`
            background-color: khaki;
            border-left: 1px solid black;
            border-right: 1px solid black;
            display: grid;
            grid-area: sidebar-desktop;
            grid-template-rows: auto 100px;
            height: 100%;
            padding-top: 5px;
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
                                
                                &:hover {
                                    background-color: #61BD4F;
                                    color: white;
                                    cursor: pointer;
                                }
                            `} onClick={() => { 
                                hashHistory.push(`/watches/${watch.id}/watch_detail`)
                                setCurrentWatch(watch)
                                setShowWatches(false) // on mobiles will allow toggling of watch list
                            }}>
                            <strong css={css`
                                color: sienna;
                                font-family: 'Ubuntu, sans-serif';
                                font-size: 18px;
                                position: relative;  
                                padding-left: -10px;
                            `}>{watch.watch_maker}:</strong> {watch.watch_name} 
                        </li>
                    })
                : null}
            </ul>
            <div css={css`
                border-top: 1px solid;
                padding-top 10px;
                text-align: center;
            `}> 
                <Link to={{pathname: '/watches/add_watch'}}>
                    <button className='Add-button Button-text' >Add a watch</button>
                </Link> 
            </div>
        </div> 
    ) 
}

export default WatchList
