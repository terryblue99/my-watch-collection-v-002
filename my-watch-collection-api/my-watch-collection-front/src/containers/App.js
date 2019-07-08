import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from '../components/NavBar'
import WatchesHome from '../components/WatchesHome'

// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar" css={css`
                background-color: LightGray;
                height: 30px;
            `}>
            <NavBar />
            <Route exact path="/" component={WatchesHome} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
