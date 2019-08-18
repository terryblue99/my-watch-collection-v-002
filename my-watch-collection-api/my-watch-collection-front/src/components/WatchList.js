import { Link } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

const WatchList = ({ watches, showWatches, setCurrentWatch, setShowWatches } ) => { 
      
    return (
        <div css={css`
            grid-area: sidebar-desktop;
            border-right: 1px solid black;
            height: 100%;
            text-align: left;
            
            @media (max-width: 800px) {
                display: ${showWatches ? 'block' : 'none'}
            }
            
            display: grid;
            grid-template-rows: auto 100px;
            
        `}>
            <ul className='List' css={css`
                list-style-type: none;
            `}>
                {watches ?
                    watches.map(watch => {
                        return <li key={watch.id} css={css`
                                border-bottom: 1px solid black;
                                padding: 5px;
                                &:hover {
                                    background-color: #61BD4F;
                                    color: white;
                                    cursor: pointer;
                                }
                            `} onClick={() => { 
                                setCurrentWatch(watch)
                                setShowWatches(false) // on mobiles will allow toggling of watch list
                            }}>
                            <b css={css`
                                font-size: 18px;
                                padding-left: 10px;
                            `}>{watch.watch_maker}:</b> {watch.watch_name}
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
                    <button className='add-button' >Add a watch</button>
                </Link> 
            </div>
        </div> 
    ) 
}

export default WatchList
