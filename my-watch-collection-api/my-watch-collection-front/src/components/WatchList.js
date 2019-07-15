import { useState } from 'react' // https://reactjs.org/docs/hooks-overview.html
import Detail from './watches/Detail'
import List from './watches/List'
import SidebarMobile from './watches/SidebarMobile'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const WatchList = ({ fetched }) => {  
//    console.log('***WatchList: ', fetched.watches)

   // used when the layout is a mobile view
   const [showWatches, setShowWatches] = useState(false)
   const [currentWatch, setCurrentWatch] = useState({}) 

   let watches

    if (fetched.watches) {
       watches = fetched.watches.map(watch => ( 
            <li key={watch.id} css={css`
                padding: 5px;
                border-bottom: 1px solid black;
                &:hover {
                    background-color: lightgreen;
                    cursor: pointer;
                }
            `} onClick={() => {
                    setCurrentWatch(watch)
                }}>
                <b css={css`
                    padding-left: 10px;
                    font-size: 18px;
                `}>{watch.watch_maker}:</b> {watch.watch_name}
            </li>
        )) 
        
    } else null

    return (
        <div className='WatchList' css={css`
            display: grid;
            grid-template-columns: 300px auto;
            grid-template-areas: 'sidebar-desktop main';
            width: 100vw;
            height: 100vh;
            
            @media (max-width: 800px) {
                grid-template-columns: 80px auto;
                grid-template-areas: 'sidebar-mobile ${showWatches ? 'sidebar-desktop' : 'main'}';
            }
        `}>
            <List watches={watches}
                  showWatches={showWatches}
            />
            <SidebarMobile showWatches={showWatches}   
                           setShowWatches={setShowWatches}
            />
            <Detail showWatches={showWatches}
                    currentWatch={currentWatch}
            />
        </div>
    )
   
}

export default WatchList
