import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SelectList extends Component {
   render() {
      return (
         <div className="select-list">
            <span>{this.props.name}</span>
            <ul>
               <li><Link to='/'>All</Link></li>
               <li>Cat 1</li>
               <li>Cat 2</li>
               <li>Cat 3</li>
            </ul>
         </div>
      )
   }
}

export default SelectList;