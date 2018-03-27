import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import getAllTodos from './reducers/selectors';
import {fetchTodos} from './util/todo_api_util';

import {receiveTodo, receiveTodos} from './actions/todo_actions';
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
  window.fetchTodos = fetchTodos;

  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  window.getAllTodos = getAllTodos;
});
