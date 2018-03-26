import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {getAllTodos} from './reducers/selectors';
// import root from './components/root';
//remove when production
import {receiveTodo, receiveTodos} from './actions/todo_actions';
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root dataPos={[1,2]} store={store}/>, root);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  // window.getAllTodos = getAllTodos();
});
