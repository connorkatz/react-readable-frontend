import React, { Component } from 'react'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down'

class VoteScore extends Component {
   render() {

      const { votes } = this.props
      const votesAbs = Math.abs(votes)

      return (
         <div className="vote-score icon-counter">
            <i>
               {votes > 0 ? (
                  <FaThumbsOUp />
               ) : (
                  <FaThumbsODown />
               )}
            </i>
            <span>{votesAbs}</span>
         </div>
      )
   }
}

export default VoteScore