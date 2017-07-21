import State from './state'

export const initialStateReducer =
  (state=State, action) => {
    switch(action.type){
      case "INITIAL_STATE":
        const newState = Object.assign({}, action.payload)
        return newState;
        break;
    }
    return state;
  }
