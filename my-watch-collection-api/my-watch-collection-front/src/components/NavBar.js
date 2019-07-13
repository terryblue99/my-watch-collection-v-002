import { NavLink } from 'react-router-dom'
// The following comment is required for @emotion to work
/** @jsx jsx */
import { css, jsx } from '@emotion/core' // https://github.com/emotion-js/emotion

const NavBar = () => {
  return (
    <div className="navbar" css={css`
        background-color: Black;
        height: 50px;
        paddingTop: '10px';
        paddingBottom: '10px'; 
        marginBottom: '12px';
      `}>
      <NavLink 
        style={{ paddingTop: '20px', marginLeft: '10px',marginRight: '10px', color: '#FAEA08' }}
        to="/"
      >
        My Watch Collection 
      </NavLink>
    </div>
  )
}

export default NavBar

