import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostSummary from '../PostSummary/PostSummary';
import './PostCategory.css';

class PostCategory extends Component {
   render() {
      const {category} = this.props.match.params
      return (
         <section className="post-list">
            <header>
               <h1>{category ? category : 'All Posts'}</h1>
               <Link to="/add-edit" className="secondary-link">Add Post</Link>
            </header>
            {category ? (
               this.props.posts
                  .filter(post => post.category === category)
                  .map(post => (
                     <PostSummary key={post.id} title={post.title} author={post.author} date={post.timestamp} votes={post.voteScore} comments="5" />
                  ))
            ) : (
               this.props.posts
                  .map(post => (
                     <PostSummary key={post.id} title={post.title} author={post.author} date={post.timestamp} votes={post.voteScore} comments="5" />
                  ))
            )}
            <Link to="/post-edit">LinkyLink</Link>
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