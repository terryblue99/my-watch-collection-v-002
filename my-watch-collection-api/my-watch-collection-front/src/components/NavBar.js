import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const NavBar = () => {
  return (
   
    <div className='Navbar'>

        <Navbar css={css`
                  background-color: black;
                  padding-top: 10px;
                  padding-bottom: 10px; 
        `}>
          <Navbar.Brand>
            <NavLink to="/">
              <span css={css`
                  display: inline-block;
                  font-size: 20px;
                  padding-left: 20px;
                  color: yellow;
                `}>My Watch Collection
              </span> 
            </NavLink>
          </Navbar.Brand>
            
        </Navbar>

    </div>
  )
}

export default NavBar
