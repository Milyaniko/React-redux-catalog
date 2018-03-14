import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './app/containers/App';
import store from './app/store';
import './app/styles/css/App.css'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));