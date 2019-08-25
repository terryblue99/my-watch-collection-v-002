import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const NavBar = (props) => {
  return (
    <div className='Navbar'>

      <Navbar css={css`
                background-color: black;
                padding-bottom: 10px; 
                padding-top: 10px;
      `}>
        <Navbar.Brand>
         
          <span css={css`
              color: goldenrod;
              display: inline-block;
              font-size: 20px;
              padding-left: 20px;
            `}>My Watch Collection
          </span> 
          
          <span css={css`
              color: white;
              display: inline-block;
              font-size: 20px;
              padding-left: 20px;
            `}>Logged in as: <p css={css`
              color: khaki;
              display: inline-block;
              font-size: 20px;
              padding-left: 5px;
            `}>{props.user.user.email}</p>
          </span> 
          
          if ({props.user.logged_in}) {
            <NavLink to="/logout">
              <span css={css`
                  color: white;
                  display: inline-block;
                  font-size: 20px;
                  padding-left: 20px;
                `}>Log Out
              </span> 
            </NavLink>
          }
            
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => { 
  return {
    user: state.currentUser
  } 
}

export default connect(mapStateToProps)(NavBar)
