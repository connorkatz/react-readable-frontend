import React, { Component } from 'react';
import PostSummary from '../PostSummary/PostSummary';

class AllPosts extends Component {

   render() {
      return (
         <section>
            <PostSummary title="Article Title" author="Mike Smith" date="1/12/17" votes="12" />
            <PostSummary title="Article Title2" author="Willy Wonka" date="3/15/17" votes="10" />
            <PostSummary title="Article Title3" author="Steve McQueen" date="3/15/17" votes="5"/>
         </section>
      )
   }

}

export default AllPosts;