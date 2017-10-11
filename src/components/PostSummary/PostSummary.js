import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './PostSummary.css'

class PostSummary extends Component {

   render() {
      const { title, author, date, votes } = this.props;

      const postID = 123;

      // set .votes class based on value
      let votesSign = 'zero';
      if (votes > 0) {
         votesSign = 'positive'
      }
      else if (votes < 0) {
         votesSign = 'negative'
      }

      return (
         <Link className="post-link" to={`/post/${postID}`}>
            <article className="post-summary">
               <div className="layout-block-1">
                  <span className={`votes ${votesSign}`}>{votes}</span>
               </div>
               <div className="layout-block-2">
                  <h2>{title}</h2>
                  <address>{author}</address>
                  <time>{date}</time>
               </div>
            </article>
         </Link>
      )
   }

}

export default PostSummary;