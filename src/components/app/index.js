import React, { Component } from 'react'
import CheckList from 'containers/checkList'
import { Provider } from 'react-redux'
import store from 'redux/store'
import './style.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CheckList />
      </Provider>
    )
  }
}

export default App
