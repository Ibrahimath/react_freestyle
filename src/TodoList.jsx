import React, { useContext } from "react";
import { TodosContext, TodosDispatchContext } from "./TodoApp";


export default function TodoList() {
    const dispatch = useContext(TodosDispatchContext)
    const todos = useContext(TodosContext)
    function handleTodoChange(updatedTodo) {
        dispatch({
          type: "change",
          todo: updatedTodo,
        });
      }
      function handleTodoDelete(todoId) {
        dispatch({
          type: "remove",
          id: todoId,
        });
      }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChange={handleTodoChange} onDelete={handleTodoDelete} />
        </li>
      ))}
    </ul>
  );
}

function Todo({ todo, onChange, onDelete }) {
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-done`}
        id={`${todo.id}-done`}
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </>
  );
}
