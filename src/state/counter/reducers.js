import State from './state'

export const counterReducer =
  (state=State, action) => {
    
    let newState; 

    switch(action.type){
      case 'INCREASE_COUNTER':
        newState = Object.assign(
          {},
          state, 
          {
            value: state.value + 1
          }
        )
        return newState;
        break;
      case 'DECREASE_COUNTER':
        newState = Object.assign(
          {},
          state, 
          {
            value: state.value - 1
          }
        )
        return newState
        break; 
    }
    return state;
  }
