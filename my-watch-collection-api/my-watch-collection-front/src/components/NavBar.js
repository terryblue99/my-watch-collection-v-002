import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black',
                  paddingTop: '5px',
                  paddingBottom: '6px', 
                  marginBottom: '12px' }}>
      <NavLink 
        style={{ marginLeft: '10px',marginRight: '10px', color: '#FAEA08' }} 
        to="/"
      >
        My Watch Collection 
      </NavLink>
    </div>
  )
}

export default NavBar