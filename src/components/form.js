import React from 'react'

export default function Form({todos, inputText, setInputText, setTodos, status, setStatus}) {
    const inputTexHandler = (e) => {
        setInputText(e.target.value);
    }
    const toDoSubmit =  (e) => {
        e.preventDefault();
        if(inputText!==""){
           setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}])
        }
       
        setInputText("")
    }
    const workStatus = (e) =>{
      setStatus(e.target.value);

    }
    return (
        <form >
        <input value={inputText} onChange={inputTexHandler} type="text" className="todo-input" />
        <button onClick={toDoSubmit} className="todo-button"  type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={workStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}
