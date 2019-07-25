// import React, { useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'
import Homepage from '../components/Homepage'
import FetchWatches from './GetWatches'
import AddWatch from './AddWatch'

const App = () => {

    return (
      <div className='App'>
        <Router>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/watches' component={FetchWatches} />
            <Route exact path='/watches/new' component={AddWatch} />
        </Router>         
      </div>
    )
}

export default App
