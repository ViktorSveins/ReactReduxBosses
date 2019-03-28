import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import '../styles/site.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import '../styles/site.css';
import reducers from './reducers';


ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }><Router><App /></Router></Provider>, document.getElementById('app'));
