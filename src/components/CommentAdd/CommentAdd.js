import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ReadableAPI from '../../util/ReadableAPI';
import { addComment } from '../../actions/commentsActions';
import uuid from 'uuid/v1';
import './CommentAdd.css';

class CommentAdd extends Component {
   state = {
      body: '',
      author: ''
   }

   handleFormChange = event => {
      this.setState(
         {
            [event.target.name]: event.target.value
         }
      )
   }

   addComment = event => {
      event.preventDefault();
      const {author, body} = this.state;
      const {parentId} = this.props;
      const commentData = {
         parentId,
         id: uuid(),
         timestamp: Date.now(),
         author,
         body,
         voteScore: 1
      }
      ReadableAPI.addComment(commentData)
         .then((comment) => this.props.dispatch(addComment(comment)))
         this.setState(
            {
               author: '',
               body: ''
            }
         )
   }

   removeComment = () => {
      this.setState(
         {
            comment: ''
         }
      )
   }

   submitComment = event => {
      event.preventDefault();
   }

   render() {
      const { body, author } = this.state;
      return (
         <section className="comment-add">
            <form onSubmit={this.submitComment}>
               <input type="text" name="author" value={author} onChange={this.handleFormChange} placeholder="Your Name" />
               <textarea value={body} name="body" placeholder="Trolling begins here..." onChange={this.handleFormChange}></textarea>
               {body || author ?
                  <div className="buttons-block">
                     <button type="submit" className="submit button-link" onClick={this.addComment} disabled={!body || !author}>Anger the Interwebz</button>
                     <button className="cancel secondary-link" onClick={this.removeComment}>Nevermind I wussed out</button>
                  </div>
                  : null
               }
            </form>
         </section>
      )
   }
}

const mapStateToProps = (state, ownProps) => (
   {
      parentId: ownProps.parentId
   }
)

export default connect(mapStateToProps)(CommentAdd);