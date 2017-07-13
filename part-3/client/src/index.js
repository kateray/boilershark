import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './containers/App'
import Header from './containers/Header'
import appStore from './reducers'

require('../css/App.scss')

let el = document.getElementById('root')

const store = createStore(appStore, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/' component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  el
)
