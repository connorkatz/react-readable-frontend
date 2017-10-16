import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import './SelectList.css';

class SelectList extends Component {

   state = {
      active: false,
   }

   toggleActive = () => {
      this.setState(state => ({
         active: !state.active
      }))
   }

   render() {
      const { active } = this.state;
      const { name } = this.props;

      return (
         <div 
            className={`select-list ${active ? "active" : ""}`}
            onClick={this.toggleActive}
         >
            <div class="select-list-label">
               <strong>{name}</strong>
               <div className="select-list-state">
                  <span>All Posts</span>
                  <i><FaAngleDown /></i>
               </div>
            </div>          
            <ul>
               <li><Link to='/'>All Posts</Link></li>
               <li><Link to='/'>Cat 1</Link></li>
               <li><Link to='/'>Cat 2</Link></li>
               <li><Link to='/'>Cat 3</Link></li>
            </ul>
         </div>
      )
   }

}

export default SelectList;