import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import sortBy from 'sort-by'
import PostSummary from '../PostSummary/PostSummary';
import './PostCategory.css';

class PostCategory extends Component {
   render() {
      const { category } = this.props.match.params;
      const { posts, comments, sortByItem } = this.props;
      let sortById = `-${sortByItem.id}`;
      let postList = posts.sort(sortBy(sortById));

      if (category) {
         postList = posts.filter(post => post.deleted != true && post.category === category)
      } else {
         postList = posts.filter(post => post.deleted != true)
      }

      return (
         <section className="post-list">
            <header>
               <h1>{category ? category : 'All Posts'}</h1>
            </header>
            {postList.map(post => 
               post.deleted !== true ? 
                  <PostSummary key={post.id} post={post} comments={comments[post.id]}/>
                  : null
               )
            }
            <div className="buttons-block">
               <Link to="/post-edit" className="button-link">Add Post</Link>
            </div>
         </section>
      )
   }
}

const mapStateToProps = ({ posts, comments, util }) => (
   {
      posts,
      comments,
      sortByItem: util.sortBy.find(sortItem =>
         sortItem.active === true
      )
   }
)

export default connect(mapStateToProps)(PostCategory);