import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as ReadableAPI from '../../util/ReadableAPI';
import { deletePost } from '../../actions/postsActions';
import Date from '../Date/Date';
import VoteScore from '../VoteScore/VoteScore';
import CommentScore from '../CommentScore/CommentScore';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import './PostSummary.css';

class PostSummary extends Component {

   deletePost = (event) => {
      event.preventDefault();
      const { id } = this.props.post;
      ReadableAPI.deletePost(id)
         .then(() => {
            this.props.dispatch(deletePost(id));
         })
   }

   render() {
      const { id, title, author, timestamp, voteScore } = this.props.post;
      const { comments } = this.props;
      let numComments = 0;
      if (comments) {
         numComments = comments.filter(comment => comment.deleted != true);
         numComments = numComments.length;
      }
      return (
         <Link className="post-link" to={`/posts/${id}`}>
            <article className="post-summary">
               <div className="layout-block-1">
                  <h2>{title}</h2>
                  <address>By: {author}</address>
                  <Date timestamp={timestamp} />
                  <div className="post-actions">
                     <Link to={`/post-edit/${id}`}>Edit Post</Link>
                     <span> | </span>
                     <a onClick={(event) => this.deletePost(event)}>Delete Post</a>
                  </div>
               </div>
               <div className="layout-block-2">
                  <VoteScore numVotes={voteScore} postId={id} />
                  <CommentScore numComments={numComments} />
               </div>
            </article>
         </Link>
      )
   }
}

export default connect()(PostSummary);