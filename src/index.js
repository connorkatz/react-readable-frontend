import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

console.log(store);

ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
   , document.getElementById('root'));
registerServiceWorker();
