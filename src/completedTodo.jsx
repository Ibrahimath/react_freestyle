import React, { useContext } from 'react'
import { TodosContext } from './TodoApp'

function CompletedTodo() {
    const todos = useContext(TodosContext)
    const completedTodo = todos.filter(todo => todo.done === true)
    
  return (
    <>
    <div>completed Todo</div>
    <ul>
        {completedTodo.map(todo => <li key = {todo.id}> {todo.text} </li>)}
    </ul>
    </>
  )
}

export default CompletedTodo