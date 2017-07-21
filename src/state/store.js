import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { initialState } from './initial-state/actions'
// reducers import
import { initialStateReducer } from './initial-state/reducers'

const allReducers = combineReducers({
  initialState: initialStateReducer
})


const middleware = applyMiddleware(thunk)
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(initialState())

export default store
