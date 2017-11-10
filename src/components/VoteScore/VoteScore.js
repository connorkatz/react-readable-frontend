import React, { Component } from 'react';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
import './VoteScore.css';

class VoteScore extends Component {
   render() {

      const { numVotes } = this.props
      const votesAbs = Math.abs(numVotes)

      return (
         <div className="post-vote-block">
            <div className="vote-arrows-block">
               <i className="vote-arrow"><FaCaretUp /></i>
               <i className="vote-arrow"><FaCaretDown /></i>
            </div>
            <div className="vote-score icon-counter">
               <i>
                  {numVotes > 0 ? (
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

export default VoteScore