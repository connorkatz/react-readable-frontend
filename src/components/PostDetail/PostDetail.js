import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import * as ReadableAPI from '../../util/ReadableAPI';
import VoteScore from '../VoteScore/VoteScore';
import CommentScore from '../CommentScore/CommentScore';
import Date from '../Date/Date';
import CommentBlock from '../CommentBlock/CommentBlock';
import { deletePost } from '../../actions/postsActions';
import './PostDetail.css';

class PostDetail extends Component {

   deletePost = () => {
      const {id} = this.props.match.params;
      ReadableAPI.deletePost(id)
         .then(this.props.dispatch(deletePost(id)))
   }


   render() {
      const { id } = this.props.match.params;
      const post = this.props.posts.find(post => post.id === id);
      const comments = this.props.comments[id];
      let numComments = 0;
      if (comments) {
         numComments = comments.filter(comment => comment.deleted != true)
         numComments = numComments.length
      }
      if (!post) {
         return (
            <article className="post-detail">
               <header>
                  <h1>No Post Found</h1>
               </header>
               <div className="buttons-block">
                  <Link to="/" className="button-link">All Posts</Link>
               </div>
            </article>
         )
      } else {
         const { title, author, timestamp, voteScore, body } = post;
         return (
            <article className="post-detail">
               <header>
                  <h1>{title}</h1>
               </header>
               <div className="post-details-block">
                  <div className="layout-block-1">
                     <address>By: {author}</address>
                     <Date timestamp={timestamp} />
                  </div>
                  <div className="layout-block-2">
                     <VoteScore numVotes={voteScore} />
                     <CommentScore numComments={numComments} />
                  </div>
               </div>
               <div className="post-content">
                  <p>{body}</p>
               </div>
               <div className="buttons-block">
                  <Link to={`/post-edit/${id}`} className="button-link">Edit Post</Link>
                  <button onClick={this.deletePost} className="button-link">Delete Post</button>
               </div>
               <CommentBlock comments={comments} parentId={id} />
            </article>
         )
      }
   }
}

const mapStateToProps = ({ posts, comments }) => (
   {
      posts,
      comments
   }
)

export default connect(mapStateToProps)(PostDetail);