import React from 'react'

import { Provider } from 'react-redux'

import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {ConfigureStore} from './store/configureStore';
import 'semantic-ui-css/semantic.min.css'

import App from './App'

import registerServiceWorker from './registerServiceWorker'


const store = ConfigureStore()
console.log(`%c REDUX STORE`, 'color: purple', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
