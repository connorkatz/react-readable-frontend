import React from 'react';
import NavBar from '../NavBar/NavBar';
import './PageContainer.css';

const PageContainer = (props) => {
   return (
      <div className="page-container">
         <NavBar/>
         {props.children}
      </div>
   )
}

export default PageContainer;