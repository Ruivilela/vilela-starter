import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '@state/store.js';

import MainRouter from './router-components/main-router/index'; 

const App = () => {
  return(
    <div>
      <MainRouter /> 
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
