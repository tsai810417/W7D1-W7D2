import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import root from './components/root';
//remove when production
import {receiveTodo, receiveTodos} from './actions/todo_actions';
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1>, root);
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
});
