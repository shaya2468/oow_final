import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
let firstRender = true;

const jsx = (

    <AppRouter />

);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};




if (firstRender){
  firstRender = false;
  renderApp();
  if (true) {
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    history.push('/');
  }
  
}