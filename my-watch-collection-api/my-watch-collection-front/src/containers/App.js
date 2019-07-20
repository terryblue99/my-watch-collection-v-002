// import React, { useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import Homepage from '../components/Homepage'
import WatchesFetch from './WatchesFetch'
import NewWatch from './NewWatch'

const App = () => {

  // const [screen, setScreen] = useState('NewWatch')

    return (
      <div className='App'>
        <Router>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/watches' component={WatchesFetch} />
            <Route exact path='/watches/new' component={NewWatch} />
        </Router> 
        {/* {screen === 'homepage' && <Homepage setScreen={setScreen}/>}
        {screen === 'listWatches' && <WatchesFetch setScreen={setScreen} />}
        {screen === 'NewWatch' && <NewWatch setScreen={setScreen} />} */}
      </div>
    )
}

export default App
