import { useState } from 'react' // https://reactjs.org/docs/hooks-overview.html
import { connect } from 'react-redux'
import WatchDetail from './WatchDetail'
import List from './List'
import SidebarMobile from './SidebarMobile'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const WatchList = ({ watches }) => { 
   // used when the layout is a mobile view
   const [showWatches, setShowWatches] = useState(false)

   const [currentWatch, setCurrentWatch] = useState(null) 

    return (
 
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
            <List setShowWatches={setShowWatches}
                    showWatches={showWatches}
                    watches={watches}
                    setCurrentWatch={setCurrentWatch}   
            /> 
            <SidebarMobile showWatches={showWatches}   
                            setShowWatches={setShowWatches}
            />
            <WatchDetail showWatches={showWatches}
                            currentWatch={currentWatch}
                            setCurrentWatch={setCurrentWatch}
            />

        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
      watches: state.myWatches.watches,
      currentUser: state.currentUser
    } 
}

export default connect(mapStateToProps)(WatchList)
