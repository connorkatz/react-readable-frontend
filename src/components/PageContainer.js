import React from 'react';
import NavBar from './NavBar';

const PageContainer = (props) => {
   return (
      <div className="page-container">
         <NavBar/>
         {props.children}
      </div>
   )
}

export default PageContainer;