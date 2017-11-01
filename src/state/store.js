import { 
  createStore, 
  combineReducers 
} from 'redux';

// reducers import
import { counterReducer } from './counter/reducers'

const allReducers = combineReducers({
  counter: counterReducer
})

const store = process.env.NODE_ENV === 'production' ?
  createStore(allReducers) : 
  createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  );

export default store
