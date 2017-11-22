import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { setSortBy } from '../../actions/utilActions';
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

   setSortBy = (sortBy, event) => {
      event.preventDefault();
      this.props.dispatch(setSortBy(sortBy));
   }

   render() {
      const { category } = this.props.match.params;
      const { active } = this.state;
      const { name, type, categories, sortBy } = this.props;

      let stateLabel = '';
      if (type === 'link') {
         stateLabel = category ? category : 'All Posts';
      } else {
         stateLabel = sortBy.find(sortItem => sortItem.active === true);
         stateLabel = stateLabel.name;
      }

      return (
         <div 
            className={`select-list ${active ? "active" : ""}`}
            onClick={this.toggleActive}
         >
            <div className="select-list-label">
               <strong>{name}</strong>
               <div className="select-list-state">
                  <span>{stateLabel}</span>
                  <i><FaAngleDown /></i>
               </div>
            </div>
            {type === 'link' ? (
               <ul>
                  <li><Link to='/'>All Posts</Link></li>
                  {categories.map(category =>
                     <li key={category.path}><Link to={`/${category.name}/posts`}>{category.name}</Link></li>
                  )}
               </ul>
            ) : (
               <ul>
                  {sortBy.map(sortItem =>
                     <li key={sortItem.name} onClick={(event) => this.setSortBy(sortItem.name, event)}><a href="#">{sortItem.name}</a></li>
                  )}
               </ul>
            )}
         </div>
      )
   }

}

const mapStateToProps = ({ categories, util }) => (
   {
      categories,
      sortBy: util.sortBy
   }
)

export default withRouter(connect(mapStateToProps)(SelectList));