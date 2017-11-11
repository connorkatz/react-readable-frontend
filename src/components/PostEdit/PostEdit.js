import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ReadableAPI from '../../util/ReadableAPI';
import AlertNotice from '../AlertNotice/AlertNotice';
import { addNewPost, updatePost } from '../../actions/postsActions';
import uuid from 'uuid/v1';
import './PostEdit.css';

class PostEdit extends Component {

   state = {
      isNewPost: true,
      postSubmitted: false,
      title: '',
      author: '',
      category: '',
      body: '',
      bodyClone: ''
   }

   componentDidMount() {
      this.setState(this.state);
   }

   componentDidUpdate() {
      const { isNewPost } = this.state;
      const { id } = this.props.match.params;
      if (isNewPost) {
         const post = this.props.posts.find(post => post.id === id);
         if (post) {
            const { title, author, category, body } = post;
            this.setState(
               {
                  isNewPost: false,
                  title,
                  author,
                  category,
                  body
               }
            )
         }
      }
   }

   handleFormChange = event => {
      this.setState(
         {
            [event.target.name]: event.target.value
         }
      )
   }

   updatePost = event => {
      event.preventDefault();
      const { isNewPost, title, author, category, body } = this.state;
      const { id } = this.props.match.params
      if (isNewPost) {
         const postData = {
            id: uuid(),
            timestamp: Date.now(),
            title,
            author,
            category,
            body
         }
         ReadableAPI.addNewPost(postData)
            .then(postData => {
               this.props.dispatch(addNewPost(postData));
               this.setState({ postSubmitted: true })
            });
      } else {
         const postData = {
            title,
            body
         }
         ReadableAPI.updatePost(postData, id)
            .then(postData => {
               this.props.dispatch(updatePost(postData));
               this.setState({ postSubmitted: true })
            });
      }
   }

   render() {
      const { isNewPost, postSubmitted, title, author, category, body } = this.state;
      const { categories, posts } = this.props;
      const { id } = this.props.match.params;

      return (
         <section className="post-add-edit">
            <AlertNotice type="success" active={postSubmitted} text={isNewPost ? "Post Added" : "Post Updated"} />
            <form onSubmit={this.handlePostSubmit}>
               <div className="form-item">
                  <label>Title</label>
                  <input type="text" name="title" value={title} onChange={this.handleFormChange} />
               </div>
               <div className="form-item">
                  <label>Author</label>
                  <input type="text" name="author" value={author} onChange={this.handleFormChange} />
               </div>
               <div className="form-item">
                  <label>Category</label>
                  <span className="select-container">
                     <select value={category} name="category" onChange={this.handleFormChange}>
                        <option value="">Select Category</option>
                        {categories.map(category =>
                           <option key={category.path} value={category.path}>{category.name}</option>
                        )}
                     </select>
                     <i className="select-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                           <polygon points="14.586 3.801 8.003 10.384 1.413 3.807 0 5.224 8.003 13.211 16 5.215"></polygon>
                        </svg>
                     </i>
                  </span>
               </div>
               <div className="form-item">
                  <label>Post Content</label>
                  <textarea name="body" value={body} onChange={this.handleFormChange} placeholder="Write seemingly banal things that will anger someone..."></textarea>
               </div>
               <div className="buttons-block">
                  <button onClick={this.updatePost} className="submit button-link" disabled={!title || !author || !category || !body}>Save my random musings</button>
                  <Link to={`/posts/${id}`} className="cancel button-link secondary-link">Nevermind, I got the thinkers block</Link>
               </div>
            </form>
         </section>
      )
   }
}

const mapStateToProps = ({ posts, categories }) => (
   {
      posts,
      categories
   }
)

export default connect(mapStateToProps)(PostEdit);