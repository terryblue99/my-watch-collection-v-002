import { Link } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'

const List = ({ watches, showWatches, setCurrentWatch, setShowWatches } ) => { 
        
    return (
        <div>
            <ul className='List' css={css`
                border-right: 1px solid black;
                grid-area: sidebar-desktop;
                height: 100%;
                list-style-type: none;
                text-align: left;
  
                @media (max-width: 800px) {
                    display: ${showWatches ? 'block' : 'none'}
                }

                {/* display: grid;
                grid-template-rows: auto 95px; */}
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
                            setShowWatches(false)
                        }}>{watch.watch_maker}: {watch.watch_name}</li>
                    })
                : null}
            </ul>
            <div css={css`
                border-top: 1px solid;
                padding-top 10px;
                text-align: center;
            `}> 
                <Link to={{pathname: '/watches/add_watch'}}>
                    <button>Add a watch</button>
                </Link> 
            </div>
        </div> 
    ) 
}

export default List
