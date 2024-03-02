import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import "./index.css"
import {ITodoInfo} from "./AddTodo"

export interface ITodo {
    id:string,
    text:string,
    completed:boolean,
    author:string,
    time:string
}


export function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function addNewTodo (addTodoInfo:ITodoInfo) {
    const id = uuidv4();
      
     const timeStamp = getTimeStamp();

     if ( addTodoInfo.text !== "") {
      const newTodo = {
      id: id,
      text: addTodoInfo.text,
      completed: false,
      author: addTodoInfo.author,
      time: timeStamp,
    }
     if (newTodo) {
       setTodos((prevTodos: ITodo[]) => [...prevTodos, newTodo]);
    }
    console.log(todos)
    
  }
}

const getTimeStamp = () => {
  const time = new Date().toISOString().split("T")[0];
  return time;
};

const deleteTodo = (id:string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

 const setCompleted = (id:string) => {
  setTodos(prevTodos =>
    prevTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

const editTodo = (id:string) => {
  // Hitta index för todo med det angivna id:t
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  // Kontrollera om todo med det angivna id:t finns
  if (todoIndex !== -1) {
    const newText = window.prompt(
      "Please enter a new text for the todo",
      todos[todoIndex].text
    );

    // Uppdatera todo-texten om användaren angett en ny text
    if (newText !== null) {
      setTodos(prevTodos => {
        const updatedTodos = [...prevTodos];
        updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], text: newText };
        return updatedTodos;
      });
    }
  } else {
    console.error(`Todo with id ${id} not found`);
  }
};


  const moveTodoUp = (id:string) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index > 0) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index - 1];
      newTodos[index - 1] = temp;
      setTodos(newTodos);
    }
  };
  
  const moveTodoDown = (id:string) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;
      setTodos(newTodos);
    }
  };

const sortByTimeStamp = () => {
  setTodos(prevTodos => [...prevTodos].sort((a, b) => {
    //convert to milliseconds to compare 
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  }));
};

const sortByAuthor = () => {
  setTodos(prevTodos => [...prevTodos].sort((a, b) => {
    const authorA = a.author.toUpperCase();
    const authorB = b.author.toUpperCase();
    return authorA.localeCompare(authorB);
  }));
};

  return (
    <>
    <AddTodo 
    addNewTodo={addNewTodo}
    />
      <TodoList 
      todos={todos}
      deleteTodo={deleteTodo}
      moveTodoDown={moveTodoDown}
      moveTodoUp={moveTodoUp}
      setCompleted={setCompleted}
      editTodo={editTodo}
      sortByTimeStamp={sortByTimeStamp}
      sortByAuthor={sortByAuthor}
      />
    </>
  );
}

