import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import Homepage from '../components/Homepage'
import WatchesFetch from '../containers/WatchesFetch'
import AddWatch from '../containers/AddWatch'

const App = () => {

  const [screen, setScreen] = useState('homepage')

    return (
      <div className='App'>
        <Router>
            <NavBar />
            {/* <Route exact path='/' component={Homepage} />
            <Route path='/watches' component={WatchesFetch} /> */}
        </Router> 
        {screen === 'homepage' && <Homepage setScreen={setScreen}/>}
        {screen === 'listWatches' && <WatchesFetch />}
        {screen === 'addWatch' && <AddWatch />}
      </div>
    )
}

export default App
