import React, {Component} from 'react';
import * as ReadableAPI from '../../util/ReadableAPI';
import './CommentAdd.css';

class CommentAdd extends Component {
   state = {
      comment: ''
   }

   handleFormChange = event => {
      const newState = this.state;
      newState[event.target.name] = event.target.value;
      this.setState(newState);
   }

   submitComment = event => {
      event.preventDefault();
   }
   
   render() {
      const {comment} = this.state;
      return (
         <section className="comment-add">
            <form onSubmit={this.submitComment}>
               <textarea value={comment} name="comment" onChange={this.handleFormChange}></textarea>
               <div className="buttons-block">
                  <button type="submit" className="submit button-link" disabled={!comment}>Anger the Interwebz</button>
                  <button className="cancel secondary-link">Nevermind I wussed out</button>
               </div>
            </form>
         </section>
      )
   }
}

export default CommentAdd;