// import React, { useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import Homepage from '../components/Homepage'
import WatchesFetch from './WatchesFetch'
import AddWatch from './AddWatch'

const App = () => {

  // const [screen, setScreen] = useState('addWatch')

    return (
      <div className='App'>
        <Router>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/watches' component={WatchesFetch} />
            <Route exact path='/watches/new' component={AddWatch} />
        </Router> 
        {/* {screen === 'homepage' && <Homepage setScreen={setScreen}/>}
        {screen === 'listWatches' && <WatchesFetch setScreen={setScreen} />}
        {screen === 'addWatch' && <AddWatch setScreen={setScreen} />} */}
      </div>
    )
}

export default App
