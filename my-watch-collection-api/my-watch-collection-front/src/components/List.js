import { Link } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

const List = ({ watches, showWatches, setCurrentWatch, setShowWatches } ) => { 
        
    return (
        <div>
            <ul className='List' css={css`
                border-right: 1px solid black;
                {/* display: grid;
                grid-area: sidebar-desktop;
                grid-template-rows: auto 95px; */}
                height: 85%;
                list-style-type: none;
                text-align: left;
                
                @media (max-width: 800px) {
                    display: ${showWatches ? 'block' : 'none'}
                }

            `}>
                {watches ?
                    watches.map(watch => {
                        return <li key={watch.id} css={css`
                                border-bottom: 1px solid black;
                                padding: 20px;
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

export default List
