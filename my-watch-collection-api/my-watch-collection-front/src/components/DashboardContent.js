import { Component } from 'react'
import { connect } from 'react-redux'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion'
import logo from '../logo.jpg'


class DashboardContent extends Component {
  render() {

    let number_of_watches = 0
    if (this.props.watches) {
        number_of_watches = Object.keys(this.props.watches).length
    }
    
    return (
      <div css={css`
        background-color: khaki;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media (max-width: 800px) {
          display: none;
        }
      `}>
        <img src={logo} alt='logo' className='logo'/>
        <h2>Number of watches: {number_of_watches}</h2>
      </div>
    )
      }
}

const mapStateToProps = (state) => { 
  return {
    watches: state.myWatches.watches
  } 
}

export default connect(mapStateToProps)(DashboardContent)
