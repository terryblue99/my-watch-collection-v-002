import { useState } from 'react' // https://reactjs.org/docs/hooks-overview.html

// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const WatchesList = ({ fetched }) => {  
//    console.log('***WatchesList: ', fetched.watches)

   // used when the layout is a mobile view
   const [showWatches, setShowWatches] = useState(false) 

   let watchList

    if (fetched.watches) {
       watchList = fetched.watches.map(watch => ( 
            <li key={watch.id} css={css`
                padding: 5px;
                border-bottom: 1px solid black;
                &:hover {
                    background-color: lightgreen;
                    cursor: pointer;
                }
            `}>
                <b css={css`
                    padding-left: 10px;
                `}>{watch.watch_maker}:</b> {watch.watch_name}
            </li>
        )) 
        
    } else null

    return (
        <div className='WatchList' css={css`
            display: grid;
            grid-template-columns: 300px 100%;
            grid-template-areas: 'sidebar-desktop main';
            width: 100vw;
            height: 100vh;
            @media (max-width: 800px) {
                grid-template-columns: 80px 100%;
                grid-template-areas: 'sidebar-mobile ${showWatches ? 'sidebar-desktop' : 'main'}';
            }
        `}>
            <ul className='List' css={css`
                grid-area: sidebar-desktop;
                border-right: 1px solid black;
                height: 100%;
                text-align: left;
                list-style-type: none;

                @media (max-width: 800px) {
                    display: ${showWatches ? 'block' : 'none'}
                }
            `}>
                {watchList}
            </ul>

            <ul css={css`
                grid-area: sidebar-mobile;
                border-right: 1px solid black;
                height: 100%;
                text-align: left;
                list-style-type: none;

                @media (min-width: 800px) {
                    display: none;
                }
            `}>
              <div css={css`
                    display: block;
                    padding-top: 20px;
                    padding-left: 20px;
                `} onClick={() => {
                    setShowWatches(!showWatches) // toggles on and off in mobile view
                }}>
                    <span css={css`
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 5px;
                        position: relative;
                        background: gray;
                        border-radius: 3px;
                        z-index: 1;
                    `}></span>     
                    <span css={css`
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 5px;
                        position: relative;
                        background: gray;
                        border-radius: 3px;
                        z-index: 1;
                    `}></span>     
                    <span css={css`
                        display: block;
                        width: 33px;
                        height: 4px;
                        margin-bottom: 5px;
                        position: relative;
                        background: gray;
                        border-radius: 3px;
                        z-index: 1;
                    `}></span>     
                </div>
            </ul>

            <div className="Detail" css={css`
                display: ${showWatches ? 'none' : 'block'};
                grid-area: main;   
            `}>

            </div>
        </div>
    )
   
}

export default WatchesList
