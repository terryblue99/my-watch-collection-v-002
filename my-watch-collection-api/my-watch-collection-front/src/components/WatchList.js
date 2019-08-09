import { useState } from 'react' // https://reactjs.org/docs/hooks-overview.html
import NavBar from '../components/NavBar'
import WatchDetail from './WatchDetail'
import List from './List'
import SidebarMobile from './SidebarMobile'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const WatchList = ({ watches, user_id, logged_in }) => { 
   // used when the layout is a mobile view
   const [showWatches, setShowWatches] = useState(false)

   const [currentWatch, setCurrentWatch] = useState({}) 
   const listUrl = window.location.href

   let watchList

    if (watches) {
       watchList = watches.map(watch => ( 
            <li className='watchName' key={watch.id} css={css`
                border-bottom: 1px solid black;
                padding: 5px;
                &:hover {
                    background-color: #61BD4F;
                    color: white;
                    cursor: pointer;
                }
            `} onClick={(event) => {
                    setCurrentWatch(watch)
                    setShowWatches(false) // on mobiles will display watch detail when name is clicked
                }}>
                <b css={css`
                    font-size: 18px;
                    padding-left: 10px;
                `}>{watch.watch_maker}:</b> {watch.watch_name}
            </li>
        )) 
        
    } else return null

    return (
        <div>
            <NavBar />
            <div className='WatchList' css={css`
                display: grid;
                grid-template-areas: 'sidebar-desktop main';
                grid-template-columns: 300px auto;
                height: 100vh;
                width: 100vw;
                
                @media (max-width: 800px) {
                    grid-template-areas: 'sidebar-mobile ${showWatches ? 'sidebar-desktop' : 'main'}';
                    grid-template-columns: 80px auto;
                }
            `}>
                <List watches={watchList}
                    showWatches={showWatches}
                    user_id={user_id}
                    logged_in={logged_in}
                />
                <SidebarMobile showWatches={showWatches}   
                            setShowWatches={setShowWatches}
                />
                <WatchDetail showWatches={showWatches}
                             currentWatch={currentWatch}
                             user_id={user_id}
                             logged_in={logged_in}
                             listUrl={listUrl}
                />
            </div>
        </div>
    )
   
}

export default WatchList
