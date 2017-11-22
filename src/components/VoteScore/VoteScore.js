import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ReadableAPI from '../../util/ReadableAPI';
import {votePost} from '../../actions/postsActions';
import {voteComment} from '../../actions/commentsActions';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import './VoteScore.css';

class VoteScore extends Component {

   voteForPost(vote, event) {
      event.preventDefault();
      const { postId } = this.props;
      ReadableAPI.voteForPost(vote, postId)
         .then(this.props.dispatch(votePost(vote, postId)));
   }

   voteForComment(vote) {
      const {postId, commentId} = this.props;
      ReadableAPI.voteForComment(vote, commentId)
         .then(this.props.dispatch(voteComment(postId, commentId, vote)));
   }

   render() {
      const { numVotes, postId, commentId } = this.props;
      const votesAbs = Math.abs(numVotes);

      return (
         <div className="post-vote-block">
            <div className="vote-arrows-block">
               <i className="vote-arrow"
                  onClick={
                     commentId ? 
                        () => this.voteForComment('upVote')
                     : 
                        (event) => { this.voteForPost('upVote', event) }  
                     }
               >
                  <FaCaretUp />
               </i>
               <i className="vote-arrow" 
                  onClick={
                     commentId ?
                        () => this.voteForComment('downVote')
                     :
                        (event) => { this.voteForPost('downVote', event) }
                     }
               >
                  <FaCaretDown />
               </i>
            </div>
            <div className="vote-score icon-counter">
               <i>
                  {numVotes >= 0 ? (
                     <FaThumbsOUp />
                  ) : (
                        <FaThumbsODown />
                     )}
               </i>
               <span>{votesAbs}</span>
            </div>
         </div>
      )
   }
}

export default connect()(VoteScore);