import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Redux from './Redux';
import { Provider } from 'react-redux';
import { store } from './func-based-redux-toolkit/store';
import ClassBasedApp from './ClassBasedApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Redux/>

    {/* <ClassBasedApp/> */}

    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
