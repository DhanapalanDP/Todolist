import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import Todolist from './components/todolist';


function Apple() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    localTodos()
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    
  }, [todos,status])

  //functions
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed === true
        ))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=>todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
    }
  } 
  //save local

  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos))
  }
  const localTodos = () => {
    if(localStorage.getItem('todos'===null)){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      const todolocal = JSON.parse(localStorage.getItem('todos',JSON.stringify(todos)));
      setTodos(todolocal);
       
    }
  }
  return (
    <div className="App">
        <header>
          <h1>Dp's Todo List</h1>
        </header>
        <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}    status={status} setStatus={setStatus}/>
        <Todolist status={status} todos={todos} filteredTodos={filteredTodos}  setTodos={setTodos}/>
    </div>
  );
}

export default Apple;
