import { useState } from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {
   

  
    return ( 
        <div id="app">
      
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id} // Använd id som nyckel
          text={todo.text}
          completed={todo.completed}
          onDelete={() => deleteTodo(todo.id)}
          onMoveUp={() => moveTodoUp(todo.id)}
          onMoveDown={() => moveTodoDown(todo.id)}
        />
      ))}
    </div>

     );
}
 
export default TodoList;




  

  

  
  
