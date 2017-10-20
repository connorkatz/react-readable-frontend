import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostSummary from '../PostSummary/PostSummary';
import './PostCategory.css';

class PostCategory extends Component {

   render() {
      const { categoryName } = this.props;

      return (
         <section className="post-list">
            <header>
               <h1>{categoryName}</h1>
               <Link to="/add-edit" className="secondary-link">Add Post</Link>
            </header>
            <PostSummary title="Article Title" author="Mike Smith" date="1/12/17" votes="12" comments="5" />
            <PostSummary title="Article Title2" author="Willy Wonka" date="3/15/17" votes="10" comments="10" />
            <PostSummary title="Article Title3" author="Steve McQueen" date="3/15/17" votes="5" comments="20" />
         </section>
      )
   }

}

PostCategory.defaultProps = {
   categoryName: 'All Posts'
}

export default PostCategory;