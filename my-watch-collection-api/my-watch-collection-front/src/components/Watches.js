import { useState } from 'react' // https://reactjs.org/docs/hooks-overview.html
import WatchDetail from './WatchDetail'
import WatchList from './WatchList'
import SidebarMobile from './SidebarMobile'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const Watches = ({ watches }) => { 

    // Load the underscore library
    const _ = require('underscore')
    
    let oldestWatch
    let newestWatch

    if(watches && watches.length > 0) {
        // Load the watch objects into an array
        let arrWatches = [];
        for (let i = 0; i < watches.length; i++) {
            arrWatches.push(watches[i]);
        }
        // Sort the watches using the underscore function _.sortBy
        const sortedWatches = _.sortBy( arrWatches, 'date_bought' )
        oldestWatch = sortedWatches[0]
        newestWatch = sortedWatches[sortedWatches.length-1] 
    }    

   // used when the layout is a mobile view
   const [showWatches, setShowWatches] = useState(false)

   const [currentWatch, setCurrentWatch] = useState(null) 

    return (
        <div className='container List-detail-container'>
            <div className='Watches' css={css`
                display: grid;
                grid-template-areas: 'sidebar-desktop main';
                grid-template-columns: 305px auto;
                height: 100vh;
                width: 100vw;
                
                @media (max-width: 750px) {
                    grid-template-areas: 'sidebar-mobile ${showWatches ? 'sidebar-desktop' : 'main'}';
                    grid-template-columns: 80px auto;
                }
            `}>
                <WatchList showWatches={showWatches}
                           setShowWatches={setShowWatches}
                           watches={watches}
                           setCurrentWatch={setCurrentWatch} 
                /> 
                <SidebarMobile showWatches={showWatches}   
                               setShowWatches={setShowWatches}
                />
                <WatchDetail showWatches={showWatches}
                             currentWatch={currentWatch}
                             setCurrentWatch={setCurrentWatch}
                             newestWatch={newestWatch}
                             oldestWatch={oldestWatch}
                />

            </div>
        </div>
    )
}

export default Watches
