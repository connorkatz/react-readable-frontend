import React from 'react';
import SelectList from './SelectList';

const NavBar = (props) => {
   return (
      <nav className='nav-bar'>
         <SelectList name="Category"/>
         <SelectList name="Sort by"/>
      </nav>
   )
}

export default NavBar;