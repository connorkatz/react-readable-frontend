import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ReadableAPI from '../../util/ReadableAPI';
import VoteScore from '../VoteScore/VoteScore';
import { deleteComment, updateComment } from '../../actions/commentsActions';
import uuid from 'uuid/v1';
import './CommentItem.css';
import { Readable } from 'stream';

class CommentItem extends Component {
   state = {
      editMode: false,
      bodyClone: '',
      body: ''
   }

   componentDidMount = () => {
      const { body } = this.props.comment
      this.setState(
         {
            body
         }
      )
   }

   cloneBody = () => {
      const { body } = this.state
      this.setState(
         {
            bodyClone: body
         }
      )
   }

   cancelComment = () => {
      const {bodyClone} = this.state;
      this.setState(
         {
            body: bodyClone
         }
      )
   }

   toggleEditMode = (event) => {
      this.setState(
         {
            editMode: !this.state.editMode
         }
      )
   }

   handleFormChange = event => {
      this.setState(
         {
            [event.target.name]: event.target.value
         }
      )
   }

   updateComment = (event) => {
      const { parentId } = this.props;
      const { id } = this.props.comment;
      const { body } = this.state;
      const timestamp = uuid();
      ReadableAPI.updateComment(id, body, timestamp)
         .then(this.props.dispatch(updateComment(parentId, id, body)));
         this.toggleEditMode(event);
   }

   deleteComment = () => {
      const { parentId } = this.props;
      const { id } = this.props.comment;
      ReadableAPI.deleteComment(id)
         .then(this.props.dispatch(deleteComment(parentId, id)));
   }

   render() {
      const {parentId} = this.props;
      const { id, author, voteScore } = this.props.comment;
      const { editMode, body } = this.state;
      return (
         <div className="comment-item">
            {editMode ? (
               <div className="comment-edit">
                  <textarea value={this.state.body} name="body" onChange={this.handleFormChange} onFocus={this.cloneBody}></textarea>
                  <div className="buttons-block">
                     <button type="submit" className="button-link submit" onClick={this.updateComment}>Update my trollings</button>
                     <button id="cancel-comment" className="secondary-link" onClick={() => {this.cancelComment(); this.toggleEditMode();}}>Nevermind I am happy with my trollings</button>
                  </div>
               </div>
            ) : (
                  <div className="comment-content">
                     <div className="layout-block-1">
                        <p>{body}</p>
                        <address>{author}</address>
                        <div className="comment-item-actions">
                           <span onClick={this.toggleEditMode}>Edit</span>
                           <i>&nbsp; | &nbsp;</i>
                           <span onClick={this.deleteComment}>Delete</span>
                        </div>
                     </div>
                     <div className="layout-block-2">
                        <VoteScore numVotes={voteScore} postId={parentId} commentId={id}/>
                     </div>
                  </div>
               )}
         </div>
      )
   }
}

export default connect()(CommentItem);