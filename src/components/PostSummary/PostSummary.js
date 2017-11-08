import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Date from '../Date/Date';
import VoteScore from '../VoteScore/VoteScore';
import CommentScore from '../CommentScore/CommentScore'
import FaCommentO from 'react-icons/lib/fa/comment-o'
import './PostSummary.css'

class PostSummary extends Component {
   render() {
      const { id, title, author, timestamp, voteScore, comments } = this.props.post;

      return (
         <Link className="post-link" to={`/posts/${id}`}>
            <article className="post-summary">
               <div className="layout-block-1">
                  <h2>{title}</h2>
                  <address>By: {author}</address>
                  <Date timestamp={timestamp} />
               </div>
               <div className="layout-block-2">
                  <VoteScore votes={voteScore} />
                  <CommentScore comments="20" />
               </div>
            </article>
         </Link>
      )
   }
}

export default PostSummary;