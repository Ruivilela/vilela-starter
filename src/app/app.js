import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './../state/store.js'; 

const App = () => {
  return(
    <div>
      Hello world!
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
