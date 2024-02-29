import TodoItem from "./TodoItem";
import { ITodo } from "./App";
import "./todoList.css"

  interface ITodoListProps {
    todos:ITodo[],

    deleteTodo:(id: string) => void,
    moveTodoUp: (id: string) => void,
    moveTodoDown: (id: string) => void,
    setCompleted: (id: string) => void,
    editTodo: (id: string) => void,
    sortByTimeStamp: () => void,
    sortByAuthor: () => void,
}

const TodoList = (props:ITodoListProps) => {
  
    return ( 
        <div id="app" className="todo-list">
           <button className="sort-btn" onClick={() => props. sortByAuthor()}>Sort by Author</button>
      
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id} 
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          time={todo.time}
          author={todo.author}

          deleteTodo={props.deleteTodo}
          moveTodoDown={props.moveTodoDown}
          moveTodoUp={props.moveTodoUp}
          setCompleted={props.setCompleted}
          editTodo={props.editTodo}
          sortByTimeStamp={props.sortByTimeStamp}
          sortByAuthor={props.sortByAuthor}
        
        />
      ))}
    </div>

     );
}
 
export default TodoList;
 
  
