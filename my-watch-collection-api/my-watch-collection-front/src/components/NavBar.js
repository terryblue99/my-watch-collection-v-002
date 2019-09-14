import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion
import logoText from '../images/my-watch-collection-text.png'

const NavBar = (props) => {
  return (
    <div className='Navbar'>

      <Navbar css={css`
        background-color: #454140;
        margin: 0 auto;
        padding-top: 5px;
      `}>
        <Navbar.Brand>
         
          <img src={logoText} alt='logoText' className='LogoText'/>
       
          <span css={css`
              color: cornsilk;
              display: inline-block;
              font-size: 1rem;
              padding-left: 140px;
              margin-bottom: 3px;

              @media (min-width: 1500px) {
                font-size: 1.25rem
              }
              @media (max-width: 750px) {
                padding-top: 15px;
              }
            `}>Logged in as:
            <p css={css`
              color: khaki;
              display: inline-block;
              font-size: 1rem;
              padding-left: 5px;

              @media (min-width: 1500px) {
                font-size: 1.25rem
              }
              @media (max-width: 750px) {
                padding-top: 10px;
              }
            `}>{props.user.user.email}
            </p>
          </span> 
          
          {props.user.logged_in} {
            <NavLink to='/logout'>
              <span css={css`
                color: cornsilk;
                font-size: 1rem;
                position: absolute;
                right: 10px;
                top: 10px;

                &:hover {
                  color: orange;
                  cursor: pointer;
                }
                @media (min-width: 1500px) {
                  font-size: 1.25rem
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
