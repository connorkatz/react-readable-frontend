import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
         <div className={`select-list ${active ? "active" : ""}`}>
            <label onClick={this.toggleActive}>{name}</label>
            <ul>
               <li><Link to='/'>All</Link></li>
               <li></li>
               <li>Cat 2</li>
               <li>Cat 3</li>
            </ul>
         </div>
      )
   }

}

export default SelectList;