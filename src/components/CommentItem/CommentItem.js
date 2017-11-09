import React from 'react';
import VoteScore from '../VoteScore/VoteScore';
import './CommentItem.css';

const CommentItem = (props) => {
   const {body, author, voteScore} = props.comment;
   return (
      <div className="comment-item">
         <div className="layout-block-1">
            <p>{body}</p>
            <address>{author}</address>
         </div>
         <div className="layout-block-2">
            <VoteScore votes={voteScore}/>
         </div>
      </div>
   )
}

export default CommentItem;