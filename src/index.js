import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './components/App/App';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();
