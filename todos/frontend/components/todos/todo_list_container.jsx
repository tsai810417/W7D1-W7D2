import React from 'react';
import {connect} from 'react-redux';
import TodoList from './todo_list';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions';
import getAllTodos from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
