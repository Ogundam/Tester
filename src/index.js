import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Home, Test} from "./Home"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>hello reactjs</h1>
    <h2>{5 + 5}</h2>
    // <h3>{new Date().getFullYear()}</h3> */}
    <Provider store={store}>
     <App></App>
    </Provider>
    
    {/* <Home></Home>
    <Test></Test> */}

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

