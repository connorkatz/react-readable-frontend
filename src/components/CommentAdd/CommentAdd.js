import React from 'react';
import './CommentAdd.css';

const CommentAdd = (props) => {
   return (
      <section className="comment-add">
         <textarea></textarea>
         <div className="buttons-block">
            <button className="submit">Anger the Interwebz</button>
            <button className="cancel secondary-link">Nevermind I wussed out</button>
         </div>
      </section>
   )
}

export default CommentAdd;