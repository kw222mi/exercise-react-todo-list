import TodoItem from "./TodoItem";


const TodoList = (props) => {
  
    return ( 
        <div id="app">
      
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id} // Använd id som nyckel
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          time={todo.time}
          author={todo.author}
          deleteTodo={props.deleteTodo}
          moveTodoDown={props.moveTodoDown}
          moveTodoUp={props.moveTodoUp}
          setCompleted={props.setCompleted}
        
        />
      ))}
    </div>

     );
}
 
export default TodoList;
 
  
