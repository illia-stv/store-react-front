import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/layout';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { Provider } from 'react-redux'
import store from './data/store'
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
