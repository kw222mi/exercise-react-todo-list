import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import "./index.css"

export interface ITodo {
    id:string,
    text:string,
    completed:boolean,
    author:string,
    time:string
}


export function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleSubmit (event:React.FormEvent<HTMLFormElement>) {
    const id = uuidv4();
   
     const form = event.currentTarget as HTMLFormElement;
      const elements = form.elements as HTMLFormControlsCollection;
      const newTodoInput = elements.namedItem('newTodoInput') as HTMLInputElement;
      const authorInput = elements.namedItem('author') as HTMLInputElement;
      const newTodoText: string = newTodoInput.value;
      const newAuthor: string = authorInput.value;

    //const newTodoText = event.target.elements.newTodoInput.value
    //const newAuthor = event.target.elements.author.value
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
       setTodos((prevTodos: ITodo[]) => [...prevTodos, newTodo]);
    }
    console.log(todos)
    form.reset(); 
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
    handleSubmit={handleSubmit}
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

