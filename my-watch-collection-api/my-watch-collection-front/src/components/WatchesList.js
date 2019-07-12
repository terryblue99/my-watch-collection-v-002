// import React from 'react'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const WatchesList = ({watches}) => {
  
   console.log('***WatchesList: ', watches)

   let watchList

    if (watches.watches) {
       watchList = watches.watches.map(watch => ( 
            <li key={watch.id} css={css`
                padding: 20px;
                border-bottom: 1px solid black;
                &:hover {
                    background-color: lightgray;
                    cursor: pointer;
                }
            `}>{watch.watch_name}</li>
        )) 
        
    } else { watchList = watches.watches }

    return (
        <div className='WatchList' css={css`
            display: grid;
            grid-template-columns: 300px auto;
            width: 100vw;
            height: 100vh;
        `}>
            <ul className='List' css={css`
                border-right: 1px solid black;
                height: 100%;
                text-align: left;
                list-style-type: none;
            `}>
                {watchList}
            </ul>
        </div>
    )
   
}

export default WatchesList
