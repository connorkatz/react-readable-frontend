import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
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
               <Switch>
                  <Route path="/:category/posts" render={() => <SelectList type="link" name="Category" />} />
                  <Route path="/" render={() => (<SelectList type="link" name="Category" />)} />
               </Switch>
               <Switch>
                  <Route path="/:category/posts/:sortBy" render={() => <SelectList name="Sort by" />} />
                  <Route path="/" render={() => <SelectList name="Sort by" />} />
               </Switch>
            </nav>
         </header>
   )
}

export default Header;