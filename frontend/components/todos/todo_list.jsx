import React from 'react';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo}) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
      <TodoForm
        todos={todos} receiveTodo={receiveTodo}/>

    </div>
  );
};

export default TodoList;
