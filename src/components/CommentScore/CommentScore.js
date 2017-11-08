import React, { Component } from 'react';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import './CommentScore.css';

class CommentScore extends Component {
   render() {

      const { comments } = this.props

      return (
         <div className="comment-score-block">
            <i><FaCommentO /></i>
            <span>{comments}</span>
         </div>
      )
   }
}

export default CommentScore