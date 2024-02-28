import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';



export function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  function handleSubmit (event) {
    const id = uuidv4();
    console.log(id)
    console.log("handle submit")
    console.log(event.target.elements.newTodoInput.value)
    const newTodoText = event.target.elements.newTodoInput.value
    event.preventDefault();
     const timeStamp = getTimeStamp();

     if (newTodoText !== "") {
      const newTodo = {
      id: id,
      text: newTodoText,
      completed: false,
      //author: newAuthor,
      time: timeStamp,
    }
    setTodo(newTodo)

     if (newTodo) {
      setTodos([...todos, newTodo]);
    }
    console.log(todos)
  }
}

const getTimeStamp = () => {
  const time = new Date().toISOString().split("T")[0];
  return time;
};

  return (
    <>
    <AddTodo 
    handleSubmit={handleSubmit}
    />
      <TodoList todos={todos}/>
    </>
  );
}

/*
const [todos, setTodos] = useState([]);

    const addTodo = () => {
    const newTodo = prompt('Enter a new todo:');
    if (newTodo) {
      setTodos([...todos, { id: uuidv4(), text: newTodo }]);
    }
  };

    const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const moveTodoUp = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index > 0) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index - 1];
      newTodos[index - 1] = temp;
      setTodos(newTodos);
    }
  };
  
  const moveTodoDown = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;
      setTodos(newTodos);
    }
  };









*/