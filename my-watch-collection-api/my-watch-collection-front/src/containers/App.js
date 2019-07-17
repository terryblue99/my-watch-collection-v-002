import React, { useState } from 'react'
import './App.css'
import Homepage from '../components/Homepage'
import AddWatch from '../containers/AddWatch'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from '../components/NavBar'
import WatchesFetch from '../containers/WatchesFetch'

const App = () => {

  const [screen, setScreen] = useState('addWatch')

    return (
      <div className='App'>
        {screen === 'homepage' && <Homepage setScreen={setScreen}/>}
        {screen === 'addWatch' && <AddWatch />}
        {/* <Router>
            <NavBar />
            <Route exact path='/' component={Homepage} />
            <Route path='/watches' component={WatchesFetch} />
        </Router>  */}
      </div>
    )
}

export default App
