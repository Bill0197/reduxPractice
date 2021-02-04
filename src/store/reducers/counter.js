import * as TYPES from '../TYPES'

const initalState = {
  counter: 0,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPES.ADDTEN:
      const newState = Object.assign({}, state)
      newState.counter = state.counter + action.value
      return newState
    case TYPES.SUBTEN:
      const newState1 = Object.assign({}, state)
      newState1.counter = state.counter - action.value
      return newState1
    case TYPES.ADD:
      const newState2 = Object.assign({}, state)

      newState2.counter = state.counter + 1
      return newState2
    case TYPES.SUB:
      const newState3 = Object.assign({}, state)
      newState3.counter = state.counter - 1
      return newState3
  }
  return state
}

export default reducer
