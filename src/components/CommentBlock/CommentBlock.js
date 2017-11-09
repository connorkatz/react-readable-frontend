import React from 'react';
import CommentAdd from '../CommentAdd/CommentAdd';
import CommentItem from '../CommentItem/CommentItem';
import './CommentBlock.css';

const CommentBlock = (props) => {
   const { comments, parentId } = props;
   let postComments = []
   if (comments) {
      postComments = comments.map(comment => 
         <CommentItem key={comment.id} comment={comment} />
      )
   }
   return (
      <section className="comment-block">
         <header>
            <h3>Comments</h3>
         </header>
         <CommentAdd parentId={parentId}/>
         {postComments}
      </section>
   )
}

export default CommentBlock;