import React, { Component } from 'react';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import './CommentScore.css';

class CommentScore extends Component {
   render() {

      const { numComments } = this.props
      let commentCount = (comments) => {
         comments.filter(comment => comment.deleted != true)
         return commentCount.length
      }
         

      return (
         <div className="comment-score-block">
            <i><FaCommentO /></i>
            <span>{numComments}</span>
         </div>
      )
   }
}

export default CommentScore