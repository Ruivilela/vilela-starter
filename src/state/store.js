import { 
  createStore, 
  combineReducers 
} from 'redux';

// reducers import
import { counterReducer } from './counter/reducers'

const allReducers = combineReducers({
  counter: counterReducer
})

const store = createStore(allReducers) 

export default store
