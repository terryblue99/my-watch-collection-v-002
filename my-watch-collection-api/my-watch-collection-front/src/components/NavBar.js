import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const NavBar = () => {
  return (
   
    <div className='Navbar'>

        <Navbar css={{
                  backgroundColor: 'black',
                  paddingTop: '10px',
                  paddingBottom: '10px' 
        }}>
          <Navbar.Brand>
            <NavLink to="/">
              <span css={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: 20,
                  paddingLeft: 10,
                  color: 'yellow'
                }}>My Watch Collection
              </span> 
            </NavLink>
          </Navbar.Brand>
            
        </Navbar>

    </div>
  )
}

export default NavBar
