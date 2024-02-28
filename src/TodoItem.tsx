import "./todoItem.css"

interface ITodoIttemProps{
    text: string,
   completed:boolean,

}
const TodoItem = (props:ITodoIttemProps) => {
    return ( 
        <>
           <div id="app">
     <span className="todo-text" id="todo-text-${index}">{props.text}</span>
      <button id="delete-${index}" className="delete-btn"><span className="material-symbols-outlined">delete</span></button>
       <button id="complete-{index}" className="complete-btn">
        <span className="material-symbols-outlined">
          {props.completed ? "undo" : "done" }
        </span>
      </button>
     
    </div>
        

  </>
  
    )
}
 
export default TodoItem;

/*

       <div id="app">
      <span>{props.text}</span>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onMoveUp} disabled={onMoveUp ? false : true}>Up</button>
      <button onClick={onMoveDown} disabled={onMoveDown ? false : true}>Down</button>
    </div>

interface ITodoIttemProps {
    text:string,
    author:string,
    completed:boolean,
    time:string

}

    <span className="todo-text" id="todo-text-${index}">{props.text}</span>
    <button id="delete-${index}" className="delete-btn"><span className="material-symbols-outlined">delete</span></button>
    <button id="complete-${index}" className="complete-btn"><span className="material-symbols-outlined">{
    props.completed ? "undo" : "done"
  }</span></button>
    <button id="move-up-${index}" className="move-up-btn"><span className="material-symbols-outlined">arrow_upward</span></button>
    <button id="move-down-${index}" className="move-down-btn"><span className="material-symbols-outlined">arrow_downward</span></button>
    <button id="edit-${index}" className="edit-btn"><span className="material-symbols-outlined">edit</span></button>
    <span id="author-${index}" className="author">Author: {props.author}</span>
    <span id="time-stamp-${index}" className="time-stamp">Created:{
    props.time
  }</span>

*/