import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';



export function App() {
 
  const [todos, setTodos] = useState([]);

  function handleSubmit (event) {
    const id = uuidv4();
    console.log(id)
    console.log("handle submit")
    console.log(event.target.elements.newTodoInput.value)
    console.log(event.target.elements.author.value)
    const newTodoText = event.target.elements.newTodoInput.value
    const newAuthor = event.target.elements.author.value
    event.preventDefault();
     const timeStamp = getTimeStamp();

     if (newTodoText !== "") {
      const newTodo = {
      id: id,
      text: newTodoText,
      completed: false,
      author: newAuthor,
      time: timeStamp,
    }
    

     if (newTodo) {
       setTodos(prevTodos => [...prevTodos, newTodo]);
    }
    console.log(todos)
    event.target.reset(); 
  }
}

const getTimeStamp = () => {
  const time = new Date().toISOString().split("T")[0];
  return time;
};

const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

 const setCompleted = (id) => {
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
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

  return (
    <>
    <AddTodo 
    handleSubmit={handleSubmit}
    />
      <TodoList 
      todos={todos}
      deleteTodo={deleteTodo}
      moveTodoDown={moveTodoDown}
      moveTodoUp={moveTodoUp}
      setCompleted={setCompleted}
      />
    </>
  );
}

