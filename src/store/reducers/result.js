import * as TYPES from '../TYPES'

const initalState = {
  results: [],
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case TYPES.STORE_RESULT:
      const newState4 = Object.assign({}, state)
      newState4.results = state.results.concat({
        id: new Date().getMilliseconds(),
        value: action.result,
      })
      return newState4
    case TYPES.DELETE_RESULT:
      const newState5 = Object.assign({}, state)
      newState5.results = state.results.filter(res => res.id !== action.resId)
      return newState5
  }
  return state
}

export default reducer
