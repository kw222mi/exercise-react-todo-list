import "./todoItem.css"

interface ITodoItemProps {
    id:string,
    text:string,
    author:string,
    completed:boolean,
    time:string
    deleteTodo:(id: string) => void,
    moveTodoUp: (id: string) => void,
    moveTodoDown: (id: string) => void,
    setCompleted: (id: string) => void,
    editTodo: (id: string) => void,
    sortByTimeStamp: () => void,
    sortByAuthor: () => void,
}

const TodoItem = (props:ITodoItemProps) => {
    return ( 
        <>
        <div className="todo-item" id="app">
          <button  className="complete-btn" onClick={() => props.setCompleted(props.id)}>
          <span className="material-symbols-outlined"> {props.completed ? "undo" : "done" } </span> </button>

          <div className="todo-item-text">
          <span className={`todo-text ${props.completed ? "completed" : ""}`}>{props.text}</span>
          <span  className="author">Author: {props.author}</span>
          </div>

         <div className="move-button-container">
          <button className="move-up-btn" onClick={() => props.moveTodoUp(props.id)}><span className="material-symbols-outlined">arrow_drop_up</span></button>
          <button className="move-down-btn" onClick={() => props.moveTodoDown(props.id)}><span className="material-symbols-outlined">arrow_drop_down</span></button>
          </div>

          <button className="edit-btn" onClick={() => props.editTodo(props.id)}><span className="material-symbols-outlined">edit</span></button>
           <button className="delete-btn" onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
          
          <span className="time-stamp">Created:{props.time}</span>
      </div> 
  </>
  
    )
}
 
export default TodoItem;




