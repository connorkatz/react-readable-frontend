import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducers/indexReducer';
import { Provider } from 'react-redux';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
   , document.getElementById('root'));
registerServiceWorker();
