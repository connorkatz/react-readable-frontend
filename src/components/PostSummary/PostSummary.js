import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import VoteScore from '../VoteScore/VoteScore';
import CommentScore from '../CommentScore/CommentScore'
import FaCommentO from 'react-icons/lib/fa/comment-o'
import './PostSummary.css'

class PostSummary extends Component {

   render() {
      const { title, author, date, votes, comments } = this.props;

      const postID = 123;

      return (
         <Link className="post-link" to={`/posts/${postID}`}>
            <article className="post-summary">
               <div className="layout-block-1">
                  <h2>{title}</h2>
                  <address>{author}</address>
                  <time>{date}</time>
               </div>
               <div className="layout-block-2">
                  <VoteScore votes="10" />
                  <CommentScore comments="20" />
               </div>
            </article>
         </Link>
      )
   }

}

export default PostSummary;