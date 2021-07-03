import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


let rerenderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderTree();


reportWebVitals();
