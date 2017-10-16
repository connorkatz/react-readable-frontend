import React from 'react';
import {Link} from 'react-router-dom';
import SelectList from '../SelectList/SelectList';
import './Header.css';

const Header = (props) => {
   return (
         <header className="site-header">  
            <div className="readable-logo">
               <Link to="/">
                  <h1>Readable</h1>
                  <span>Read Stuff &amp; Troll People</span>
               </Link>
            </div>   
            <nav className='nav-bar'>
               <SelectList name="Category" />
               <SelectList name="Sort by" />
            </nav>
         </header>
   )
}

export default Header