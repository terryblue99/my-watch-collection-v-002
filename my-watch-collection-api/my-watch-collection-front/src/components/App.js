import React, { Component } from 'react'
// import './App.css'
// import '../semantic/dist/semantic.min.css'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar" css={css`
          background-color: yellow;
          height: 40px;
        `}>
          Navbar
        </div>
        <div className="watches">
          {this.props.children}
        </div>
        
      </div>
    )
  }
}

export default App
