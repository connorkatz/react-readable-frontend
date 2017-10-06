import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllCategoryView from './AllCategoryView';
import CategoryView from './CategoryView';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';
import NoRouteMatch from './NoRouteMatch';
import '../App.css';

class App extends Component {
   render() {
      return (
         <div className="app">
            <Switch>
               <Route exact path="/" component={AllCategoryView} />
               <Route path="/category" component={CategoryView} />
               <Route path="/post" component={PostDetail} />
               <Route path="/post-edit" component={PostEdit} />
               <Route component={NoRouteMatch} />
            </Switch>
         </div>
      );
   }
}

export default App;
