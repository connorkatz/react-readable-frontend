import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ReadableAPI from '../util/ReadableAPI';
import PageContainer from './PageContainer';
import AllPosts from './AllPosts';
import Category from './Category';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';
import NoRoute from './NoRoute';
import '../App.css';


class App extends Component {
   render() {
      return (
         <div className="app">
            <PageContainer>
               <Switch>
                  <Route exact path="/" component={AllPosts} />
                  <Route path="/category/:id" component={Category} />
                  <Route path="/post" component={PostDetail} />
                  <Route path="/post-edit" component={PostEdit} />
                  <Route component={NoRoute} />
               </Switch>
            </PageContainer>
         </div>
      );
   }
}

export default App;
