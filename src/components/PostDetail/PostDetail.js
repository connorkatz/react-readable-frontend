import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBlock from '../CommentBlock/CommentBlock';
import './PostDetail.css';

class PostDetail extends Component {
   render() {
      const { id } = this.props.match.params

      return (
         <article className="post-detail">
            <header>
               <h1>Stuff</h1>
               <Link to="/add-edit" className="secondary-link">Edit Post</Link>
               <button className="secondary-link last">Delete Post</button>
            </header>

            <div className="post-details-block">
               <div className="layout-block-1">
                  <address>Tom Smith</address>
                  <time>1/27/17</time>
               </div>
               <div className="layout-block-2">
                  <div className="votes">
                     <span>+10</span>
                  </div>
                  <div className="vote-option down">
                  </div>
               </div>
            </div>

            {id}

            <div className="post-content">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend velit ligula. Donec tempor ut nibh pretium gravida. Nullam eleifend tincidunt sapien, posuere scelerisque felis ornare hendrerit. Nunc volutpat, sem sed tempus egestas, mauris erat volutpat augue, tincidunt blandit sem lacus ut eros. In hac habitasse platea dictumst. Etiam sit amet odio vehicula, aliquet nulla a, efficitur ante. Sed pretium magna eu dignissim condimentum.</p>

               <p>Quisque ullamcorper velit nec sem hendrerit ultricies. Quisque et mi orci. Morbi at mollis eros. Morbi convallis velit eu commodo egestas. Pellentesque suscipit dolor vel dui feugiat finibus. Curabitur malesuada, lorem eu lacinia semper, mi nisi commodo nulla, sit amet rhoncus orci nisl id neque. Vestibulum vitae felis erat. Donec ac finibus sem. Aenean porta sem quis condimentum tempus. Duis eget est nibh. Fusce ligula sem, congue non mollis nec, faucibus vitae purus. Donec metus tellus, ultrices in dolor in, ullamcorper molestie nulla. Sed est lorem, auctor vel sollicitudin sed, aliquam id arcu. Nullam blandit bibendum nibh, eget sodales arcu cursus vel.</p>

               <p>Donec sodales urna enim, eget commodo felis tincidunt sit amet. Proin ac euismod turpis. Vivamus maximus tellus vitae ipsum fermentum, a convallis lectus viverra. Nunc condimentum, arcu pharetra eleifend sollicitudin, quam sapien suscipit dui, eu facilisis turpis sapien id ante. Praesent porta, dolor non vehicula dignissim, metus mauris luctus lacus, non pellentesque quam ex at ipsum. Curabitur tortor dui, dapibus quis nulla non, pretium ultricies nulla. Aenean erat lectus, accumsan non dui at, varius sollicitudin nulla. In vitae odio quis est facilisis sodales. Morbi id elit quis velit dignissim consectetur et ac elit. Aliquam eleifend vulputate neque at rhoncus. Morbi dapibus lobortis posuere. Sed suscipit vel urna tempor porttitor. Suspendisse potenti.</p>
            </div>
            <CommentBlock />
         </article>
      )
   }
}

export default PostDetail;