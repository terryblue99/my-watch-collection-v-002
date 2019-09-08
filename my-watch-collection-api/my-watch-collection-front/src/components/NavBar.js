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
        margin: 0 auto;
        padding-bottom: 5px; 
        padding-top: 5px;
      `}>
        <Navbar.Brand>
         
          <span css={css`
              color: khaki;
              display: inline-block;
              font-family: Signpainter;
              font-size: 1.6rem;
              padding-left: 15px;
            `}>My Watch Collection
          </span> 
          
          <span css={css`
              color: cornsilk;
              display: inline-block;
              font-size: 1rem;
              padding-left: 115px;

              @media (max-width: 750px) {
                padding-top: 15px;
              }
            `}>Logged in as:<p css={css`
              color: khaki;
              display: inline-block;
              font-size: 1rem;
              padding-left: 5px;

              @media (max-width: 750px) {
                padding-top: 10px;
              }
            `}>{props.user.user.email}</p>
          </span> 
          
          {props.user.logged_in} {
            <NavLink to='/logout'>
              <span css={css`
                color: cornsilk;
                font-size: 1rem;
                position: absolute;
                right: 20px;
                top: 10px;

                &:hover {
                  color: orange;
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
