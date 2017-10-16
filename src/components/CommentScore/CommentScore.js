import React, { Component } from 'react'
import FaCommentO from 'react-icons/lib/fa/comment-o'

class CommentScore extends Component {
   render() {

      const { comments } = this.props

      return (
         <div className="comment-score icon-counter">
            <i><FaCommentO /></i>
            <span>{comments}</span>
         </div>
      )
   }
}

export default CommentScore