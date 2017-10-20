import React from 'react';
import CommentAdd from '../CommentAdd/CommentAdd';
import CommentItem from '../CommentItem/CommentItem';
import './CommentBlock.css';

const CommentBlock = (props) => {
   return (
      <section className="comment-block">
         <header>
            <h3>Comments</h3>
            <button className="secondary-link">Add Comment</button>
         </header>
         <CommentAdd/>
         <CommentItem/>
         <CommentItem />
         <CommentItem />
         <CommentItem />
      </section>
   )
}

export default CommentBlock;