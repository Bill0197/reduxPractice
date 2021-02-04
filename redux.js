const redux = require('redux')

// create store
const createStore = redux.createStore

// inital state
const initalState = {
  counter: 0,
}

// reducer
const rootReducer = (state = initalState, action) => {
  if (action.type === 'ADD_ONE') {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }
  if (action.type === 'ADD_TEN') {
    return {
      ...state,
      counter: state.counter + 10,
    }
  }
  return state
}

// store
const store = createStore(rootReducer)

console.log(store.getState())

// subscribe
store.subscribe(() => {
  console.log('Subscription ===> ', store.getState())
})

// dispatching action

store.dispatch({
  type: 'ADD_ONE',
})
store.dispatch({
  type: 'ADD_TEN',
  value: 10,
})

console.log(store.getState())
