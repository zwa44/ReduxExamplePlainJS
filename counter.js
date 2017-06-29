// REDUCER
function counterReducer(state={ count: 0 }, action) {
  let nextState = {
    count: state.count
  }
  console.log(action.type, 'was passed to the REDUCER by the store');
  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
    case 'RESET':
      nextState.count = 0
      return nextState
    default:
      console.log('Default');
      return state
  }
}


//STORE
const store = Redux.createStore(counterReducer)
console.log(store);
function render() {
  console.log('STATE: changed to ', store.getState().count);
  console.log('SUBSCRIBER UPDATED: updating render');

  document.getElementById('counter').innerHTML = store.getState().count.toString();
}

store.subscribe(render)

// ACTIONS
document.getElementById('add')
  .addEventListener('click', () => {
    console.log('DISPATCH: tell STORE to call the reducer with an ACTION');

    store.dispatch({ type: 'ADD' })
  })

document.getElementById('minus')
  .addEventListener('click', () => {
    console.log('DISPATCH: tell STORE to call the reducer with an ACTION');

    store.dispatch({ type: 'MINUS' })
  })

document.getElementById('reset')
  .addEventListener('click', () => {
    console.log('DISPATCH: tell STORE to call the reducer with an ACTION');

    store.dispatch({ type: 'RESET' })
  })
