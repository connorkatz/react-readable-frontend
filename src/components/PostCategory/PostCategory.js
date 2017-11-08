import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostSummary from '../PostSummary/PostSummary';
import './PostCategory.css';

class PostCategory extends Component {
   render() {
      const { category } = this.props.match.params;
      const { posts } = this.props;
      let postList = [];

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
            {postList.map(post => <PostSummary key={post.id} post={post} />)}
            <div className="buttons-block">
               <Link to="/post-edit" className="button-link">Add Post</Link>
            </div>
         </section>
      )
   }
}

const mapStateToProps = ({ posts }) => (
   {
      posts
   }
)

export default connect(mapStateToProps)(PostCategory);