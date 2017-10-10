import React, { Component } from 'react';

class PostSummary extends Component {
   render() {

      const {title, author, date, votes} = this.props;

      return (
         <article>
            <h2>{title}</h2>
            <address>{author}</address>
            <time>{date}</time>
            <span>{votes}</span>
         </article>
      )
   }
}

export default PostSummary;