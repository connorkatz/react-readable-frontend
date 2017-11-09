import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import * as ReadableAPI from '../../util/ReadableAPI';
import PageContainer from '../PageContainer/PageContainer';
import PostCategory from '../PostCategory/PostCategory';
import PostDetail from '../PostDetail/PostDetail';
import PostEdit from '../PostEdit/PostEdit';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/postsActions';
import { getAllCategories } from '../../actions/categoriesActions';
import { getPostComments } from '../../actions/commentsActions';
import './App.css';

class App extends Component {
   componentDidMount() {
      ReadableAPI.getAllPosts()
      .then(posts => {
         this.props.dispatch(getAllPosts(posts))
         const postIDs = posts.map(post => post.id)
         postIDs.forEach(postID => (
            ReadableAPI.getPostComments(postID)
               .then(postComments => this.props.dispatch(getPostComments(postID, postComments)))
         ));
      });
      ReadableAPI.getAllCategories()
         .then(categories => {
            this.props.dispatch(getAllCategories(categories));
      });
   }

   render() {
      return (
         <div className="app">
            <PageContainer>
               <Switch>
                  <Route exact path="/" component={PostCategory} />
                  <Route path="/:category/posts" component={PostCategory} />
                  <Route path="/posts/:id" component={PostDetail} />
                  <Route path="/post-edit/:id" component={PostEdit} />
                  <Route path="/post-edit" component={PostEdit} />
                  <Redirect to="/" />
               </Switch>
            </PageContainer>
         </div>
      );
   }
}

export default withRouter(connect()(App));
