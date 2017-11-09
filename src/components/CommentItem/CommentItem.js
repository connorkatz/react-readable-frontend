import React, { Component } from 'react';
import VoteScore from '../VoteScore/VoteScore';
import './CommentItem.css';

class CommentItem extends Component {
   state = {
      editMode: false
   }

   toggleEditMode = () => {
      this.setState(
         {
            editMode: true,
         }
      )
   }

   render() {
      const { body, author, voteScore } = this.props.comment;
      const { editMode } = this.state;
      return (
         <div className="comment-item">
            {editMode ? (
               <div className="comment-edit">
                  
               </div>
            ) : (
               <div className="comment-content">
                  <div className="layout-block-1">
                     <p>{body}</p>
                     <address>{author}</address>
                     <div className="comment-actions">
                        <span onClick={this.toggleEditMode}>Edit</span>
                        <i>&nbsp; | &nbsp;</i>
                        <span>Delete</span>
                     </div>
                  </div>
                  <div className="layout-block-2">
                     <VoteScore votes={voteScore} />
                  </div>
               </div>
            )}
         </div>
      )
   }
}

export default CommentItem;