import React, { useContext } from "react";
import { useState } from "react";
import { TodosDispatchContext } from "./TodoApp";

export default function AddTodo() {
  const [text, setText] = useState("");
const dispatch = useContext(TodosDispatchContext)
let nextId = 4;
  
function handleAddTodo(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text,
    });
  }
  return (
    <div className="add-todo-container">
      <input type="text" name="newTodo" id="newTodo" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
            handleAddTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
