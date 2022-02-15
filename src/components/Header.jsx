import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
   return (
    <div>
      <NavLink to='/'>Main</NavLink> | {' '}
      <NavLink to='/users'>Users</NavLink> | {' '}
      <NavLink to='/finished'>Finished</NavLink>
    </div>
  )
}
export default Header;