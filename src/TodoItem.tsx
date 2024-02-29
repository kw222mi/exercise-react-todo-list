import "./todoItem.css"

interface ITodoItemProps {
    id:string,
    text:string,
    author?:string,
    completed:boolean,
    time:string
    deleteTodo:(id: string) => void,
    moveTodoUp: (id: string) => void,
    moveTodoDown: (id: string) => void,
    setCompleted: (id: string) => void,
}

const TodoItem = (props:ITodoItemProps) => {
    return ( 
        <>
           <div id="app">
     <span className={`todo-text ${props.completed ? "completed" : ""}`} id="todo-text-${index}">{props.text}</span>
      <button id="delete-${index}" className="delete-btn" onClick={() => props.deleteTodo(props.id)}><span className="material-symbols-outlined">delete</span></button>
       <button id="complete-{index}" className="complete-btn" onClick={() => props.setCompleted(props.id)}>
        <span className="material-symbols-outlined">
          {props.completed ? "undo" : "done" } </span> </button>
      <button id="move-up-${index}" className="move-up-btn" onClick={() => props.moveTodoUp(props.id)}><span className="material-symbols-outlined">arrow_upward</span></button>
    <button id="move-down-${index}" className="move-down-btn" onClick={() => props.moveTodoDown(props.id)}><span className="material-symbols-outlined">arrow_downward</span></button>
    <button id="edit-${index}" className="edit-btn"><span className="material-symbols-outlined">edit</span></button>
    <span id="author-${index}" className="author">Author: {props.author}</span>
       <span id="time-stamp-${index}" className="time-stamp">Created:{props.time}</span>
    </div> 
  </>
  
    )
}
 
export default TodoItem;




