import 'semantic-ui-css/semantic.min.css';
import React from 'react';

import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigureStore } from './store/configureStore';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
