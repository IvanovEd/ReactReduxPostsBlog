import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import promise from 'redux-promise';


import reducers from './reducers';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));


//npm install --save react-router@v3.0.0
//npm install --save axios redux-promise
//npm install --save redux-form@4.1.3
