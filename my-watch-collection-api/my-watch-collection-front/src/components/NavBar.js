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
        background-color: #454140;
        padding-bottom: 10px; 
        padding-top: 10px;
      `}>
        <Navbar.Brand>
         
          <span css={css`
              color: goldenrod;
              display: inline-block;
              font-size: 20px;
              padding-left: 15px;
            `}>My Watch Collection
          </span> 
          
          <span css={css`
              color: white;
              display: inline-block;
              font-size: 20px;
              padding-left: 130px;
            `}>Logged in as:<p css={css`
              color: khaki;
              display: inline-block;
              font-size: 20px;
              padding-left: 5px;
            `}>{props.user.user.email}</p>
          </span> 
          
          {props.user.logged_in} {
            <NavLink to='/logout'>
              <span css={css`
                color: white;
                font-size: 20px;
                position: absolute;
                right: 20px;
                &:hover {
                  color: red;
                  cursor: pointer;
                }
              `}> Log Out
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
