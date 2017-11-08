import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ReadableAPI from '../../util/ReadableAPI';
import './PostEdit.css';

class PostEdit extends Component {

   state = {
      checkForPostContent: true,
      title: '',
      author: '',
      category: '',
      body: ''
   }

   componentDidMount() {
      ReadableAPI.getAllCategories().then(categories => {
         this.setState(categories);
      });
   }

   componentDidUpdate() {
      const { checkForPostContent } = this.state;
      const { id } = this.props.match.params;
      if (checkForPostContent) {
         const post = this.props.posts.find(post => post.id === id);
         if (post) {
            const {title, author, category, body} = post;
            this.setState(
               { 
                  title,
                  author,
                  category,
                  body,
                  checkForPostContent: false
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

   render() {
      const { title, author, category, body } = this.state;
      const {categories, posts} = this.props;
      const post = posts.find(post => post.id === this.props.match.params);

      return (
         <section className="post-add-edit">
            <form onSubmit={this.submitPost}>
               <div className="form-item">
                  <label>Title</label>
                  <input type="text" name="title" value={title} onChange={this.handleFormChange}/>
               </div>
               <div className="form-item">
                  <label>Author</label>
                  <input type="text" name="author" value={author} onChange={this.handleFormChange}/>
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
                  <button className="submit button-link" disabled={!title || !author || !category || !body}>Save my random musings</button>
                  <button onClick={this.props.history.goBack} className="cancel secondary-link">Nevermind, I got the thinkers block</button>
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