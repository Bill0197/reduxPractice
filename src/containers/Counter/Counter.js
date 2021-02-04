import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'
import * as TYPES from '../../store/TYPES'

class Counter extends Component {
  state = {
    counter: 0,
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 }
        })
        break
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 }
        })
        break
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value }
        })
        break
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value }
        })
        break
    }
  }

  render() {
    return (
      <div>
        <div>
          <CounterOutput value={this.props.ctr} />
          <CounterControl label="Increment" clicked={this.props.add} />
          <CounterControl label="Decrement" clicked={this.props.sub} />
          <CounterControl label="Add 10" clicked={this.props.addTen} />
          <CounterControl label="Subtract 10" clicked={this.props.subTen} />
        </div>
        <button onClick={() => this.props.storeResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map(strdResult => (
            <li
              key={strdResult.id}
              onClick={() => this.props.deleteResult(strdResult.id)}
            >
              {strdResult.value}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTen: () => dispatch({ type: TYPES.ADDTEN, value: 10 }),
    subTen: () => dispatch({ type: TYPES.SUBTEN, value: 10 }),
    add: () => dispatch({ type: TYPES.ADD }),
    sub: () => dispatch({ type: TYPES.SUB }),
    storeResult: result =>
      dispatch({ type: TYPES.STORE_RESULT, result: result }),
    deleteResult: id => dispatch({ type: TYPES.DELETE_RESULT, resId: id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
