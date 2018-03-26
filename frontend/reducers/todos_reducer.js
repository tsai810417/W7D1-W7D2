import{ RECEIVE_TODOS } from '../actions/todo_actions';
import{ RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const newObjHash = {};
      action.todos.forEach( (todo) => {
        newObjHash[todo.id] = todo;
      });
      return merge({}, newObjHash);
    case 'RECEIVE_TODO':
      const newObj = {[action.todo.id]: action.todo};
      const newState = merge({}, state, newObj);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
