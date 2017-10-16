import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as ReadableAPI from '../../util/ReadableAPI';
import PageContainer from '../PageContainer/PageContainer';
import PostCategory from '../PostCategory/PostCategory';
import PostDetail from '../PostDetail/PostDetail';
import PostEdit from '../PostEdit/PostEdit';
import './App.css';


const App = (props) => {
   return (
      <div className="app">
         <PageContainer>
            <Switch>
               <Route exact path="/" component={PostCategory} />
               <Route path="/:category/id" component={PostCategory} />
               <Route path="/posts/:id" component={PostDetail} />
               <Route path="/post-edit" component={PostEdit} />
               <Redirect to="/" />
            </Switch>
         </PageContainer>
      </div>
   );
}

export default App;
