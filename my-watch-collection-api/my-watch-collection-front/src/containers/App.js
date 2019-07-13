import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from '../components/NavBar'
import WatchesHome from '../components/WatchesHome'
import WatchesFetch from '../containers/WatchesFetch'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={WatchesHome} />
          <Route path="/watches" component={WatchesFetch} />
        </div>
      </Router>
    )
  }
}

export default App
