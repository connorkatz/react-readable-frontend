import React from 'react';
import Header from '../Header/Header';
import './PageContainer.css';

const PageContainer = (props) => {
   return (
      <div className="page-container">
         <Header/>
         <section className="page-content">
            {props.children}
         </section>
      </div>
   )
}

export default PageContainer;