import React from 'react'
import Todo from './Todo'

export default function Todolist({todos,status, setTodos, filteredTodos}) {
   

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo, key={}) => 
                    <Todo key={todo.id}  todos={todos} todo={todo}  setTodos={setTodos} text={todo.text}/>)
                   
                }
                  
            </ul>   
        </div>
        
    )
}
